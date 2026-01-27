import { cn } from "@/lib/cn"
import { buttonVariants } from "fumadocs-ui/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-[calc(100dvh-56px)]">
      <div className="flex flex-col justify-center text-center">
        <h1 className="text-2xl md:text-5xl font-bold mb-4">Mago</h1>
        <p className="w-full max-w-3xl text-lg md:text-xl text-balance mx-auto">
          The <strong>magical</strong> state management library for JavaScript.
          Forget about complex Providers and boilerplate. Just create a box,
          and let the magic handle your state updates with <span className="text-indigo-500 font-mono italic text-sm">zero effort</span>.
        </p>
      </div>
      <Link
        href="/docs"
        className={cn(buttonVariants({ variant: "primary", size: "sm" }))}
      >
        Get Started
      </Link>
    </div >
  );
}
