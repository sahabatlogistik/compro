"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "@/app/logo.png";

interface LoadingProps {
  className?: string;
}

export function Loading({ className }: LoadingProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center",
        className
      )}
    >
      <div className="flex flex-col items-center space-y-8">
        {/* Earth Globe Animation */}
        <div className="relative">
          {/* Outer glow ring */}
          <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 via-green-400 to-blue-500 opacity-20 animate-pulse"></div>
          
          {/* Main Earth Globe */}
          <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-2xl animate-spin-slow">
            {/* Earth base with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-green-500 to-blue-600 rounded-full"></div>
            
            {/* Continents overlay */}
            <div className="absolute inset-0 rounded-full">
              {/* Africa/Europe */}
              <div className="absolute top-3 left-6 w-4 h-6 bg-green-600 rounded-lg transform rotate-12 opacity-80"></div>
              <div className="absolute top-2 left-8 w-3 h-4 bg-yellow-600 rounded-md transform -rotate-12 opacity-70"></div>
              
              {/* Asia */}
              <div className="absolute top-4 right-4 w-5 h-5 bg-green-700 rounded-lg transform rotate-45 opacity-75"></div>
              <div className="absolute top-6 right-2 w-3 h-3 bg-yellow-700 rounded-full opacity-60"></div>
              
              {/* Americas */}
              <div className="absolute top-8 left-2 w-2 h-8 bg-green-600 rounded-full transform -rotate-12 opacity-70"></div>
              <div className="absolute bottom-4 left-3 w-3 h-5 bg-yellow-600 rounded-lg transform rotate-6 opacity-65"></div>
              
              {/* Australia */}
              <div className="absolute bottom-6 right-6 w-2 h-2 bg-yellow-700 rounded-full opacity-60"></div>
            </div>
            
            {/* Cloud layer */}
            <div className="absolute inset-0 rounded-full">
              <div className="absolute top-1 left-4 w-6 h-2 bg-white rounded-full opacity-30 animate-float"></div>
              <div className="absolute top-8 right-3 w-4 h-1 bg-white rounded-full opacity-25 animate-float-delayed"></div>
              <div className="absolute bottom-4 left-8 w-5 h-1 bg-white rounded-full opacity-20 animate-float"></div>
            </div>
            
            {/* Atmosphere glow */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-300 to-cyan-300 opacity-30 blur-sm"></div>
          </div>
          
          {/* Orbital rings */}
          <div className="absolute inset-0 w-32 h-32">
            <div className="absolute inset-0 border-2 border-blue-300 rounded-full opacity-20 animate-spin-reverse"></div>
            <div className="absolute inset-2 border border-cyan-300 rounded-full opacity-15 animate-spin-slow"></div>
          </div>
          
          {/* Satellites */}
          <div className="absolute inset-0 w-32 h-32">
            <div className="absolute top-0 left-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-orbit"></div>
            <div className="absolute bottom-0 right-1/2 w-1 h-1 bg-red-400 rounded-full animate-orbit-reverse"></div>
            <div className="absolute left-0 top-1/2 w-1 h-1 bg-green-400 rounded-full animate-orbit-slow"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-4">
          <Image
            src={Logo}
            alt="MSL Logo"
            width={180}
            height={60}
            className="h-12 w-auto brightness-0 invert mx-auto"
          />
          <h3 className="text-xl font-bold text-white">
            PT. Mitra Sahabat Logistik
          </h3>
          <p className="text-blue-200 text-sm">Sahabat Terpercaya untuk Semua Pengiriman Anda</p>
          
          {/* Loading dots */}
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>
      </div>
      
      {/* Background stars */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full opacity-60 animate-twinkle"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-blue-200 rounded-full opacity-40 animate-twinkle-delayed"></div>
        <div className="absolute bottom-20 left-20 w-1 h-1 bg-yellow-200 rounded-full opacity-50 animate-twinkle"></div>
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-white rounded-full opacity-70 animate-twinkle-delayed"></div>
        <div className="absolute top-1/2 left-5 w-1 h-1 bg-blue-100 rounded-full opacity-30 animate-twinkle"></div>
        <div className="absolute top-1/3 right-5 w-1 h-1 bg-white rounded-full opacity-50 animate-twinkle-delayed"></div>
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
        {/* Earth Globe Animation */}
        <div className="relative">
          {/* Outer glow ring */}
          <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 via-green-400 to-blue-500 opacity-20 animate-pulse"></div>
          
          {/* Main Earth Globe */}
          <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-2xl animate-spin-slow">
            {/* Earth base with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-green-500 to-blue-600 rounded-full"></div>
            
            {/* Continents overlay */}
            <div className="absolute inset-0 rounded-full">
              {/* Africa/Europe */}
              <div className="absolute top-3 left-6 w-4 h-6 bg-green-600 rounded-lg transform rotate-12 opacity-80"></div>
              <div className="absolute top-2 left-8 w-3 h-4 bg-yellow-600 rounded-md transform -rotate-12 opacity-70"></div>
              
              {/* Asia */}
              <div className="absolute top-4 right-4 w-5 h-5 bg-green-700 rounded-lg transform rotate-45 opacity-75"></div>
              <div className="absolute top-6 right-2 w-3 h-3 bg-yellow-700 rounded-full opacity-60"></div>
              
              {/* Americas */}
              <div className="absolute top-8 left-2 w-2 h-8 bg-green-600 rounded-full transform -rotate-12 opacity-70"></div>
              <div className="absolute bottom-4 left-3 w-3 h-5 bg-yellow-600 rounded-lg transform rotate-6 opacity-65"></div>
              
              {/* Australia */}
              <div className="absolute bottom-6 right-6 w-2 h-2 bg-yellow-700 rounded-full opacity-60"></div>
            </div>
            
            {/* Cloud layer */}
            <div className="absolute inset-0 rounded-full">
              <div className="absolute top-1 left-4 w-6 h-2 bg-white rounded-full opacity-30 animate-float"></div>
              <div className="absolute top-8 right-3 w-4 h-1 bg-white rounded-full opacity-25 animate-float-delayed"></div>
              <div className="absolute bottom-4 left-8 w-5 h-1 bg-white rounded-full opacity-20 animate-float"></div>
            </div>
            
            {/* Atmosphere glow */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-300 to-cyan-300 opacity-30 blur-sm"></div>
          </div>
          
          {/* Orbital rings */}
          <div className="absolute inset-0 w-32 h-32">
            <div className="absolute inset-0 border-2 border-blue-300 rounded-full opacity-20 animate-spin-reverse"></div>
            <div className="absolute inset-2 border border-cyan-300 rounded-full opacity-15 animate-spin-slow"></div>
          </div>
          
          {/* Satellites */}
          <div className="absolute inset-0 w-32 h-32">
            <div className="absolute top-0 left-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-orbit"></div>
            <div className="absolute bottom-0 right-1/2 w-1 h-1 bg-red-400 rounded-full animate-orbit-reverse"></div>
            <div className="absolute left-0 top-1/2 w-1 h-1 bg-green-400 rounded-full animate-orbit-slow"></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 bg-slate-700 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-400 via-green-400 to-blue-500 h-2 rounded-full transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-3">
          <Image
            src={Logo}
            alt="MSL Logo"
            width={180}
            height={60}
            className="h-12 w-auto brightness-0 invert mx-auto"
          />
          <h3 className="text-xl font-bold text-white">
            PT. Mitra Sahabat Logistik
          </h3>
          <p className="text-blue-200 text-sm">Sahabat Terpercaya untuk Semua Pengiriman Anda</p>
          <p className="text-slate-300 text-xs">Memuat halaman... {Math.round(progress)}%</p>
        </div>
      </div>
      
      {/* Background stars */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full opacity-60 animate-twinkle"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-blue-200 rounded-full opacity-40 animate-twinkle-delayed"></div>
        <div className="absolute bottom-20 left-20 w-1 h-1 bg-yellow-200 rounded-full opacity-50 animate-twinkle"></div>
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-white rounded-full opacity-70 animate-twinkle-delayed"></div>
        <div className="absolute top-1/2 left-5 w-1 h-1 bg-blue-100 rounded-full opacity-30 animate-twinkle"></div>
        <div className="absolute top-1/3 right-5 w-1 h-1 bg-white rounded-full opacity-50 animate-twinkle-delayed"></div>
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-200 rounded-full opacity-40 animate-twinkle"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-yellow-100 rounded-full opacity-60 animate-twinkle-delayed"></div>
      </div>
    </div>
  );
}