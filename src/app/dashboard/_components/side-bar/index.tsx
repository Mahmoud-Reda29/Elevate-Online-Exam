import { FolderCode } from "lucide-react";
import Image from "next/image";
import React, { Suspense } from "react";
import NavLinks from "./nav-links";
import UserDropDown from "./user-dropdown";
import ProfileSkeleton from "@/components/skeletons/dashboard-sidebar/user-dropdown.skeleton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export default async function SideBar() {
  return (
    <aside className="flex h-screen flex-col justify-between gap-14 border-r bg-blue-50 p-8">
      {/* Header */}
      <header>
        <div className="flex flex-col gap-2">
          {/* Logo */}
          <Image
            src={"/images/elevate-logo.png"}
            width={192}
            height={37}
            priority
            alt="elevate logo"
          />
          {/* Title */}
          <div className="flex items-center gap-3 text-blue-600">
            {/* Icon */}
            <FolderCode size={40} />

            {/* Title */}
            <h1 className="text-xl font-bold">Exam App</h1>
          </div>
        </div>
      </header>

      <div className="flex h-screen flex-col justify-between">
        {/* Navigation */}
        <NavLinks />

        {/* User Profile */}
        <UserDropDown />
      </div>
    </aside>
  );
}
