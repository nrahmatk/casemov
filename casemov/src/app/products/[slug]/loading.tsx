import { Skeleton } from "@/components/ui/skeleton";

export default function ProductLoading() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="animate-pulse mx-auto max-w-6xl pt-2">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Product Image Skeleton */}
          <div className="aspect-square w-full overflow-hidden rounded-2xl bg-gray-200"></div>

          {/* Product Details Skeleton */}
          <div className="space-y-6">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-4 w-40" />

            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-5 w-5 rounded-full" />
              ))}
              <Skeleton className="ml-2 h-4 w-24" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            <Skeleton className="h-12 w-full" />

            <div className="flex items-center justify-between pt-4 space-x-2">
              <Skeleton className="h-10 w-full rounded-full" />
              <Skeleton className="h-10 min-w-10 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
