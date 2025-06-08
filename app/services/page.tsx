"use client";

import { ArrowRight, Truck, Warehouse, Package, Users, Award, Clock, Phone, Mail, MapPin as LocationIcon, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import Image from "next/image";

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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="MSL Logo" 
                width={180} 
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-msl-navy transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-msl-navy hover:bg-msl-dark-blue text-white">
                Konsultasi Gratis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="bg-msl-orange/10 text-msl-navy border-msl-orange/20 mb-6">
            🚛 Layanan Logistik Komprehensif
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-msl-navy leading-tight mb-6">
            Solusi Logistik
            <span className="text-msl-orange"> Terpadu</span> untuk
            <span className="text-msl-navy"> Setiap Kebutuhan</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Dari transportasi hingga supply chain management, kami menyediakan layanan logistik 
            end-to-end yang disesuaikan dengan kebutuhan bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-msl-navy hover:bg-msl-dark-blue text-white">
              Konsultasi Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-msl-navy text-msl-navy hover:bg-msl-navy hover:text-white">
              Download Brosur
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-msl-navy/10 text-msl-navy border-msl-navy/20">
              🎯 Layanan Unggulan
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-msl-navy">
              Layanan Logistik Komprehensif
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih layanan yang sesuai dengan kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {siteConfig.services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200 bg-white">
                  <CardHeader className="space-y-4">
                    <div className="w-12 h-12 bg-msl-orange/10 rounded-xl flex items-center justify-center group-hover:bg-msl-orange transition-colors">
                      <IconComponent className="h-6 w-6 text-msl-orange group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-xl text-msl-navy">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.shortDescription}
                    </CardDescription>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-msl-orange mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-msl-navy">{service.pricing}</span>
                        <Button variant="outline" size="sm" className="border-msl-navy text-msl-navy hover:bg-msl-navy hover:text-white">
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

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-msl-orange/10 text-msl-navy border-msl-orange/20">
              ⭐ Mengapa Memilih Kami
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-msl-navy">
              Komitmen Terhadap Kualitas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-gray-200 bg-white">
                <CardContent className="pt-8 space-y-4">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-msl-navy">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <span className="text-lg font-bold text-msl-orange">{item.metric}</span>
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
          <div className="space-y-8">
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
              📞 Siap Membantu Anda
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Mulai Optimasi
              <span className="text-msl-orange"> Logistik Bisnis</span> Anda
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Tim ahli kami siap memberikan konsultasi gratis dan solusi terbaik 
              untuk kebutuhan logistik bisnis Anda. Hubungi kami sekarang!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-msl-orange hover:bg-msl-orange/90 text-white">
                <Phone className="mr-2 h-5 w-5" />
                Hubungi Sekarang
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-msl-navy">
                <Mail className="mr-2 h-5 w-5" />
                Kirim Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-msl-dark-blue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Image 
                src="/logo.png" 
                alt="MSL Logo" 
                width={180} 
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                {siteConfig.description}
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Layanan</h4>
              <div className="space-y-2 text-sm">
                {siteConfig.services.slice(0, 4).map((service) => (
                  <div key={service.id} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    {service.title}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Perusahaan</h4>
              <div className="space-y-2 text-sm">
                {siteConfig.navigation.map((item) => (
                  <Link key={item.name} href={item.href} className="text-gray-400 hover:text-white transition-colors block">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Kontak</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>{siteConfig.contact.phone}</div>
                <div>{siteConfig.contact.email}</div>
                <div>
                  {siteConfig.contact.address.street}<br />
                  {siteConfig.contact.address.city}
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}