import Navbar from "@/components/Navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div className="w-full min-h-screen">
    <div className="w-full sticky top-0 left-0 h-18 backdrop-blur-lg bg-[#F5F5F5] dark:bg-[#141414]"><Navbar /></div>
    <div className="flex">
        <div className="bg-[#F5F5F5] dark:bg-[#141414] h-full sticky w-1/5">
        </div>
        <div className="rounded-2xl min-h-screen w-full bg-[#FFF] dark:bg-[#1a1a1a]">
            {children}
        </div>
    </div>
   </div>
  );
}
