import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

export default function NotFoundComponent() {
  return (
    <main className="flex items-center justify-center w-full h-screen px-4">
      <Card className="w-full h-full flex flex-col items-center justify-center border-0 ">
        <CardContent className="text-center p-8">
          <div className="mb-8 inline-block">
            {/* 404 Illustration */}
            <Image
              src="/images/404.svg"
              alt="404 illustration"
              width={400}
              height={400}
              priority
            />
          </div>

          {/* Content */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4 text-balance">
              This page does not exist.
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8 text-pretty">
              We couldn’t find the page your are looking for, please make sure
              you are in the right path.
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
