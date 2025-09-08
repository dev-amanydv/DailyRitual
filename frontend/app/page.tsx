import ThemeToggle from "@/components/Themes/ThemeToggle";

export default function Home() {
  return (
    <div className="font-sans w-full min-h-screen bg-white text-black dark:bg-black dark:text-white flex items-center justify-center">
      Aman
      <ThemeToggle />
    </div>
  );
}