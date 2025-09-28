"use client";
import { cn } from "@/lib/utils/cn";
import { GraduationCap, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLinks() {
  const pathname = usePathname();

  const navLinks = [
    {
      icon: GraduationCap,
      title: "Diplomas",
      path: "/dashboard",
      href: "/dashboard",
    },
    {
      icon: Settings,
      title: "Account Settings",
      path: "/profile",
      href: "/profile",
    },
  ];

  return (
    <nav className="flex-1">
      <ul className="space-y-2">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={cn(
              "flex w-full items-center gap-2 p-4 text-gray-500",
              pathname === link.path && "border border-blue-600 bg-blue-100 text-blue-600",
            )}
          >
            <Link href={link.href} className="flex gap-2">
              <link.icon size={20} />
              <span className="whitespace-nowrap font-medium">{link.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
