"use client";

import React from "react";
import ExamItem from "./exam-item";
import { useInfiniteExams } from "../_hooks/use-infinite-exams";
import InfiniteScroll from "react-infinite-scroll-component";
import { ChevronDown } from "lucide-react";

export default function ExamsList({ subjectId }: { subjectId: string }) {
  const { exams, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, error } =
    useInfiniteExams(subjectId);
  // Properly handle the fetchNextPage call
  const handleFetchNextPage = async () => {
    console.log("handleFetchNextPage called");
    if (hasNextPage && !isFetchingNextPage) {
      await fetchNextPage();
    }
  };
  return (
    <InfiniteScroll
      dataLength={exams.length}
      next={handleFetchNextPage}
      hasMore={!!hasNextPage}
      loader={
        <p className="flex flex-col items-center justify-center p-2 text-center">
          Scroll to view more
          <ChevronDown />
        </p>
      }
      scrollThreshold={0.8}
      className="overflow-visible"
      scrollableTarget="scrollableDiv"
      endMessage={<p className="p-2 text-center">End of list</p>}
    >
      <div className="flex flex-col gap-4 bg-white px-6 pt-6">
        {exams.map((exam) => (
          <ExamItem key={exam._id} exam={exam} />
        ))}
      </div>
    </InfiniteScroll>
  );
}
