"use client";

import { useRouter } from "next/navigation";

export function useRedirect() {
  const router = useRouter();

  function redirectTo(url: string) {
    router.push(url);
  }

  return { redirectTo };
}
