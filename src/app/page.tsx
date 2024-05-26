import Image from "next/image";
import { BaseButton } from "./ui/BaseButton";
import cover_image from "../../public/Neoprompts.png";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-500 dark:bg-[#212D4D]">
      <div className="flex flex-col items-center gap-6">
        <div className="max-w-[70vw] w-[600px]">
          <Image
            src={cover_image}
            alt="Next.js Logo"
            placeholder="blur"
            priority
          />
        </div>
        <div>
          <BaseButton link="dashboard">Get Started</BaseButton>
        </div>
      </div>
    </main>
  );
}
