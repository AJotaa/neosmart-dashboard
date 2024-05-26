import { BaseSpinner } from "../ui/BaseSpinner";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <BaseSpinner />
    </div>
  );
}
