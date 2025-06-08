"use client";

import { ArrowRight, Truck, Warehouse, Package, Users, Award, Clock, Phone, Mail, MapPin as LocationIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">{siteConfig.name}</h1>
                <p className="text-xs text-slate-600">{siteConfig.tagline}</p>
              </div>
            </div>
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
      <section id="beranda" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-emerald-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                  🚛 Mitra Logistik Terpercaya Indonesia
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Solusi Logistik
                  <span className="text-blue-600"> Terpadu</span> untuk
                  <span className="text-emerald-600"> Bisnis Anda</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Kami menyediakan layanan logistik komprehensif dengan teknologi modern, 
                  jaringan distribusi luas, dan komitmen terhadap kepuasan pelanggan.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Mulai Konsultasi
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 w-full">
                    Pelajari Layanan
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">{siteConfig.company.clients}</div>
                  <div className="text-sm text-slate-600">Klien Aktif</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">{siteConfig.company.experience}</div>
                  <div className="text-sm text-slate-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">{siteConfig.company.satisfaction}</div>
                  <div className="text-sm text-slate-600">Tingkat Kepuasan</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
                <img 
                  src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Logistics Operations" 
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="absolute -top-4 -right-4 bg-emerald-600 text-white p-4 rounded-xl shadow-lg">
                  <Award className="h-8 w-8" />
                </div>
              </div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-emerald-600/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
              🎯 Layanan Unggulan
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">
              Layanan Logistik Komprehensif
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
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
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-slate-200">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <service.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Lihat Semua Layanan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200">
                  🏢 Tentang Perusahaan
                </Badge>
                <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">
                  Mitra Terpercaya dalam
                  <span className="text-blue-600"> Solusi Logistik</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {siteConfig.name} berdiri sejak {siteConfig.company.founded} dengan komitmen memberikan 
                  solusi logistik terbaik di Indonesia. Dengan pengalaman lebih dari {siteConfig.company.experience} tahun, 
                  kami telah melayani berbagai industri dan membangun reputasi sebagai 
                  mitra logistik yang handal dan profesional.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{siteConfig.company.experience}</div>
                    <div className="text-sm text-slate-600">Tahun Berpengalaman</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-emerald-600 mb-2">{siteConfig.company.clients}</div>
                    <div className="text-sm text-slate-600">Klien Terlayani</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">Visi & Misi</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Visi</div>
                        <div className="text-slate-600">{siteConfig.company.vision}</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Misi</div>
                        <div className="text-slate-600">{siteConfig.company.mission}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/about">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Pelajari Lebih Lanjut
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
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
                  <Award className="h-8 w-8 text-orange-600" />
                  <div>
                    <div className="font-semibold text-slate-900">{siteConfig.company.certification}</div>
                    <div className="text-sm text-slate-600">Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
              ⭐ Keunggulan Kami
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Komitmen kami terhadap kualitas, inovasi, dan kepuasan pelanggan 
              menjadikan kami pilihan utama untuk kebutuhan logistik Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Teknologi Modern",
                description: "Sistem tracking real-time dan platform digital untuk transparansi penuh dalam setiap pengiriman.",
                icon: "🚀"
              },
              {
                title: "Jaringan Luas",
                description: "Coverage area mencakup seluruh Indonesia dengan partner terpercaya di setiap daerah.",
                icon: "🌐"
              },
              {
                title: "Tim Profesional",
                description: "SDM berpengalaman dan tersertifikasi dengan komitmen tinggi terhadap layanan berkualitas.",
                icon: "👥"
              },
              {
                title: "Harga Kompetitif",
                description: "Solusi cost-effective dengan value terbaik tanpa mengorbankan kualitas layanan.",
                icon: "💰"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-slate-200">
                <CardContent className="pt-8 space-y-4">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700">
                  📞 Hubungi Kami
                </Badge>
                <h2 className="text-3xl lg:text-5xl font-bold text-white">
                  Siap Melayani
                  <span className="text-blue-400"> Kebutuhan Logistik</span> Anda
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Tim ahli kami siap memberikan konsultasi dan solusi terbaik 
                  untuk kebutuhan logistik bisnis Anda. Hubungi kami sekarang!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Telepon</div>
                    <div className="text-slate-300">{siteConfig.contact.phone}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-slate-300">{siteConfig.contact.email}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                    <LocationIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Alamat</div>
                    <div className="text-slate-300">
                      {siteConfig.contact.address.street}<br />
                      {siteConfig.contact.address.city}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-2xl">Konsultasi Gratis</CardTitle>
                <CardDescription>
                  Dapatkan penawaran terbaik untuk kebutuhan logistik Anda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Nama Lengkap</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Masukkan nama"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Perusahaan</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Nama perusahaan"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="email@perusahaan.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Layanan yang Dibutuhkan</label>
                  <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
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
                  <label className="text-sm font-medium text-slate-700">Pesan</label>
                  <textarea 
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Deskripsikan kebutuhan logistik Anda..."
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Kirim Permintaan Konsultasi
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
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
                <Link href="/services" className="text-slate-400 hover:text-white transition-colors block">Transportasi</Link>
                <Link href="/services" className="text-slate-400 hover:text-white transition-colors block">Pergudangan</Link>
                <Link href="/services" className="text-slate-400 hover:text-white transition-colors block">Packaging</Link>
                <Link href="/services" className="text-slate-400 hover:text-white transition-colors block">Last Mile</Link>
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