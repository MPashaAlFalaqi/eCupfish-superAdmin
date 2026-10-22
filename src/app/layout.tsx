import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "eCupFish - Super Admin Dashboard",
  description: "Dashboard Super Admin Pengelolaan Akun Pembeli & Pembudidaya (Mitra) eCupFish",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-[#F4F7FB] text-slate-800 antialiased selection:bg-amber-100 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}
