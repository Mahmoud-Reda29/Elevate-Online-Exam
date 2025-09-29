import { getDiplomas } from "@/lib/api/diplomas.api";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useInfiniteDiplomas(limit: number = 6) {
  const query = useInfiniteQuery({
    queryKey: ["diplomas", limit],
    queryFn: async ({ pageParam = 1 }) => {
      console.log("Fetching diplomas - page:", pageParam, "limit:", limit);
      const result = await getDiplomas({ page: pageParam, limit });
      console.log("API response:", result);
      return result;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const meta = lastPage.metadata;
      console.log("Last page metadata:", meta);

      // use `nextPage` if available
      if (meta?.nextPage) return meta.nextPage;

      // fallback if only currentPage/numberOfPages exist
      if (meta?.currentPage && meta?.numberOfPages) {
        return meta.currentPage < meta.numberOfPages ? meta.currentPage + 1 : undefined;
      }

      return undefined;
    },
  });

  const diplomas = query.data?.pages.flatMap((page) => page.subjects ?? []) ?? [];
  console.log("Processed diplomas:", diplomas);
  console.log(
    "Query state - hasNextPage:",
    query.hasNextPage,
    "isLoading:",
    query.isLoading,
    "error:",
    query.error,
  );

  return {
    diplomas,
    isLoading: query.isLoading,
    error: query.error,
    fetchNextPage: query.fetchNextPage,
    isFetchingNextPage: query.isFetchingNextPage,
    hasNextPage: query.hasNextPage,
  };
}
