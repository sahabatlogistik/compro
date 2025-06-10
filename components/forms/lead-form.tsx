"use client";

import { Building, Mail, Phone, Send, User } from "lucide-react";
import React, { useState } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { siteConfig } from "@/lib/config";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { sendLeadToMake } from "@/lib/axios";

export default function LeadForm() {
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

    toast.promise(
      async () => {
        return await sendLeadToMake({
          full_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          services: [formData.service],
        }).finally(() => {
          setFormData({
            name: "",
            company: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        });
      },
      {
        loading: "Mengirim permintaan...",
        success: "Permintaan konsultasi berhasil dikirim!",
        error: "Gagal mengirim permintaan, silakan coba lagi.",
      }
    );
  };

  return (
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
            onChange={(e) => handleInputChange("name", e.target.value)}
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
            onChange={(e) => handleInputChange("company", e.target.value)}
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
            onChange={(e) => handleInputChange("email", e.target.value)}
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
            onChange={(e) => handleInputChange("phone", e.target.value)}
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
          onValueChange={(value) => handleInputChange("service", value)}
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
        <label className="text-sm font-medium text-gray-700">Pesan</label>
        <Textarea
          rows={5}
          placeholder="Deskripsikan kebutuhan logistik Anda secara detail..."
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
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
  );
}
