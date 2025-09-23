import { CircleX } from "lucide-react";
import React from "react";

export default function FormsError({ error = "Something Went Wrong" }: { error: string | null }) {
  return (
    <>
      {error && (
        <div className="relative border border-red-600 bg-red-50 p-3 text-center text-red-600">
          {/* Icon floating above border */}
          <CircleX
            size={20}
            className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-50 text-red-600"
          />

          {/* Error Message */}
          {error}
        </div>
      )}
    </>
  );
}
