import React from "react";
import SideBar from "./_components/side-bar";
import NavBreadCrumbs from "./_components/nav-breadcrumbs";
import Header from "./_components/header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid h-screen grid-cols-[256px_1fr] lg:grid-cols-[280px_1fr]">
      {/* Sidebar */}
      <SideBar />

      {/* Content Area */}
      <section className="flex h-full w-full flex-col">
        {/* BreadCrumbs */}
        <NavBreadCrumbs />

        {/* Content */}
        <div className="flex-1 bg-gray-50 p-6">{children}</div>
      </section>
    </main>
  );
}
