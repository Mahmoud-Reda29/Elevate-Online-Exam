import SideBar from "./_components/sidebar";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
      {/* Sidebar */}
      <section className="hidden h-svh overflow-hidden bg-gray-250 md:flex">
        <SideBar />
      </section>

      {/* Auth Forms */}
      <section className="flex items-center justify-center gap-3 px-5 sm:px-0">{children}</section>
    </main>
  );
}
