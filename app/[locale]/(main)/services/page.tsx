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
import Link from "next/link";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

const iconMap = {
  Truck,
  Warehouse,
  Package,
  LocationIcon,
  Users,
  Clock,
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "services" });

  return {
    title: t("hero.title"),
    description: t("hero.subtitle"),
  };
}

export default function ServicesPage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <Badge
              variant="secondary"
              className="bg-msl-orange/10 text-msl-navy border-msl-orange/20 mb-6"
            >
              {t("services.hero.badge")}
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-msl-navy leading-tight mb-6">
              {t("services.hero.title")}
              <span className="text-msl-orange">
                {" "}
                {t("common.tagline").split(" ")[1]}
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
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
              <Button
                size="lg"
                variant="outline"
                className="border-msl-navy text-msl-navy hover:bg-msl-navy hover:text-white"
              >
                {t("services.hero.cta_secondary")}
              </Button>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-msl-navy">
              {t("services.overview.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("services.overview.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {siteConfig.services.map((service, index) => {
              const IconComponent =
                iconMap[service.icon as keyof typeof iconMap];
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200 bg-white"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <CardHeader className="space-y-4">
                    <div className="w-12 h-12 bg-msl-orange/10 rounded-xl flex items-center justify-center group-hover:bg-msl-orange transition-colors">
                      <IconComponent className="h-6 w-6 text-msl-orange group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-xl text-msl-navy">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.shortDescription}
                    </CardDescription>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-msl-orange mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    {/* <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-msl-navy">
                          {service.pricing}
                        </span>
                      </div>
                    </div> */}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16" data-aos="fade-up">
            <Badge
              variant="secondary"
              className="bg-msl-orange/10 text-msl-navy border-msl-orange/20"
            >
              {t("services.why_choose.badge")}
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-msl-navy">
              {t("services.why_choose.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("services.why_choose.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t
              .raw("services.why_choose.features")
              .map((item: any, index: number) => (
                <Card
                  key={index}
                  className="text-center group hover:shadow-lg transition-all duration-300 border-gray-200 bg-white"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <CardContent className="pt-8 space-y-4">
                    <div className="text-4xl mb-4">
                      {index === 0
                        ? "🚀"
                        : index === 1
                        ? "🌐"
                        : index === 2
                        ? "👥"
                        : "💰"}
                    </div>
                    <h3 className="text-xl font-semibold text-msl-navy">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="pt-4 border-t border-gray-100">
                      <span className="text-lg font-bold text-msl-orange">
                        {item.metric}
                      </span>
                    </div>
                  </CardContent>
                </Card>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              {t("services.cta.title")}
              <span className="text-msl-orange">
                {" "}
                {t("common.tagline").split(" ")[1]}
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {t("services.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-msl-orange hover:bg-msl-orange/90 text-white"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {t("services.cta.cta_primary")}
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-msl-navy"
              >
                <Mail className="mr-2 h-5 w-5" />
                {t("services.cta.cta_secondary")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
