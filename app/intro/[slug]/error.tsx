"use client"; // Error boundaries must be Client Components

import Image from "next/image";
import { useEffect } from "react";
import wronghole from "@/public/images/wrong_hole.webp";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Wrong Hole!</h2>
      <Image placeholder="blur" src={wronghole} alt={"wrong-hole"}></Image>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
