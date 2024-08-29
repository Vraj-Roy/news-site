// app/loading.tsx or pages/loading.tsx
import NewsSkeleton from "./Skeletons/NewsSkeleton"; // Create a skeleton component

export default function Loading() {
  return (
    <div className="flex m-auto md:w-[80vw] justify-center md:justify-between p-4 flex-wrap mt-10">
      <NewsSkeleton />
      <NewsSkeleton />
      <NewsSkeleton />
    </div>
  );
}
