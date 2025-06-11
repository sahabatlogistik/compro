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
import { useTranslations } from 'next-intl';

export default function LeadForm() {
  const t = useTranslations();
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
        loading: t('form.sending'),
        success: t('form.success'),
        error: t('form.error'),
      }
    );
  };

  // Get services from translations
  const services = t.raw("home.services.items");

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center">
            <User className="w-4 h-4 mr-2" />
            {t('contact.form.fields.name')} *
          </label>
          <Input
            type="text"
            placeholder={t('contact.form.fields.name_placeholder')}
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="border-gray-300 focus:border-msl-orange focus:ring-msl-orange"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center">
            <Building className="w-4 h-4 mr-2" />
            {t('contact.form.fields.company')}
          </label>
          <Input
            type="text"
            placeholder={t('contact.form.fields.company_placeholder')}
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
            {t('contact.form.fields.email')} *
          </label>
          <Input
            type="email"
            placeholder={t('contact.form.fields.email_placeholder')}
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="border-gray-300 focus:border-msl-orange focus:ring-msl-orange"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            {t('contact.form.fields.phone')} *
          </label>
          <Input
            type="tel"
            placeholder={t('contact.form.fields.phone_placeholder')}
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="border-gray-300 focus:border-msl-orange focus:ring-msl-orange"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          {t('contact.form.fields.service')}
        </label>
        <Select
          value={formData.service}
          onValueChange={(value) => handleInputChange("service", value)}
        >
          <SelectTrigger className="border-gray-300 focus:border-msl-orange focus:ring-msl-orange">
            <SelectValue placeholder={t('contact.form.fields.service_placeholder')} />
          </SelectTrigger>
          <SelectContent>
            {services.map((service: any) => (
              <SelectItem key={service.id} value={service.id}>
                {service.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">{t('contact.form.fields.message')}</label>
        <Textarea
          rows={5}
          placeholder={t('contact.form.fields.message_placeholder')}
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
        {t('contact.form.submit')}
      </Button>
    </form>
  );
}