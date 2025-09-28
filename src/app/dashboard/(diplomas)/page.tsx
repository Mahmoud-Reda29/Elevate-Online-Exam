import React from "react";
import { GraduationCap } from "lucide-react";
import Header from "../_components/header";

export default function page() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <Header title="Diplomas" icon={<GraduationCap size={45} />} backlink={false} />

      {/* Diplomas List */}
      <div>hell0 world</div>
    </div>
  );
}
