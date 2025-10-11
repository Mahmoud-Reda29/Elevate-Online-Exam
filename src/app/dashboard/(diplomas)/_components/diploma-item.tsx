"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function DiplomaItem({ diploma }: { diploma: Diploma }) {
  // Navigation
  const pathname = usePathname();

  return (
    <Link href={`${pathname}/${diploma._id}/exams`} key={diploma._id} className="relative h-96">
      {/* Image */}
      <Image src={diploma.icon} fill alt={"Diploma Image"} className="h-full w-full object-cover" />

      {/* Overlay */}
      <div className="absolute bottom-2 left-2 right-2 bg-blue-600/60 p-4 text-white backdrop-blur">
        <h3 className="text-lg font-semibold">{diploma.name}</h3>
      </div>
    </Link>
  );
}
