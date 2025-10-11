import { Timer } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function ExamItem({ exam }: { exam: Exam }) {
  // Navigation
  const pathname = usePathname();

  return (
    <Link
      href={`${pathname}/${exam._id}/questions`}
      key={exam._id}
      className="flex justify-between bg-blue-50 p-4"
    >
      <div className="flex flex-col gap-1">
        <p className="text-xl font-semibold text-blue-600">{exam.title}</p>
        <span>{exam.numberOfQuestions} Questions</span>
      </div>
      <div className="flex items-center justify-center gap-1">
        <Timer size={24} className="text-gray-400" />
        <p>Duration:</p>
        <span>{exam.duration} minutes</span>
      </div>
    </Link>
  );
}
