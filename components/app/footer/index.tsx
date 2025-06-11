"use client";

import { siteConfig } from "@/lib/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations, useLocale } from "next-intl";

import Logo from "@/app/logo.png"; // Adjust the path as necessary

export default function AppFooter() {
  const t = useTranslations();
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: t("navigation.home"), href: `/${locale}` },
    { name: t("navigation.services"), href: `/${locale}/services` },
    { name: t("navigation.about"), href: `/${locale}/about` },
    { name: t("navigation.contact"), href: `/${locale}/contact` },
  ];

  return (
    <footer className="bg-msl-dark-blue py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src={Logo}
              alt="MSL Logo"
              width={180}
              height={60}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">
              {t("footer.services_title")}
            </h4>
            <div className="space-y-2 text-sm">
              <Link
                href={`/${locale}/services`}
                className="text-gray-400 hover:text-white transition-colors block"
              >
                Transportasi
              </Link>
              <Link
                href={`/${locale}/services`}
                className="text-gray-400 hover:text-white transition-colors block"
              >
                Pergudangan
              </Link>
              <Link
                href={`/${locale}/services`}
                className="text-gray-400 hover:text-white transition-colors block"
              >
                Packaging
              </Link>
              <Link
                href={`/${locale}/services`}
                className="text-gray-400 hover:text-white transition-colors block"
              >
                Last Mile
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">
              {t("footer.company_title")}
            </h4>
            <div className="space-y-2 text-sm">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">
              {t("footer.contact_title")}
            </h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div>{siteConfig.contact.phone}</div>
              <div>{siteConfig.contact.email}</div>
              <div>
                {siteConfig.contact.address.street}
                <br />
                {siteConfig.contact.address.city}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {siteConfig.name}. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
