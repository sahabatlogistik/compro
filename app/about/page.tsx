"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Truck, Users, Award, Clock, Phone, Mail, MapPin as LocationIcon, Target, Eye, Heart, Lightbulb, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/config";
import { PageLoading } from "@/components/ui/loading";
import { useLoading } from "@/hooks/use-loading";
import { initAOS } from "@/lib/aos";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const isLoading = useLoading(1500);

  useEffect(() => {
    if (!isLoading) {
      initAOS();
    }
  }, [isLoading]);

  if (isLoading) {
    return <PageLoading isLoading={isLoading} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <Image 
                src="/LOGOOO MSL.png" 
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-msl-orange/10 text-msl-navy border-msl-orange/20">
                  🏢 Tentang Perusahaan
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-msl-navy leading-tight">
                  Mitra Terpercaya dalam
                  <span className="text-msl-orange"> Solusi Logistik</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {siteConfig.name} berdiri sejak {siteConfig.company.founded} dengan komitmen memberikan 
                  solusi logistik terbaik di Indonesia. Dengan pengalaman lebih dari {siteConfig.company.experience} tahun, 
                  kami telah melayani berbagai industri dan membangun reputasi sebagai 
                  mitra logistik yang handal dan profesional.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-msl-navy hover:bg-msl-dark-blue text-white">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-msl-navy text-msl-navy hover:bg-msl-navy hover:text-white">
                  Download Company Profile
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
              { value: siteConfig.company.experience, label: "Tahun Pengalaman", color: "msl-navy" },
              { value: siteConfig.company.clients, label: "Klien Terlayani", color: "msl-orange" },
              { value: siteConfig.company.satisfaction, label: "Tingkat Kepuasan", color: "msl-brown" },
              { value: siteConfig.company.certification, label: "Certified", color: "msl-dark-brown" }
            ].map((stat, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className={`text-4xl font-bold text-${stat.color} mb-2`}>{stat.value}</div>
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
            <Badge variant="secondary" className="bg-msl-navy/10 text-msl-navy border-msl-navy/20">
              🎯 Visi & Misi
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-msl-navy">
              Komitmen Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visi dan misi yang mengarahkan setiap langkah perjalanan kami
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow bg-white" data-aos="fade-right">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-msl-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-msl-orange" />
                </div>
                <CardTitle className="text-2xl text-msl-navy">Visi Perusahaan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 text-center leading-relaxed">
                  {siteConfig.company.vision}
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow bg-white" data-aos="fade-left">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-msl-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-msl-navy" />
                </div>
                <CardTitle className="text-2xl text-msl-navy">Misi Perusahaan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 text-center leading-relaxed">
                  {siteConfig.company.mission}
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
            <Badge variant="secondary" className="bg-msl-orange/10 text-msl-navy border-msl-orange/20">
              💎 Nilai-Nilai Perusahaan
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-msl-navy">
              Nilai yang Kami Junjung
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi dalam setiap layanan yang kami berikan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.company.values.map((value, index) => {
              const icons = [Shield, Lightbulb, Star, Heart];
              const IconComponent = icons[index];
              const colors = ['msl-navy', 'msl-orange', 'msl-brown', 'msl-dark-brown'];
              const color = colors[index];
              
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-gray-200 bg-white" data-aos="fade-up" data-aos-delay={index * 100}>
                  <CardContent className="pt-8 space-y-4">
                    <div className={`w-16 h-16 bg-${color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`h-8 w-8 text-${color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-msl-navy">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
              🤝 Mari Berkolaborasi
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Bergabunglah dengan
              <span className="text-msl-orange"> {siteConfig.company.clients} Klien</span> Kami
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Jadilah bagian dari klien yang telah merasakan manfaat solusi logistik terbaik dari kami. 
              Mari diskusikan kebutuhan logistik bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-msl-orange hover:bg-msl-orange/90 text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Hubungi Kami
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-msl-navy">
                <Mail className="mr-2 h-5 w-5" />
                Kirim Proposal
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
                src="/LOGOOO MSL.png" 
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