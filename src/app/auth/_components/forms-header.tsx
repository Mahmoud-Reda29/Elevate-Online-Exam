import React from "react";

interface FormsHeaderProps {
  title: string;
  children?: React.ReactNode;
}

export default function FormsHeader({ title, children }: FormsHeaderProps) {
  return (
    <div className="flex flex-col gap-2 pb-6">
      {/* title */}
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>

      {/* Description if exists */}
      {children}
    </div>
  );
}
