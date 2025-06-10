import { siteConfig } from "@/lib/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AppFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-msl-dark-blue py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="MSL Logo"
              width={180}
              height={60}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Layanan</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="/services"
                className="text-gray-400 hover:text-white transition-colors block"
              >
                Transportasi
              </Link>
              <Link
                href="/services"
                className="text-gray-400 hover:text-white transition-colors block"
              >
                Pergudangan
              </Link>
              <Link
                href="/services"
                className="text-gray-400 hover:text-white transition-colors block"
              >
                Packaging
              </Link>
              <Link
                href="/services"
                className="text-gray-400 hover:text-white transition-colors block"
              >
                Last Mile
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Perusahaan</h4>
            <div className="space-y-2 text-sm">
              {siteConfig.navigation.map((item) => (
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
            <h4 className="font-semibold text-white">Kontak</h4>
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
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
