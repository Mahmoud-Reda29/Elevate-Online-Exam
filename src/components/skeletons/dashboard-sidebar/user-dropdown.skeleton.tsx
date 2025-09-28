import { Skeleton } from "@/components/ui/skeleton";

export default function ProfileSkeleton() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-8 w-8 rounded-full bg-blue-200" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-32 bg-blue-200" />
        <Skeleton className="h-4 w-28 bg-blue-200" />
      </div>
      <Skeleton className="h-8 w-2 rounded-full bg-blue-200" />
    </div>
  );
}
