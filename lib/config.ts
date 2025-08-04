export const siteConfig = {
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://sahabatlogistik.com",
  name: "PT. Mitra Sahabat Logistik",
  tagline: "Sahabat Terpercaya untuk Semua Pengiriman Anda",
  description:
    "PT Mitra Sahabat Logistik (MSL) adalah perusahaan yang bergerak di bidang jasa freight forwarding domestik dan internasional, berbasis di Batam, Kepulauan Riau. Kami hadir sebagai solusi logistik yang tidak hanya andal dan efisien, tetapi juga mudah dijangkau dan menyenangkan untuk diajak bekerja sama.",

  contact: {
    phone: "0812-6602-0295",
    whatsapp: "https://wa.me/6281266020295",
    email: "admin@sahabatlogistik.com",
    address: {
      street: "Komp. Glory View, Blok B No.12",
      city: "Legenda Malaka, Batam, Kepulauan Riau",
    },
  },

  social: {
    facebook: "https://facebook.com/mitrasahabatlogistik",
    instagram: "https://www.instagram.com/msl_batam",
    linkedin: "https://www.linkedin.com/in/sahabat-logistik-751922370",
    twitter: "https://twitter.com/mitrasahabat",
    youtube: "https://youtube.com/@mitrasahabatlogistik",
  },

  company: {
    founded: 2017,
    experience: "7+",
    clients: "50+",
    satisfaction: "99.5%",
    certification: "ISO 9001:2015",

    vision:
      "Menjadi perusahaan freight forwarding terdepan di Indonesia yang menjadi sahabat terpercaya untuk semua kebutuhan pengiriman domestik dan internasional.",
    mission:
      "Memberikan solusi freight forwarding yang andal, efisien, mudah dijangkau, dan menyenangkan untuk mendukung pertumbuhan bisnis klien dengan layanan yang cepat, aman, dan tanpa ribet.",

    values: [
      {
        title: "Keandalan",
        description:
          "Berkomitmen memberikan layanan yang konsisten dan dapat diandalkan",
      },
      {
        title: "Efisiensi",
        description:
          "Mengoptimalkan proses untuk memberikan solusi yang cepat dan tepat",
      },
      {
        title: "Kemudahan",
        description:
          "Menyediakan layanan yang mudah dijangkau dan user-friendly",
      },
      {
        title: "Kepuasan Pelanggan",
        description:
          "Mengutamakan kepuasan klien dengan layanan yang menyenangkan",
      },
    ],
  },

  navigation: [
    { name: "Beranda", href: "/" },
    { name: "Layanan", href: "/services" },
    { name: "Tentang", href: "/about" },
    { name: "Kontak", href: "/contact" },
  ],

  settings: {
    hide_phone: true,
  },
};
