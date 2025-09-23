"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset?: () => void;
}) {
  return (
    <html>
      <body>
        <main className="flex items-center justify-center w-full h-screen px-4">
          <Card className="w-full h-full flex flex-col items-center justify-center border-0 ">
            <CardContent className="text-center p-8">
              <div className="mb-8 inline-block">
                {/* Illustration */}
                <Image
                  src="/images/error.svg"
                  alt="Server Down illustration"
                  width={400}
                  height={400}
                  priority
                />
              </div>

              {/* Error Content */}
              <div className="mb-8">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4 text-balance">
                  Error! {error.message}
                </h1>
                <Button
                  variant={"outline"}
                  onClick={() => {
                    if (reset) reset();
                  }}
                >
                  Try again
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </body>
    </html>
  );
}
