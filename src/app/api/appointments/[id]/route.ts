import {NextResponse} from "next/server";
import {z} from "zod";
import {prisma} from "@/lib/prisma";
export async function PATCH(req:Request,{params}:{params:Promise<{id:string}>}){const {id}=await params;const p=z.object({status:z.enum(["Scheduled","Confirmed","Cancelled","Completed"])}).safeParse(await req.json());if(!p.success)return NextResponse.json({error:"Invalid status"},{status:400});try{return NextResponse.json(await prisma.appointment.update({where:{id},data:p.data}));}catch{return NextResponse.json({error:"Appointment not found"},{status:404});}}
export async function DELETE(_req:Request,{params}:{params:Promise<{id:string}>}){const {id}=await params;try{await prisma.appointment.delete({where:{id}});return NextResponse.json({ok:true});}catch{return NextResponse.json({error:"Appointment not found"},{status:404});}}
