"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

export default function UnauthorizedComponent() {
  // Navigation
  const searchParams = useSearchParams();
  const callbackUrl = encodeURIComponent(
    searchParams.get("callbackUrl") || "/"
  );
  return (
    <main className="flex items-center justify-center w-full h-screen px-4">
      <Card className="w-full h-full flex flex-col items-center justify-center border-0 ">
        <CardContent className="text-center p-8">
          <div className="mb-8 inline-block">
            {/* Shield Illustration */}
            <Image
              src="/images/shield.png"
              alt="Security shield with padlock"
              width={350}
              height={350}
              priority
            />
          </div>

          {/* Content */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-balance">
              You are not authorized to access this page.
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8 text-pretty">
              If you think this is wrong, please contact the support.
            </p>

            <Link href={`/login?callbackUrl=${callbackUrl}`}>
              <Button variant="outline">Go to Homepage</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
