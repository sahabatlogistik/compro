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

const iconMap = {
  Truck,
  Warehouse,
  Package,
  LocationIcon,
  Users,
  Clock,
};

export default function Home() {
  const t = useTranslations();

  return (
    <>
      {/* Hero Section */}
      <section id="beranda" className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <div className="space-y-6">
                <Badge
                  variant="secondary"
                  className="bg-msl-orange/10 text-msl-navy border-msl-orange/20"
                >
                  {t("home.hero.badge")}
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-msl-navy leading-tight">
                  {t("home.hero.title")}
                  <span className="text-msl-orange">
                    {" "}
                    {t("common.tagline").split(" ")[1]}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t("home.hero.subtitle")}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-msl-navy hover:bg-msl-dark-blue text-white"
                  >
                    {t("home.hero.cta_primary")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-msl-navy">
                    {siteConfig.company.clients}
                  </div>
                  <div className="text-sm text-gray-600">
                    {t("home.hero.stats.clients")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-msl-navy">
                    {siteConfig.company.experience}
                  </div>
                  <div className="text-sm text-gray-600">
                    {t("home.hero.stats.experience")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-msl-navy">
                    {siteConfig.company.satisfaction}
                  </div>
                  <div className="text-sm text-gray-600">
                    {t("home.hero.stats.satisfaction")}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="relative z-10 bg-white rounded-2xl shadow-xl p-8">
                <img
                  src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Logistics Operations"
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
            <h2 className="text-4xl lg:text-5xl font-bold text-msl-navy">
              {t("home.services.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("home.services.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.raw("home.services.items").map((service: any, index: number) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
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
                          <div className="w-1.5 h-1.5 bg-msl-orange rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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
      <section id="tentang" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-msl-orange/10 text-msl-navy border-msl-orange/20"
                >
                  {t("home.about.badge")}
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-msl-navy">
                  {t("home.about.title")}
                  <span className="text-msl-orange">
                    {" "}
                    {t("common.tagline").split(" ")[1]}
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t("home.about.subtitle")}
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="text-3xl font-bold text-msl-navy mb-2">
                      {siteConfig.company.experience}
                    </div>
                    <div className="text-sm text-gray-600">
                      {t("home.about.stats.experience")}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="text-3xl font-bold text-msl-orange mb-2">
                      {siteConfig.company.clients}
                    </div>
                    <div className="text-sm text-gray-600">
                      {t("home.about.stats.clients")}
                    </div>
                  </div>
                </div>

                <Link href="/about">
                  <Button className="bg-msl-navy hover:bg-msl-dark-blue text-white">
                    {t("home.about.cta")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Warehouse Operations"
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Container Shipping"
                  className="w-full h-48 object-cover rounded-xl shadow-lg mt-8"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-msl-orange" />
                  <div>
                    <div className="font-semibold text-msl-navy">
                      {siteConfig.company.certification}
                    </div>
                    <div className="text-sm text-gray-600">Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <h2 className="text-4xl lg:text-5xl font-bold text-white">
                  {t("home.contact.title")}
                  <span className="text-msl-orange">
                    {" "}
                    {t("common.tagline").split(" ")[1]}
                  </span>{" "}
                  Anda
                </h2>
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