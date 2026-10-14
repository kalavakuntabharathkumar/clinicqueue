import {NextResponse} from "next/server";
import {z} from "zod";
import {prisma} from "@/lib/prisma";
const schema=z.object({patientName:z.string().trim().min(2).max(100),email:z.string().email(),phone:z.string().min(7).max(20),doctor:z.string().min(2),department:z.string().min(2),date:z.string().min(1),time:z.string().regex(/^\d{2}:\d{2}$/),reason:z.string().trim().min(3).max(500)});
export async function GET(){return NextResponse.json(await prisma.appointment.findMany({orderBy:{date:"asc"}}));}
export async function POST(req:Request){const p=schema.safeParse(await req.json());if(!p.success)return NextResponse.json({error:"Invalid appointment details",issues:p.error.flatten()},{status:400});const date=new Date(p.data.date+"T00:00:00");if(Number.isNaN(date.getTime()))return NextResponse.json({error:"Invalid date"},{status:400});const row=await prisma.appointment.create({data:{...p.data,date,status:"Scheduled"}});return NextResponse.json(row,{status:201});}
