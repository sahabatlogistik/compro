import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AppNavbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="MSL Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-msl-navy transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-msl-navy hover:bg-msl-dark-blue text-white">
                Konsultasi Gratis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
