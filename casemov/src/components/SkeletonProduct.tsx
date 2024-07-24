export default function SkeletonProduct() {
    return (
      <div className="animate-pulse flex flex-col space-y-4">
        <div className="h-64 bg-gray-300 rounded"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        <div className="h-8 bg-gray-300 rounded w-1/2"></div>
      </div>
    );
  }