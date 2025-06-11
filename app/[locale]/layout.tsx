import { siteConfig } from "@/lib/config";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

import { Toaster } from "sonner";
import { AppFooter, AppNavbar } from "@/components/app";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <main className="min-h-screen w-full bg-white overflow-x-hidden">
            <AppNavbar />
            {children}
            <AppFooter />
          </main>

          <Toaster richColors position="bottom-right" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}