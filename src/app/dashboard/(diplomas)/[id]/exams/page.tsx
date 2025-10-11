import Header from "@/app/dashboard/_components/header";
import { BookOpenCheck } from "lucide-react";
import React from "react";
import ExamsList from "./_components/exam-list";

export default function Exams({ params }: { params: { id: string } }) {
  return (
    <div className="flex h-full flex-col gap-6">
      {/* Header */}
      <Header title="Exams" icon={<BookOpenCheck size={45} />} backlink={true} />

      {/* Exams */}
      <div id="scrollableDiv" className="z-0 overflow-y-auto scrollbar-hide">
        <ExamsList subjectId={params.id} />
      </div>
    </div>
  );
}
