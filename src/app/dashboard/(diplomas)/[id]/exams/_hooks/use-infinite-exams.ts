import { getDiplomas } from "@/lib/api/diplomas.api";
import { getExams } from "@/lib/api/exams.api";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useInfiniteExams(subjectId: string, limit: number = 6) {
  const query = useInfiniteQuery({
    queryKey: ["exam by subject", limit],
    queryFn: async ({ pageParam = 1 }) => {
      const result = await getExams({ subjectId, page: pageParam, limit });
      return result;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const meta = lastPage.metadata;

      // use `nextPage` if available
      if (meta?.nextPage) return meta.nextPage;

      // fallback if only currentPage/numberOfPages exist
      if (meta?.currentPage && meta?.numberOfPages) {
        return meta.currentPage < meta.numberOfPages ? meta.currentPage + 1 : undefined;
      }

      return undefined;
    },
  });

  const exams = query.data?.pages.flatMap((page) => page.exams ?? []) ?? [];

  return {
    exams,
    isLoading: query.isLoading,
    error: query.error,
    fetchNextPage: query.fetchNextPage,
    isFetchingNextPage: query.isFetchingNextPage,
    hasNextPage: query.hasNextPage,
  };
}
