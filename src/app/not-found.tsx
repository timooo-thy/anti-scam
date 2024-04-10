import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100dvh-168px)] flex-col items-center bg-background">
      <div className="my-[75px] flex w-10/12 flex-col gap-10 md:my-[120px]">
        <h1 className="text-xl md:text-3xl">Not Found</h1>
        <p className="text-base md:text-xl">
          You either do not have access permissions to the page you were on or
          the URL is invalid.
        </p>
        <Button asChild className="w-min">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </main>
  );
}
