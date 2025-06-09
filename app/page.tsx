"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Truck, Warehouse, Package, Users, Award, Clock, Phone, Mail, MapPin as LocationIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/config";
import { PageLoading } from "@/components/ui/loading";
import { useLoading } from "@/hooks/use-loading";
import { initAOS } from "@/lib/aos";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const isLoading = useLoading(2000);

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
            <div className="flex items-center">
              <Image 
                src="/LOGOOO MSL.png" 
                alt="MSL Logo" 
                width={180} 
                height={60}
                className="h-12 w-auto"
              />
            </div>
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
      <section id="beranda" className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-msl-orange/10 text-msl-navy border-msl-orange/20">
                  🚛 Mitra Logistik Terpercaya
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-msl-navy leading-tight">
                  Solusi Logistik
                  <span className="text-msl-orange"> Terpadu</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Kami menyediakan layanan logistik komprehensif dengan teknologi modern, 
                  jaringan distribusi luas, dan komitmen terhadap kepuasan pelanggan.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-msl-navy hover:bg-msl-dark-blue text-white">
                  Mulai Konsultasi
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-msl-navy text-msl-navy hover:bg-msl-navy hover:text-white w-full">
                    Pelajari Layanan
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-msl-navy">{siteConfig.company.clients}</div>
                  <div className="text-sm text-gray-600">Klien Aktif</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-msl-navy">{siteConfig.company.experience}</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-msl-navy">{siteConfig.company.satisfaction}</div>
                  <div className="text-sm text-gray-600">Tingkat Kepuasan</div>
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
            <Badge variant="secondary" className="bg-msl-navy/10 text-msl-navy border-msl-navy/20">
              🎯 Layanan Unggulan
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-msl-navy">
              Layanan Logistik Komprehensif
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dari transportasi hingga pergudangan, kami menyediakan solusi logistik 
              end-to-end yang disesuaikan dengan kebutuhan bisnis Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Truck,
                title: "Transportasi & Distribusi",
                description: "Layanan transportasi darat dengan armada modern dan rute optimal untuk distribusi barang yang efisien dan tepat waktu.",
                features: ["Armada Lengkap", "Tracking Real-time", "Asuransi Barang"]
              },
              {
                icon: Warehouse,
                title: "Pergudangan & Storage",
                description: "Fasilitas pergudangan modern dengan sistem manajemen inventory dan keamanan tingkat tinggi untuk penyimpanan barang.",
                features: ["Gudang Modern", "Sistem WMS", "Keamanan 24/7"]
              },
              {
                icon: Package,
                title: "Packaging & Handling",
                description: "Layanan pengemasan profesional dan handling khusus untuk memastikan barang sampai dengan kondisi prima.",
                features: ["Custom Packaging", "Handling Khusus", "Quality Control"]
              },
              {
                icon: LocationIcon,
                title: "Last Mile Delivery",
                description: "Pengiriman hingga tujuan akhir dengan jaringan distribusi luas dan layanan pelanggan yang responsif.",
                features: ["COD Available", "Same Day Delivery", "Flexible Schedule"]
              },
              {
                icon: Users,
                title: "Supply Chain Management",
                description: "Optimasi rantai pasokan dengan teknologi modern untuk efisiensi operasional dan pengurangan biaya.",
                features: ["SCM Consultation", "Process Optimization", "Cost Reduction"]
              },
              {
                icon: Clock,
                title: "Express & Urgent",
                description: "Layanan ekspres untuk pengiriman mendesak dengan prioritas tinggi dan waktu pengiriman yang dijamin.",
                features: ["Express Delivery", "Emergency Service", "Time Guarantee"]
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200 bg-white" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-msl-orange/10 rounded-xl flex items-center justify-center group-hover:bg-msl-orange transition-colors">
                    <service.icon className="h-6 w-6 text-msl-orange group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-msl-navy">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-msl-orange rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Link href="/services">
              <Button size="lg" className="bg-msl-navy hover:bg-msl-dark-blue text-white">
                Lihat Semua Layanan
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
                <Badge variant="secondary" className="bg-msl-orange/10 text-msl-navy border-msl-orange/20">
                  🏢 Tentang Perusahaan
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-msl-navy">
                  Mitra Terpercaya dalam
                  <span className="text-msl-orange"> Solusi Logistik</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {siteConfig.name} berdiri sejak {siteConfig.company.founded} dengan komitmen memberikan 
                  solusi logistik terbaik di Indonesia. Dengan pengalaman lebih dari {siteConfig.company.experience} tahun, 
                  kami telah melayani berbagai industri dan membangun reputasi sebagai 
                  mitra logistik yang handal dan profesional.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="text-3xl font-bold text-msl-navy mb-2">{siteConfig.company.experience}</div>
                    <div className="text-sm text-gray-600">Tahun Berpengalaman</div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="text-3xl font-bold text-msl-orange mb-2">{siteConfig.company.clients}</div>
                    <div className="text-sm text-gray-600">Klien Terlayani</div>
                  </div>
                </div>

                <Link href="/about">
                  <Button className="bg-msl-navy hover:bg-msl-dark-blue text-white">
                    Pelajari Lebih Lanjut
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
                    <div className="font-semibold text-msl-navy">{siteConfig.company.certification}</div>
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
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                  📞 Hubungi Kami
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-white">
                  Siap Melayani
                  <span className="text-msl-orange"> Kebutuhan Logistik</span> Anda
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Tim ahli kami siap memberikan konsultasi dan solusi terbaik 
                  untuk kebutuhan logistik bisnis Anda. Hubungi kami sekarang!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-msl-orange rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Telepon</div>
                    <div className="text-gray-300">{siteConfig.contact.phone}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-msl-orange rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-gray-300">{siteConfig.contact.email}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-msl-orange rounded-xl flex items-center justify-center">
                    <LocationIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Alamat</div>
                    <div className="text-gray-300">
                      {siteConfig.contact.address.street}<br />
                      {siteConfig.contact.address.city}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-msl-orange hover:bg-msl-orange/90 text-white w-full">
                    <Phone className="mr-2 h-5 w-5" />
                    Hubungi Kami
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-msl-navy">
                  <Mail className="mr-2 h-5 w-5" />
                  Kirim Email
                </Button>
              </div>
            </div>

            <Card className="bg-white" data-aos="fade-left">
              <CardHeader>
                <CardTitle className="text-2xl text-msl-navy">Konsultasi Gratis</CardTitle>
                <CardDescription>
                  Dapatkan penawaran terbaik untuk kebutuhan logistik Anda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Nama Lengkap</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-msl-orange"
                      placeholder="Masukkan nama"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Perusahaan</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-msl-orange"
                      placeholder="Nama perusahaan"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-msl-orange"
                    placeholder="email@perusahaan.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Layanan yang Dibutuhkan</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-msl-orange">
                    <option>Pilih layanan</option>
                    <option>Transportasi & Distribusi</option>
                    <option>Pergudangan & Storage</option>
                    <option>Packaging & Handling</option>
                    <option>Last Mile Delivery</option>
                    <option>Supply Chain Management</option>
                    <option>Express & Urgent</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Pesan</label>
                  <textarea 
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-msl-orange"
                    placeholder="Deskripsikan kebutuhan logistik Anda..."
                  />
                </div>
                <Button className="w-full bg-msl-navy hover:bg-msl-dark-blue text-white">
                  Kirim Permintaan Konsultasi
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
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
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors block">Transportasi</Link>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors block">Pergudangan</Link>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors block">Packaging</Link>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors block">Last Mile</Link>
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