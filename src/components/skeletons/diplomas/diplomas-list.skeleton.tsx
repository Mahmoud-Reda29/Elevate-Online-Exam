import React from "react";
import { DiplomaItemSkeleton } from "./diploma-item.skeleton";

export default function DiplomasListSkeleton() {
  return (
    <div className="grid h-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, idx) => (
        <DiplomaItemSkeleton key={idx} />
      ))}
    </div>
  );
}
