import React from "react";
import { GraduationCap } from "lucide-react";
import Header from "../_components/header";
import DiplomasList from "./_components/diplomas-list";

export default function Diplomas() {
  return (
    <div className="flex h-full flex-col gap-6">
      {/* Header */}
      <Header title="Diplomas" icon={<GraduationCap size={45} />} backlink={false} />

      {/* Diplomas List */}
      <div id="scrollableDiv" className="z-0 overflow-y-auto scrollbar-hide">
        <DiplomasList />
      </div>
    </div>
  );
}
