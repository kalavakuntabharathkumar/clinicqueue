import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"ClinicQueue | Appointment Portal",description:"Clinic appointment scheduling dashboard"};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
