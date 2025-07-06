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
  CheckCircle,
  Star,
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
import { Metadata, ResolvingMetadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import H1 from "@/components/ui/h1";
import ServiceCard from "@/components/cards/service-card";

const iconMap = {
  Truck,
  Warehouse,
  Package,
  LocationIcon,
  Users,
  Forklift,
};

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default function ServicesPage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-msl-navy">
        <div className="absolute inset-0">
          <div
            className="w-full h-full absolute top-0 left-0  bg-[url('/images/hero-service-background.webp')] bg-cover bg-center opacity-60"
            aria-hidden="true"
          />
          <div className="w-full h-full absolute  top-0 left-0  bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <Badge
              variant="secondary"
              className="bg-msl-orange/10 text-white border-msl-orange/20 mb-6"
            >
              {t("services.hero.badge")}
            </Badge>
            <H1
              text={t("services.hero.title")}
              size="xl"
              className="mb-6 text-white"
            />
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
              {t("services.hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-msl-navy hover:bg-msl-dark-blue text-white"
                >
                  {t("services.hero.cta_primary")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16" data-aos="fade-up">
            <Badge
              variant="secondary"
              className="bg-msl-navy/10 text-msl-navy border-msl-navy/20"
            >
              {t("services.overview.badge")}
            </Badge>
            <H1 text={t("services.overview.title")} size="lg" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("services.overview.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {t.raw("home.services.items").map((service: any, index: number) => (
              <ServiceCard
                index={index}
                key={index + service.id}
                service={service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-msl-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8" data-aos="fade-up">
            <Badge
              variant="secondary"
              className="bg-white/10 text-white border-white/20"
            >
              {t("services.cta.badge")}
            </Badge>
            <H1
              text={t("services.cta.title")}
              size="lg"
              className="text-white"
            />
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {t("services.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={siteConfig.contact.whatsapp}>
                <Button
                  size="lg"
                  className="bg-msl-orange hover:bg-msl-orange/90 text-white"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {t("services.cta.cta_primary")}
                </Button>
              </Link>
              <Link target="_blank" href={`mailto:${siteConfig.contact.email}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-primary hover:bg-white hover:text-msl-navy"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  {t("services.cta.cta_secondary")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
