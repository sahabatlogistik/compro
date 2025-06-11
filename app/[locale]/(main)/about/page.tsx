import {
  ArrowRight,
  Truck,
  Users,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin as LocationIcon,
  Target,
  Eye,
  Heart,
  Lightbulb,
  Shield,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/config";
import { Link } from "@/i18n/navigation";
import { Metadata, ResolvingMetadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default function AboutPage() {
  const t = useTranslations("");

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-msl-orange/10 text-msl-navy border-msl-orange/20"
                >
                  {t("about.hero.badge")}
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-msl-navy leading-tight">
                  {t("about.hero.title")}
                  <span className="text-msl-orange">
                    {" "}
                    {t("common.tagline").split(" ")[1]}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t("about.hero.subtitle")}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-msl-navy hover:bg-msl-dark-blue text-white"
                >
                  {t("about.hero.cta_primary")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-msl-navy text-msl-navy hover:bg-msl-navy hover:text-white"
                >
                  {t("about.hero.cta_secondary")}
                </Button>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
                <img
                  src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Company Operations"
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="absolute -top-4 -right-4 bg-msl-orange text-white p-4 rounded-xl shadow-lg">
                  <Award className="h-8 w-8" />
                </div>
              </div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-msl-orange/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-msl-navy/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: siteConfig.company.experience,
                label: t("about.stats.experience"),
                color: "msl-navy",
              },
              {
                value: siteConfig.company.clients,
                label: t("about.stats.clients"),
                color: "msl-orange",
              },
              {
                value: siteConfig.company.satisfaction,
                label: t("about.stats.satisfaction"),
                color: "msl-brown",
              },
              {
                value: siteConfig.company.certification,
                label: t("about.stats.certification"),
                color: "msl-dark-brown",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`text-4xl font-bold text-${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16" data-aos="fade-up">
            <Badge
              variant="secondary"
              className="bg-msl-navy/10 text-msl-navy border-msl-navy/20"
            >
              {t("about.vision_mission.badge")}
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-msl-navy">
              {t("about.vision_mission.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("about.vision_mission.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card
              className="border-gray-200 hover:shadow-lg transition-shadow bg-white"
              data-aos="fade-right"
            >
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-msl-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-msl-orange" />
                </div>
                <CardTitle className="text-2xl text-msl-navy">
                  {t("about.vision_mission.vision.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 text-center leading-relaxed">
                  {t("about.vision_mission.vision.content")}
                </p>
              </CardContent>
            </Card>

            <Card
              className="border-gray-200 hover:shadow-lg transition-shadow bg-white"
              data-aos="fade-left"
            >
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-msl-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-msl-navy" />
                </div>
                <CardTitle className="text-2xl text-msl-navy">
                  {t("about.vision_mission.mission.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 text-center leading-relaxed">
                  {t("about.vision_mission.mission.content")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16" data-aos="fade-up">
            <Badge
              variant="secondary"
              className="bg-msl-orange/10 text-msl-navy border-msl-orange/20"
            >
              {t("about.values.badge")}
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-msl-navy">
              {t("about.values.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("about.values.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.company.values.map((value, index) => {
              const icons = [Shield, Lightbulb, Star, Heart];
              const IconComponent = icons[index];
              const colors = [
                "msl-navy",
                "msl-orange",
                "msl-brown",
                "msl-dark-brown",
              ];
              const color = colors[index];

              return (
                <Card
                  key={index}
                  className="text-center group hover:shadow-lg transition-all duration-300 border-gray-200 bg-white"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <CardContent className="pt-8 space-y-4">
                    <div
                      className={`w-16 h-16 bg-${color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <IconComponent className={`h-8 w-8 text-${color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-msl-navy">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
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
              {t("about.cta.badge")}
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              {t("about.cta.title")}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {t("about.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-msl-orange hover:bg-msl-orange/90 text-white"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {t("about.cta.cta_primary")}
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white hover:bg-white text-msl-navy"
              >
                <Mail className="mr-2 h-5 w-5" />
                {t("about.cta.cta_secondary")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
