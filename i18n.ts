import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "id"];

export default getRequestConfig(async ({ requestLocale }) => {
  // Validate that the incoming `locale` parameter is valid
  let locale = await requestLocale;

  // if (!locales.includes(locale as any)) notFound();
  if (!locale || !locales.includes(locale)) {
    locale = "en"; // Default to English if the locale is not valid
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
