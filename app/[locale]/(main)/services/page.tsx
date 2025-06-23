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
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <Badge
              variant="secondary"
              className="bg-msl-orange/10 text-msl-navy border-msl-orange/20 mb-6"
            >
              {t("services.hero.badge")}
            </Badge>
            <H1 text={t("services.hero.title")} size="xl" className="mb-6" />
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
            <H1 text={t("services.overview.title")} size="lg" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("services.overview.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {t.raw("home.services.items").map((service: any, index: number) => {
              const IconComponent =
                iconMap[service.icon as keyof typeof iconMap];
              return (
                <Card
                  key={service.id}
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
                      {service.features.map((feature: string, idx: number) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-msl-orange mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
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
            <H1 text={t("services.why_choose.title")} size="lg" />
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
                        ? "📡"
                        : index === 1
                        ? "🛡️"
                        : index === 2
                        ? "⚡"
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
            <H1
              text={t("services.cta.title")}
              size="lg"
              className="text-white"
            />
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
