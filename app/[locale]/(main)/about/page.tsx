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
import H1 from "@/components/ui/h1";

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8" data-aos="fade-right">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="bg-msl-orange/10 text-msl-navy border-msl-orange/20"
              >
                {t("about.hero.badge")}
              </Badge>
              <H1 text={t("about.hero.title")} size="xl" />
              <p className="text-xl text-gray-600 leading-relaxed">
                {t("about.hero.subtitle")}
              </p>
            </div>
            <div className="flex flex-col justify-center sm:flex-row gap-4">
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
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16" data-aos="fade-up">
            <Badge
              variant="secondary"
              className="bg-msl-navy/10 text-msl-navy border-msl-navy/20"
            >
              {t("about.vision_mission.badge")}
            </Badge>
            <H1 text={t("about.vision_mission.title")} size="lg" />
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
            <H1 text={t("about.cta.title")} size="lg" className="text-white" />
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
                className="border-white text-white hover:bg-white hover:text-msl-navy"
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
