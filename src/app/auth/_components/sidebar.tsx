import { APP_FEATURES } from "@/lib/constants/common/app-features";
import { cn } from "@/lib/utils/cn";
import { FolderCode } from "lucide-react";
import React from "react";

export default function SideBar() {
  return (
    <aside
      className={cn(
        "relative flex flex-col px-32 py-16",
        "before:absolute before:-right-[15%] before:top-[10%] before:-z-10 before:h-96 before:w-96 before:rounded-full before:bg-blue-400 before:content-['']",
        "after:absolute after:-bottom-[20%] after:left-[5%] after:-z-10 after:h-96 after:w-96 after:rounded-full after:bg-blue-400 after:content-['']",
      )}
    >
      {/* overlay layer */}
      <div className="absolute inset-0 -z-[1] backdrop-blur-3xl"></div>

      {/* Header */}
      <header className="flex gap-[10px] text-xl font-semibold">
        {/* Icon */}
        <FolderCode size={40} className="text-blue-600" />
        {/* Title */}
        <p className="py-1 align-middle">Exam App</p>
      </header>

      {/* features list */}
      <div className="py-24">
        {/* Header */}
        <h2 className="mb-14 text-3xl font-bold text-gray-800">
          Empower your learning journey with our smart exam platform.
        </h2>
        {/* list */}
        <ul className="flex flex-col gap-9 text-lg">
          {APP_FEATURES.map((feature) => (
            <li key={feature.id} className="flex items-start gap-5">
              {/* Icon */}
              <feature.icon
                size={36}
                className="shrink-0 border border-blue-600 p-[6px] text-blue-600"
              />
              {/* content */}
              <div className="flex flex-col gap-2">
                {/* title */}
                <p className="text-xl font-semibold text-blue-600">{feature.title}</p>
                {/* Description */}
                <span className="text-base text-gray-700">{feature.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
