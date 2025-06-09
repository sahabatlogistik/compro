"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LoadingProps {
  className?: string;
}

export function Loading({ className }: LoadingProps) {
  return (
    <div className={cn("fixed inset-0 z-50 bg-white flex items-center justify-center", className)}>
      <div className="flex flex-col items-center space-y-4">
        {/* MSL Logo Animation */}
        <div className="relative">
          <div className="w-20 h-20 border-4 border-msl-orange/20 rounded-full animate-spin">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-msl-orange rounded-full animate-spin"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-msl-navy rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-msl-navy mb-2">PT. Mitra Sahabat Logistik</h3>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-msl-orange rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-msl-orange rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-msl-orange rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
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

export function PageLoading({ isLoading, onLoadingComplete }: PageLoadingProps) {
  const [progress, setProgress] = useState(0);

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
    <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-6 max-w-md mx-auto px-4">
        {/* Logo */}
        <div className="relative">
          <img 
            src="/LOGOOO MSL.png" 
            alt="MSL Logo" 
            className="h-16 w-auto animate-pulse"
          />
        </div>
        
        {/* Progress Bar */}
        <div className="w-64 bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-msl-navy to-msl-orange h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {/* Loading Text */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-msl-navy mb-2">PT. Mitra Sahabat Logistik</h3>
          <p className="text-gray-600">Memuat halaman...</p>
        </div>
      </div>
    </div>
  );
}