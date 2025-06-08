"use client";

import { ArrowRight, Truck, Users, Award, Clock, Phone, Mail, MapPin as LocationIcon, Target, Eye, Heart, Lightbulb, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

export default function AboutPage() {
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                  🏢 Tentang Perusahaan
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Mitra Terpercaya dalam
                  <span className="text-blue-600"> Solusi Logistik</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  {siteConfig.name} berdiri sejak {siteConfig.company.founded} dengan komitmen memberikan 
                  solusi logistik terbaik di Indonesia. Dengan pengalaman lebih dari {siteConfig.company.experience} tahun, 
                  kami telah melayani berbagai industri dan membangun reputasi sebagai 
                  mitra logistik yang handal dan profesional.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50">
                  Download Company Profile
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
                <img 
                  src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Company Operations" 
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

      {/* Company Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{siteConfig.company.experience}</div>
              <div className="text-slate-600">Tahun Pengalaman</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">{siteConfig.company.clients}</div>
              <div className="text-slate-600">Klien Terlayani</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">{siteConfig.company.satisfaction}</div>
              <div className="text-slate-600">Tingkat Kepuasan</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">{siteConfig.company.certification}</div>
              <div className="text-slate-600">Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
              🎯 Visi & Misi
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">
              Komitmen Kami
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Visi dan misi yang mengarahkan setiap langkah perjalanan kami
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Visi Perusahaan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-slate-600 text-center leading-relaxed">
                  {siteConfig.company.vision}
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Misi Perusahaan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-slate-600 text-center leading-relaxed">
                  {siteConfig.company.mission}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200">
              💎 Nilai-Nilai Perusahaan
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">
              Nilai yang Kami Junjung
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi dalam setiap layanan yang kami berikan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.company.values.map((value, index) => {
              const icons = [Shield, Lightbulb, Star, Heart];
              const IconComponent = icons[index];
              const colors = ['blue', 'emerald', 'orange', 'purple'];
              const color = colors[index];
              
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-slate-200">
                  <CardContent className="pt-8 space-y-4">
                    <div className={`w-16 h-16 bg-${color}-50 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`h-8 w-8 text-${color}-600`} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company History Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
              📅 Perjalanan Kami
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">
              Sejarah Perusahaan
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Milestone penting dalam perjalanan {siteConfig.company.experience} tahun kami
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-300"></div>
            <div className="space-y-12">
              {[
                {
                  year: "2008",
                  title: "Pendirian Perusahaan",
                  description: "PT Mitra Sahabat Logistik didirikan dengan visi menjadi penyedia solusi logistik terdepan di Indonesia."
                },
                {
                  year: "2012",
                  title: "Ekspansi Regional",
                  description: "Membuka cabang di Surabaya dan Medan untuk memperluas jangkauan layanan ke seluruh Indonesia."
                },
                {
                  year: "2015",
                  title: "Sertifikasi ISO 9001",
                  description: "Meraih sertifikasi ISO 9001:2015 sebagai komitmen terhadap kualitas layanan yang konsisten."
                },
                {
                  year: "2018",
                  title: "Digitalisasi Layanan",
                  description: "Meluncurkan platform digital untuk tracking real-time dan manajemen supply chain terintegrasi."
                },
                {
                  year: "2021",
                  title: "Milestone 500+ Klien",
                  description: "Mencapai milestone melayani lebih dari 500 klien aktif dengan tingkat kepuasan 99.5%."
                },
                {
                  year: "2024",
                  title: "Inovasi Berkelanjutan",
                  description: "Terus berinovasi dengan teknologi AI dan IoT untuk solusi logistik yang lebih efisien dan sustainable."
                }
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">{milestone.title}</h3>
                        <p className="text-slate-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
              👥 Tim Profesional
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">
              Tim Berpengalaman
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Didukung oleh tim profesional yang berpengalaman dan berkomitmen tinggi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Budi Santoso",
                position: "Chief Executive Officer",
                experience: "20+ tahun",
                image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Sari Wijaya",
                position: "Chief Operations Officer",
                experience: "15+ tahun",
                image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Ahmad Rahman",
                position: "Head of Technology",
                experience: "12+ tahun",
                image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
            ].map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-slate-200">
                <CardContent className="pt-8 space-y-4">
                  <div className="relative mx-auto w-24 h-24 mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium">{member.position}</p>
                    <p className="text-slate-600 text-sm">Pengalaman: {member.experience}</p>
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
              🤝 Mari Berkolaborasi
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Bergabunglah dengan
              <span className="text-blue-400"> {siteConfig.company.clients} Klien</span> Kami
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Jadilah bagian dari klien yang telah merasakan manfaat solusi logistik terbaik dari kami. 
              Mari diskusikan kebutuhan logistik bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2 h-5 w-5" />
                Hubungi Kami
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <Mail className="mr-2 h-5 w-5" />
                Kirim Proposal
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