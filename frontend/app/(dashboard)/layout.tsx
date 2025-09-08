import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div className="w-full min-h-screen">
    <div className="w-full z-50 sticky top-0 left-0 h-18 backdrop-blur-lg bg-[#F5F5F5] dark:bg-[#1a1a1a]/80"><Navbar /></div>
    <div className="flex">
        <div className="bg-[#F5F5F5] dark:bg-[#1a1a1a] h-full sticky w-1/5">
        <Sidebar />
        </div>
        <div className="rounded-tl-2xl min-h-screen border-l-[2px] border-t-[2px] border-[#252525] p-2 w-full bg-[#FFF] dark:bg-[#141414]">
            {children}
        </div>
    </div>
   </div>
  );
}
