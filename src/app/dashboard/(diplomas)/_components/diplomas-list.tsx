"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import DiplomaItem from "./diploma-item";
import { useInfiniteDiplomas } from "../_hooks/use-infinite-diplomas";
import { ChevronDown } from "lucide-react";

export default function DiplomasList() {
  const { diplomas, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, error } =
    useInfiniteDiplomas();

  // Properly handle the fetchNextPage call
  const handleFetchNextPage = async () => {
    console.log("handleFetchNextPage called");
    if (hasNextPage && !isFetchingNextPage) {
      await fetchNextPage();
    }
  };

  if (isLoading) {
    return <p>Loading initial data...</p>;
  }

  if (error) {
    return <p>Error loading diplomas: {error.message}</p>;
  }

  return (
    <InfiniteScroll
      dataLength={diplomas.length}
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
      endMessage={<p className="text-center">End of list</p>}
    >
      <div className="grid h-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {diplomas.map((diploma) => (
          <DiplomaItem key={diploma._id} diploma={diploma} />
        ))}
      </div>
    </InfiniteScroll>
  );
}
