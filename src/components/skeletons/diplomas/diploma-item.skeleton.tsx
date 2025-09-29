import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function DiplomaItemSkeleton() {
  return (
    <div className="relative h-96">
      {/* Image skeleton */}
      <Skeleton className="h-full w-full rounded-md" />

      {/* Overlay skeleton */}
      <div className="absolute bottom-2 left-2 right-2 p-4 backdrop-blur">
        <Skeleton className="h-6 w-3/4" />
      </div>
    </div>
  );
}
