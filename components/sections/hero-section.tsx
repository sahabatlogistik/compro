import H1 from "../ui/h1";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations();

  return (
    <section
      id="beranda"
      className="relative py-24 lg:py-32 text-center md:text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8" data-aos="fade-right">
          <div className="grid grid-cols-12 gap-8 justify-between items-end mb-20">
            <div className="col-span-12 md:col-span-8">
              {/* <Badge
                variant="secondary"
                className="bg-msl-orange/10 text-msl-navy border-msl-orange/20"
              >
                {t("home.hero.badge")}
              </Badge> */}
              <H1 text={t("home.hero.title")} size="xl" />
            </div>

            <div className="col-span-12 md:col-span-4">
              <p className="text-base text-gray-600 leading-relaxed">
                {t("home.hero.subtitle")}
              </p>
            </div>
          </div>
          <Image
            src={"/images/hero-background.webp"}
            alt="Hero Background"
            width={1200}
            height={600}
            className="aspect-[16/7] object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
