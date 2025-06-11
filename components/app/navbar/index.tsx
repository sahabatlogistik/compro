"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { ArrowRight, Globe } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Logo from "@/app/logo.png"; // Adjust the path as necessary

export default function AppNavbar() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  const navigation = [
    { name: t("navigation.home"), href: "/" },
    { name: t("navigation.services"), href: "/services" },
    { name: t("navigation.about"), href: "/about" },
    { name: t("navigation.contact"), href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={Logo}
                alt="MSL Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-msl-navy transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}

            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  {locale === "id" ? "ID" : "EN"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={pathname} locale="id">
                    🇮🇩 Bahasa Indonesia
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={pathname} locale="en">
                    🇺🇸 English
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-msl-navy hover:bg-msl-dark-blue text-white">
                {t("common.contact_us")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}