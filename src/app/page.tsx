import { prisma } from "@/lib/prisma";
import type { Appointment } from "@prisma/client";
import Dashboard from "@/components/Dashboard";
export const dynamic = "force-dynamic";
export default async function Home() {
 const rows = await prisma.appointment.findMany({orderBy:[{date:"asc"},{time:"asc"}]});
 return <Dashboard initialAppointments={rows.map((x: Appointment)=>({...x,date:x.date.toISOString(),createdAt:x.createdAt.toISOString()}))}/>;
}
