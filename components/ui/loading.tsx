"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "@/app/logo.png";
import { useTranslations } from "next-intl";

interface LoadingProps {
  className?: string;
}

export function Loading({ className }: LoadingProps) {
  const t = useTranslations("loading");

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center",
        className
      )}
    >
      <div className="flex flex-col items-center space-y-8">
        {/* Loading Text */}
        <div className="text-center space-y-4">
          <Image
            src={Logo}
            alt="MSL Logo"
            width={180}
            height={60}
            className="h-12 w-auto brightness-0 invert mx-auto"
          />
          <h3 className="text-xl font-bold text-white">{t("company_name")}</h3>
          <p className="text-blue-200 text-sm">{t("tagline")}</p>

          {/* Loading dots */}
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface PageLoadingProps {
  isLoading: boolean;
  onLoadingComplete?: () => void;
}

export function PageLoading({
  isLoading,
  onLoadingComplete,
}: PageLoadingProps) {
  const [progress, setProgress] = useState(0);
  const t = useTranslations("loading");

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              onLoadingComplete?.();
            }, 500);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isLoading, onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-8 max-w-md mx-auto px-4">
        {/* Loading Text */}
        <div className="text-center space-y-3">
          <Image
            src={Logo}
            alt="MSL Logo"
            width={180}
            height={60}
            className="h-16 w-auto brightness-0 invert mx-auto mb-10"
          />

          {/* Progress Bar */}

          <h3 className="text-xl font-bold text-white">{t("company_name")}</h3>
          <p className="text-blue-200 text-sm">{t("tagline")}</p>
          <div className="w-96 bg-slate-700 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-400 via-green-400 to-blue-500 h-2 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
            </div>
          </div>
          <p className="text-slate-300 text-xs">
            {t("loading_text")} {Math.round(progress)}%
          </p>
        </div>
      </div>
    </div>
  );
}
