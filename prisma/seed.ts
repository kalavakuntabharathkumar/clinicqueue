import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
async function main() {
 if (await db.appointment.count()) return;
 await db.appointment.createMany({data:[
 {patientName:"Aarav Sharma",email:"aarav@example.com",phone:"9000000101",doctor:"Dr. Meera Rao",department:"Cardiology",date:new Date(Date.now()+86400000),time:"09:30",reason:"Routine consultation",status:"Scheduled"},
 {patientName:"Diya Nair",email:"diya@example.com",phone:"9000000102",doctor:"Dr. K. Iyer",department:"Dermatology",date:new Date(Date.now()+172800000),time:"11:00",reason:"Follow-up visit",status:"Confirmed"}
 ]});
}
main().finally(()=>db.$disconnect());
