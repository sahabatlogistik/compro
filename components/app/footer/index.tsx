"use client";

import { siteConfig } from "@/lib/config";
import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

import Logo from "@/app/logo.png"; // Adjust the path as necessary

export default function AppFooter() {
  const t = useTranslations();
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: t("navigation.home"), href: "/" },
    { name: t("navigation.services"), href: "/services" },
    { name: t("navigation.about"), href: "/about" },
    { name: t("navigation.contact"), href: "/contact" },
  ];

  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src={Logo}
              alt="MSL Logo"
              width={180}
              height={60}
              className="h-7 w-auto"
            />
            <p className="text-gray-600 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-msl-navy">
              {t("footer.services_title")}
            </h4>
            <ul className="space-y-3 text-sm">
              {t
                .raw("home.services.items")
                .map((service: any, index: number) => (
                  <li key={index + service.id}>
                    <Link
                      href={`/services?service=${service.id}`}
                      className="text-gray-600 hover:text-msl-navy transition-colors block"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-msl-navy">
              {t("footer.company_title")}
            </h4>
            <div className="space-y-2 text-sm">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-msl-navy transition-colors block"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-msl-navy">
              {t("footer.contact_title")}
            </h4>
            <div className="space-y-2 text-sm text-gray-600">
              {!siteConfig.settings.hide_phone && (
                <div>{siteConfig.contact.phone}</div>
              )}
              <div>{siteConfig.contact.email}</div>
              <div>
                {siteConfig.contact.address.street}
                <br />
                {siteConfig.contact.address.city}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} {siteConfig.name}. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
