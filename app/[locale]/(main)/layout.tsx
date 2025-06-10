"use client";

import { PageLoading } from "@/components/ui/loading";
import { useLoading } from "@/hooks/use-loading";
import { initAOS } from "@/lib/aos";
import { useEffect } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoading = useLoading(2000);

  useEffect(() => {
    if (!isLoading) {
      initAOS();
    }
  }, [isLoading]);

  if (isLoading) {
    return <PageLoading isLoading={isLoading} />;
  }

  return children;
}