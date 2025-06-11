export const siteConfig = {
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://sahabatlogistik.com",
  name: "PT. Mitra Sahabat Logistik",
  tagline: "Sahabat Terpercaya untuk Semua Pengiriman Anda",
  description:
    "PT Mitra Sahabat Logistik (MSL) adalah perusahaan yang bergerak di bidang jasa freight forwarding domestik dan internasional, berbasis di Batam, Kepulauan Riau. Kami hadir sebagai solusi logistik yang tidak hanya andal dan efisien, tetapi juga mudah dijangkau dan menyenangkan untuk diajak bekerja sama.",

  contact: {
    phone: "0812-6602-0295",
    whatsapp: "https://wa.me/6281266020295",
    email: "ops@sahabatlogistik.com",
    address: {
      street: "Komp. Glory View, Blok B No.12",
      city: "Legenda Malaka, Batam, Kepulauan Riau",
    },
  },

  social: {
    facebook: "https://facebook.com/mitrasahabatlogistik",
    instagram: "https://instagram.com/mitrasahabatlogistik",
    linkedin: "https://linkedin.com/company/mitrasahabatlogistik",
    twitter: "https://twitter.com/mitrasahabat",
    youtube: "https://youtube.com/@mitrasahabatlogistik",
  },

  company: {
    founded: 2008,
    experience: "15+",
    clients: "500+",
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
        description: "Menyediakan layanan yang mudah dijangkau dan user-friendly",
      },
      {
        title: "Kepuasan Pelanggan",
        description:
          "Mengutamakan kepuasan klien dengan layanan yang menyenangkan",
      },
    ],
  },

  services: [
    {
      id: "domestic-land",
      icon: "Truck",
      title: "Freight Forwarding Domestik - Darat",
      shortDescription:
        "Layanan pengiriman darat ke seluruh Indonesia dengan armada modern dan rute optimal untuk distribusi barang yang efisien dan tepat waktu.",
      fullDescription:
        "Kami menyediakan layanan freight forwarding domestik via darat dengan coverage ke seluruh Indonesia. Dengan armada yang terawat dan sistem tracking real-time, kami memastikan barang Anda sampai dengan aman dan tepat waktu.",
      features: ["Door-to-door Service", "Tracking Real-time", "Asuransi Barang"],
      benefits: [
        "Pengiriman ke seluruh Indonesia",
        "Monitoring real-time melalui aplikasi",
        "Asuransi penuh untuk keamanan barang",
        "Rute optimal untuk efisiensi biaya",
        "Tim driver profesional dan berpengalaman",
      ],
      coverage: "Seluruh Indonesia",
      pricing: "Mulai dari Rp 50.000 per pengiriman",
    },
    {
      id: "domestic-sea",
      icon: "Package",
      title: "Freight Forwarding Domestik - Laut",
      shortDescription:
        "Layanan pengiriman laut domestik untuk cargo besar dengan biaya efisien dan jadwal reguler ke pelabuhan utama Indonesia.",
      fullDescription:
        "Solusi pengiriman laut domestik yang ideal untuk cargo volume besar. Kami bekerja sama dengan shipping line terpercaya untuk memastikan pengiriman yang aman dan ekonomis ke seluruh pelabuhan di Indonesia.",
      features: ["FCL & LCL Service", "Port-to-port", "Custom Handling"],
      benefits: [
        "Biaya ekonomis untuk cargo besar",
        "Jadwal sailing reguler",
        "Handling khusus untuk berbagai jenis cargo",
        "Dokumentasi lengkap dan akurat",
        "Koordinasi dengan pelabuhan tujuan",
      ],
      coverage: "Seluruh pelabuhan utama Indonesia",
      pricing: "Mulai dari Rp 500.000 per CBM",
    },
    {
      id: "domestic-air",
      icon: "LocationIcon",
      title: "Freight Forwarding Domestik - Udara",
      shortDescription:
        "Layanan pengiriman udara domestik untuk barang urgent dengan waktu tempuh tercepat ke seluruh bandara di Indonesia.",
      fullDescription:
        "Layanan freight forwarding udara domestik untuk kebutuhan pengiriman cepat dan urgent. Dengan jaringan airline partner yang luas, kami dapat mengirim ke seluruh bandara di Indonesia dengan waktu tempuh minimal.",
      features: ["Same Day Service", "Express Delivery", "Temperature Control"],
      benefits: [
        "Pengiriman tercepat 1-2 hari",
        "Handling khusus untuk barang sensitif",
        "Temperature controlled untuk produk khusus",
        "Prioritas handling di bandara",
        "Dokumentasi cepat dan akurat",
      ],
      coverage: "Seluruh bandara di Indonesia",
      pricing: "Mulai dari Rp 25.000 per kg",
    },
    {
      id: "international-import",
      icon: "Users",
      title: "Freight Forwarding Internasional - Import",
      shortDescription:
        "Layanan import dari seluruh dunia dengan pengurusan dokumen kepabeanan, custom clearance, dan pengiriman hingga tujuan akhir.",
      fullDescription:
        "Layanan freight forwarding import yang komprehensif dari seluruh dunia. Tim berpengalaman kami menangani seluruh proses mulai dari koordinasi dengan supplier, pengurusan dokumen, custom clearance, hingga pengiriman ke tujuan akhir.",
      features: ["Custom Clearance", "Door-to-door", "Document Handling"],
      benefits: [
        "Pengurusan dokumen import lengkap",
        "Custom clearance yang cepat dan akurat",
        "Koordinasi dengan supplier internasional",
        "Pengiriman hingga alamat tujuan",
        "Konsultasi regulasi import terbaru",
      ],
      coverage: "Import dari seluruh dunia",
      pricing: "Mulai dari USD 200 per shipment",
    },
    {
      id: "international-export",
      icon: "Warehouse",
      title: "Freight Forwarding Internasional - Export",
      shortDescription:
        "Layanan export ke seluruh dunia dengan pengurusan dokumen ekspor, custom clearance, dan koordinasi dengan buyer internasional.",
      fullDescription:
        "Layanan freight forwarding export yang membantu bisnis Indonesia menjangkau pasar global. Kami menangani seluruh proses export mulai dari pickup, dokumentasi, custom clearance, hingga koordinasi dengan buyer di negara tujuan.",
      features: ["Export Documentation", "Custom Clearance", "International Network"],
      benefits: [
        "Pengurusan dokumen export lengkap",
        "Custom clearance yang profesional",
        "Jaringan agent internasional terpercaya",
        "Koordinasi dengan buyer di negara tujuan",
        "Konsultasi regulasi export terbaru",
      ],
      coverage: "Export ke seluruh dunia",
      pricing: "Mulai dari USD 250 per shipment",
    },
    {
      id: "custom-clearance",
      icon: "Clock",
      title: "Custom Clearance & Documentation",
      shortDescription:
        "Layanan pengurusan dokumen kepabeanan dan custom clearance yang cepat, akurat, dan sesuai dengan regulasi terbaru.",
      fullDescription:
        "Layanan custom clearance dan dokumentasi yang ditangani oleh tim berpengalaman dan tersertifikasi. Kami memastikan proses clearance berjalan lancar dan sesuai dengan regulasi kepabeanan yang berlaku.",
      features: ["PPJK Licensed", "Document Preparation", "Regulatory Compliance"],
      benefits: [
        "Tim PPJK bersertifikat dan berpengalaman",
        "Proses clearance yang cepat dan akurat",
        "Update regulasi kepabeanan terbaru",
        "Pengurusan dokumen lengkap dan tepat",
        "Koordinasi dengan pihak bea cukai",
      ],
      coverage: "Seluruh pelabuhan dan bandara Indonesia",
      pricing: "Mulai dari Rp 500.000 per dokumen",
    },
  ],

  navigation: [
    { name: "Beranda", href: "/" },
    { name: "Layanan", href: "/services" },
    { name: "Tentang", href: "/about" },
    { name: "Kontak", href: "/contact" },
  ],
};