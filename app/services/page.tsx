"use client";

import { ArrowRight, Truck, Warehouse, Package, Users, Award, Clock, Phone, Mail, MapPin as LocationIcon, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

const iconMap = {
  Truck,
  Warehouse,
  Package,
  LocationIcon,
  Users,
  Clock
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">{siteConfig.name}</h1>
                <p className="text-xs text-slate-600">{siteConfig.tagline}</p>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-blue-600 hover:bg-blue-700">
                Konsultasi Gratis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-emerald-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 mb-6">
            🚛 Layanan Logistik Komprehensif
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Solusi Logistik
            <span className="text-blue-600"> Terpadu</span> untuk
            <span className="text-emerald-600"> Setiap Kebutuhan</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Dari transportasi hingga supply chain management, kami menyediakan layanan logistik 
            end-to-end yang disesuaikan dengan kebutuhan bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Konsultasi Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50">
              Download Brosur
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
              🎯 Layanan Unggulan
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">
              Layanan Logistik Komprehensif
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Pilih layanan yang sesuai dengan kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {siteConfig.services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-slate-200">
                  <CardHeader className="space-y-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <IconComponent className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-slate-600 leading-relaxed">
                      {service.shortDescription}
                    </CardDescription>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-900">{service.pricing}</span>
                        <Button variant="outline" size="sm">
                          Detail Layanan
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">
              Detail Layanan
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Pelajari lebih detail tentang setiap layanan yang kami tawarkan
            </p>
          </div>

          <Tabs defaultValue={siteConfig.services[0].id} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-8">
              {siteConfig.services.map((service) => (
                <TabsTrigger key={service.id} value={service.id} className="text-xs lg:text-sm">
                  {service.title.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {siteConfig.services.map((service) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              return (
                <TabsContent key={service.id} value={service.id}>
                  <Card className="border-slate-200">
                    <CardHeader className="pb-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center">
                          <IconComponent className="h-8 w-8 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl text-slate-900 mb-2">{service.title}</CardTitle>
                          <CardDescription className="text-lg text-slate-600">
                            {service.fullDescription}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-semibold text-slate-900 mb-4">Keunggulan Layanan</h4>
                            <div className="space-y-3">
                              {service.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-start space-x-3">
                                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-slate-600">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="space-y-6">
                          <div className="bg-slate-50 p-6 rounded-xl">
                            <h4 className="text-lg font-semibold text-slate-900 mb-4">Informasi Layanan</h4>
                            <div className="space-y-4">
                              <div>
                                <span className="text-sm font-medium text-slate-700">Cakupan Area:</span>
                                <p className="text-slate-600">{service.coverage}</p>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-slate-700">Harga Mulai:</span>
                                <p className="text-slate-600 font-semibold">{service.pricing}</p>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-slate-700">Fitur Utama:</span>
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {service.features.map((feature, idx) => (
                                    <Badge key={idx} variant="secondary" className="bg-blue-50 text-blue-700">
                                      {feature}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">
                            Konsultasi Layanan Ini
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200">
              ⭐ Mengapa Memilih Kami
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">
              Komitmen Terhadap Kualitas
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Pengalaman {siteConfig.company.experience} tahun melayani {siteConfig.company.clients} klien 
              dengan tingkat kepuasan {siteConfig.company.satisfaction}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Teknologi Modern",
                description: "Sistem tracking real-time dan platform digital untuk transparansi penuh",
                icon: "🚀",
                metric: "99.9% Uptime"
              },
              {
                title: "Jaringan Luas",
                description: "Coverage area mencakup seluruh Indonesia dengan partner terpercaya",
                icon: "🌐",
                metric: "34 Provinsi"
              },
              {
                title: "Tim Profesional",
                description: "SDM berpengalaman dan tersertifikasi dengan komitmen tinggi",
                icon: "👥",
                metric: "500+ Karyawan"
              },
              {
                title: "Harga Kompetitif",
                description: "Solusi cost-effective dengan value terbaik tanpa mengorbankan kualitas",
                icon: "💰",
                metric: "Hemat 30%"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-slate-200">
                <CardContent className="pt-8 space-y-4">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-lg font-bold text-blue-600">{item.metric}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700">
              📞 Siap Membantu Anda
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Mulai Optimasi
              <span className="text-blue-400"> Logistik Bisnis</span> Anda
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Tim ahli kami siap memberikan konsultasi gratis dan solusi terbaik 
              untuk kebutuhan logistik bisnis Anda. Hubungi kami sekarang!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2 h-5 w-5" />
                Hubungi Sekarang
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <Mail className="mr-2 h-5 w-5" />
                Kirim Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Truck className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">{siteConfig.name}</h3>
                  <p className="text-xs text-slate-400">{siteConfig.tagline}</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {siteConfig.description}
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Layanan</h4>
              <div className="space-y-2 text-sm">
                {siteConfig.services.slice(0, 4).map((service) => (
                  <div key={service.id} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                    {service.title}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Perusahaan</h4>
              <div className="space-y-2 text-sm">
                {siteConfig.navigation.map((item) => (
                  <Link key={item.name} href={item.href} className="text-slate-400 hover:text-white transition-colors block">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Kontak</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <div>{siteConfig.contact.phone}</div>
                <div>{siteConfig.contact.email}</div>
                <div>
                  {siteConfig.contact.address.street}<br />
                  {siteConfig.contact.address.city}
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}