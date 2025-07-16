import {
  ArrowRight,
  Truck,
  Warehouse,
  Package,
  Users,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin as LocationIcon,
  Forklift,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/config";
import { Link } from "@/i18n/navigation";
import LeadForm from "@/components/forms/lead-form";
import { useTranslations } from "next-intl";
import H1 from "@/components/ui/h1";
import HeroSection from "@/components/sections/hero-section";
import GallerySwiperSection from "@/components/sections/gallery-swiper-section";
import ServiceCard from "@/components/cards/service-card";

const iconMap = {
  Truck,
  Warehouse,
  Package,
  LocationIcon,
  Users,
  Clock,
  Forklift,
};

export default function Home() {
  const t = useTranslations();

  return (
    <>
      <section className="relative py-24 lg:py-32 bg-msl-navy">
        <div className="absolute inset-0">
          <div
            className="w-full h-full absolute top-0 left-0  bg-[url('/images/hero-background.webp')] bg-cover bg-center opacity-60"
            aria-hidden="true"
          />
          <div className="w-full h-full absolute  top-0 left-0  bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <H1
              text={t("home.hero.title")}
              size="xl"
              className="mb-6 text-white"
            />
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
              {t("home.hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-msl-navy hover:bg-msl-dark-blue text-white"
                >
                  {t("home.hero.cta_primary")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="layanan" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16" data-aos="fade-up">
            <Badge
              variant="secondary"
              className="bg-msl-navy/10 text-msl-navy border-msl-navy/20"
            >
              {t("home.services.badge")}
            </Badge>
            <H1 text={t("home.services.title")} size="lg" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("home.services.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.raw("home.services.items").map((service: any, index: number) => (
              <ServiceCard
                index={index}
                key={index + service.id}
                service={service}
              />
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-msl-navy hover:bg-msl-dark-blue text-white"
              >
                {t("home.services.cta")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* <GallerySwiperSection /> */}

      {/* Contact Section */}
      <section id="kontak" className="py-24 bg-msl-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-white/10 text-white border-white/20"
                >
                  {t("home.contact.badge")}
                </Badge>
                <H1
                  text={t("home.contact.title")}
                  size="lg"
                  className="text-white"
                />
                <p className="text-xl text-gray-300 leading-relaxed">
                  {t("home.contact.subtitle")}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-msl-orange rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {t("common.phone")}
                    </div>
                    <div className="text-gray-300">
                      {siteConfig.contact.phone}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-msl-orange rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {t("common.email")}
                    </div>
                    <div className="text-gray-300">
                      {siteConfig.contact.email}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-msl-orange rounded-xl flex items-center justify-center">
                    <LocationIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {t("common.address")}
                    </div>
                    <div className="text-gray-300">
                      {siteConfig.contact.address.street}
                      <br />
                      {siteConfig.contact.address.city}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-msl-orange hover:bg-msl-orange/90 text-white w-full"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    {t("home.contact.cta_primary")}
                  </Button>
                </Link>
                <Link
                  href={`mailto:${siteConfig.contact.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-msl-navy hover:bg-slate-300 hover:text-msl-navy"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    {t("home.contact.cta_secondary")}
                  </Button>
                </Link>
              </div>
            </div>

            <Card className="bg-white" data-aos="fade-left">
              <CardHeader>
                <CardTitle className="text-2xl text-msl-navy">
                  {t("home.contact.form_title")}
                </CardTitle>
                <CardDescription>
                  {t("home.contact.form_subtitle")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LeadForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
