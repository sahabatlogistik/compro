"use client";

import { Badge } from "../ui/badge";
import H1 from "../ui/h1";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";

export default function GallerySwiperSection() {
  const t = useTranslations();

  return (
    <section id="gallery-swiper" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8" data-aos="fade-right">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="bg-msl-orange/10 text-msl-navy border-msl-orange/20"
              >
                {t("home.about.badge")}
              </Badge>
              <H1 text={t("home.about.title")} size="lg" />
              <p className="text-lg text-gray-600 leading-relaxed">
                {t("home.about.subtitle")}
              </p>
            </div>

            <div className="space-y-6">
              <Link href="/about">
                <Button className="bg-msl-navy hover:bg-msl-dark-blue text-white mt-3">
                  {t("home.about.cta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full hidden lg:block">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1.2, spaceBetween: 12 },
                768: { slidesPerView: 2.5, spaceBetween: 10 },
              }}
              navigation
              autoplay
              loop
              watchSlidesProgress
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {Array.from({ length: 9 }, (_, idx) => (
                <SwiperSlide key={idx}>
                  <div className="aspect-[5/7] w-full h-full bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src={`/images/gallery/image (${idx + 1}).jpg`}
                      alt={`Gallery Image (${idx + 1})`}
                      className="w-full h-full object-cover"
                      fill
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
