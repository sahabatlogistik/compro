"use client";

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
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/forms/lead-form";

export default function ContactPage() {
  return (
    <>
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
                color: "msl-orange",
              },
              {
                icon: MapPin,
                title: "Alamat Kantor",
                value: siteConfig.contact.address.street,
                description: siteConfig.contact.address.city,
                action: "Lihat Lokasi",
                href: "#",
                color: "msl-orange",
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
                color: "msl-orange",
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
                  <LeadForm />
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
    </>
  );
}
