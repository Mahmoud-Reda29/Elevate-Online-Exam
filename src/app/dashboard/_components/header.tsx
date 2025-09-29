import React from "react";
import BackLink from "./back-link";

interface DashboardHeaderProps {
  title: string;
  icon: React.ReactNode;
  backlink: boolean;
}

export default function Header({ title, icon, backlink }: DashboardHeaderProps) {
  return backlink ? (
    <div className="sticky top-0 z-20 flex w-full gap-2">
      {/* Baclink */}
      <BackLink />

      {/* Header */}
      <div className="flex w-full items-center gap-4 bg-blue-600 p-4 text-white">
        {/* Header Icon */}
        {icon}

        {/* Header Title */}
        <p className="font-inter text-3xl font-semibold">{title}</p>
      </div>
    </div>
  ) : (
    <div className="sticky top-0 z-20 flex items-center gap-4 bg-blue-600 p-4 text-white">
      {/* Header Icon */}
      {icon}

      {/* Header Title */}
      <p className="font-inter text-3xl font-semibold">{title}</p>
    </div>
  );
}
