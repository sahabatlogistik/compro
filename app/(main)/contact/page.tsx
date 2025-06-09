"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Building,
  User,
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

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
      <section className="relative py-20 lg:py-24 bg-gradient-to-br from-msl-navy to-msl-dark-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up" className="space-y-6">
            <Badge
              variant="secondary"
              className="bg-white/10 text-white border-white/20"
            >
              📞 Hubungi Kami
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Mari Diskusikan
              <span className="text-msl-orange"> Kebutuhan Logistik</span> Anda
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Tim ahli kami siap memberikan konsultasi gratis dan solusi terbaik
              untuk mengoptimalkan operasional logistik bisnis Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16" data-aos="fade-up">
            <Badge
              variant="secondary"
              className="bg-msl-navy/10 text-msl-navy border-msl-navy/20"
            >
              📍 Informasi Kontak
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-msl-navy">
              Berbagai Cara Menghubungi Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilih cara yang paling nyaman untuk Anda berkomunikasi dengan tim
              kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Phone,
                title: "Telepon",
                value: siteConfig.contact.phone,
                description: "Senin - Jumat, 08:00 - 17:00 WIB",
                action: "Hubungi Sekarang",
                href: `tel:${siteConfig.contact.phone}`,
                color: "msl-orange",
              },
              {
                icon: Mail,
                title: "Email",
                value: siteConfig.contact.email,
                description: "Respon dalam 24 jam",
                action: "Kirim Email",
                href: `mailto:${siteConfig.contact.email}`,
                color: "msl-navy",
              },
              {
                icon: MapPin,
                title: "Alamat Kantor",
                value: siteConfig.contact.address.street,
                description: siteConfig.contact.address.city,
                action: "Lihat Lokasi",
                href: "#",
                color: "msl-brown",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                value: siteConfig.contact.phone,
                description: "Chat langsung dengan tim kami",
                action: "Chat WhatsApp",
                href: `https://wa.me/${siteConfig.contact.phone.replace(
                  /[^0-9]/g,
                  ""
                )}`,
                color: "green-600",
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-gray-200 bg-white"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardContent className="p-6 text-center space-y-4 flex flex-col justify-between h-full">
                  <div>
                    <div
                      className={`w-16 h-16 bg-${contact.color}/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-${contact.color} transition-colors`}
                    >
                      <contact.icon
                        className={`h-8 w-8 text-${contact.color} group-hover:text-white transition-colors`}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-msl-navy">
                      {contact.title}
                    </h3>
                    <p className="font-medium text-gray-900">{contact.value}</p>
                    <p className="text-sm text-gray-600">
                      {contact.description}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className={` w-full`}
                    asChild
                  >
                    <a
                      href={contact.href}
                      target={
                        contact.href.startsWith("http") ? "_blank" : undefined
                      }
                    >
                      {contact.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <div data-aos="fade-right">
              <div className="space-y-6 mb-8">
                <Badge
                  variant="secondary"
                  className="bg-msl-orange/10 text-msl-navy border-msl-orange/20"
                >
                  📝 Formulir Kontak
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-msl-navy">
                  Dapatkan Konsultasi Gratis
                </h2>
                <p className="text-lg text-gray-600">
                  Isi formulir di bawah ini dan tim kami akan menghubungi Anda
                  dalam 24 jam untuk memberikan solusi terbaik.
                </p>
              </div>

              <Card className="border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          Nama Lengkap *
                        </label>
                        <Input
                          type="text"
                          placeholder="Masukkan nama lengkap"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          className="border-gray-300 focus:border-msl-orange focus:ring-msl-orange"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center">
                          <Building className="w-4 h-4 mr-2" />
                          Nama Perusahaan
                        </label>
                        <Input
                          type="text"
                          placeholder="Nama perusahaan"
                          value={formData.company}
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
                          className="border-gray-300 focus:border-msl-orange focus:ring-msl-orange"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          Email *
                        </label>
                        <Input
                          type="email"
                          placeholder="email@perusahaan.com"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className="border-gray-300 focus:border-msl-orange focus:ring-msl-orange"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center">
                          <Phone className="w-4 h-4 mr-2" />
                          Nomor Telepon *
                        </label>
                        <Input
                          type="tel"
                          placeholder="08xx-xxxx-xxxx"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          className="border-gray-300 focus:border-msl-orange focus:ring-msl-orange"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Layanan yang Dibutuhkan
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          handleInputChange("service", value)
                        }
                      >
                        <SelectTrigger className="border-gray-300 focus:border-msl-orange focus:ring-msl-orange">
                          <SelectValue placeholder="Pilih layanan yang dibutuhkan" />
                        </SelectTrigger>
                        <SelectContent>
                          {siteConfig.services.map((service) => (
                            <SelectItem key={service.id} value={service.id}>
                              {service.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Pesan
                      </label>
                      <Textarea
                        rows={5}
                        placeholder="Deskripsikan kebutuhan logistik Anda secara detail..."
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        className="border-gray-300 focus:border-msl-orange focus:ring-msl-orange"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-msl-navy hover:bg-msl-dark-blue text-white py-3"
                      size="lg"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Kirim Permintaan Konsultasi
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Company Info */}
            <div data-aos="fade-left">
              <div className="space-y-8">
                {/* Office Hours */}
                <Card className="border-gray-200 bg-gray-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-msl-navy flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      Jam Operasional
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Senin - Jumat</span>
                      <span className="font-medium">08:00 - 17:00 WIB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sabtu</span>
                      <span className="font-medium">08:00 - 12:00 WIB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Minggu</span>
                      <span className="font-medium text-red-600">Tutup</span>
                    </div>
                    <div className="pt-3 border-t border-gray-200">
                      <p className="text-sm text-gray-600">
                        <strong>Emergency Service:</strong> 24/7 untuk layanan
                        urgent
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-msl-navy">
                      Mengapa Memilih MSL?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      "Pengalaman 15+ tahun di industri logistik",
                      "Tim profesional dan bersertifikat",
                      "Teknologi tracking real-time",
                      "Jaringan distribusi seluruh Indonesia",
                      "Harga kompetitif dengan kualitas terjamin",
                      "Customer service responsif 24/7",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-msl-orange rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-gray-200 text-center">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-msl-navy">
                        {siteConfig.company.clients}
                      </div>
                      <div className="text-sm text-gray-600">
                        Klien Terlayani
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-gray-200 text-center">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-msl-orange">
                        {siteConfig.company.satisfaction}
                      </div>
                      <div className="text-sm text-gray-600">
                        Tingkat Kepuasan
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12" data-aos="fade-up">
            <Badge
              variant="secondary"
              className="bg-msl-navy/10 text-msl-navy border-msl-navy/20"
            >
              📍 Lokasi Kantor
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-msl-navy">
              Kunjungi Kantor Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kantor pusat kami berlokasi strategis di Batam untuk melayani
              kebutuhan logistik Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8" data-aos="fade-up">
            <div className="lg:col-span-2">
              <Card className="border-gray-200 overflow-hidden">
                <div className="h-96 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-msl-navy mx-auto mb-4" />
                    <p className="text-gray-600">
                      Peta lokasi akan ditampilkan di sini
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      {siteConfig.contact.address.street}
                      <br />
                      {siteConfig.contact.address.city}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg text-msl-navy">
                    Alamat Lengkap
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-msl-orange mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">
                        {siteConfig.contact.address.street}
                      </p>
                      <p className="text-gray-600">
                        {siteConfig.contact.address.city}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg text-msl-navy">
                    Akses Transportasi
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      <strong>Dari Bandara:</strong> 15 menit berkendara
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Dari Pelabuhan:</strong> 20 menit berkendara
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Transportasi Umum:</strong> Tersedia angkutan kota
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Button
                className="w-full bg-msl-orange hover:bg-msl-orange/90 text-white"
                asChild
              >
                <a href="#" target="_blank">
                  <MapPin className="mr-2 h-4 w-4" />
                  Buka di Google Maps
                </a>
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
                  <div
                    key={service.id}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {service.title}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Perusahaan</h4>
              <div className="space-y-2 text-sm">
                {siteConfig.navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors block"
                  >
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
                  {siteConfig.contact.address.street}
                  <br />
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
