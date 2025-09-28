"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function BackLink() {
  // Navigation
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className="flex h-20 w-9 items-center justify-center border p-2"
    >
      <ChevronLeft size={24} />
    </div>
  );
}
