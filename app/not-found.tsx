import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100dvh-168px)] flex-col items-center justify-center gap-10 bg-background">
      <h1 className="text-xl md:text-3xl">Not Found</h1>
      <p className="text-base md:text-xl">
        You either do not have access permissions to the page you were on or the
        URL is invalid.
      </p>
      <Button>
        <Link href="/">Return Home</Link>
      </Button>
    </main>
  );
}
