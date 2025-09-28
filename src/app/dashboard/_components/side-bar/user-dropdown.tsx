"use client";
import ProfileSkeleton from "@/components/skeletons/dashboard-sidebar/user-dropdown.skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical, LogOut, UserRound } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function UserDropDown() {
  // Session
  const { data: session, status } = useSession();

  if (status === "loading") return <ProfileSkeleton />;

  return (
    <footer className="shrink-0">
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <Avatar className="h-8 w-8 rounded-none">
          <AvatarFallback className="rounded-none border border-blue-600 bg-blue-100">
            {session?.user.firstName[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>

        {/* User Info */}
        <div className="flex min-w-0 flex-col">
          <p className="text-sm font-medium text-gray-900">{session?.user.firstName}</p>
          <p className="overflow-hidden text-ellipsis text-xs text-gray-500">
            {session?.user.email}
          </p>
        </div>

        {/* Dropdown aligned right */}
        <DropdownMenu>
          <DropdownMenuTrigger className="ml-auto p-1">
            <EllipsisVertical size={20} className="text-gray-500" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="h-24 w-64">
            <Link href="/profile">
              <DropdownMenuItem>
                <UserRound size={20} className="text-gray-600" />
                Account
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()}>
              <LogOut size={20} className="rotate-180 text-red-600" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </footer>
  );
}
