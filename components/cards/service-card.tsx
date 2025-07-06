import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Truck,
  Warehouse,
  Package,
  Users,
  MapPin as LocationIcon,
  CheckCircle,
  Forklift,
  Ship,
  Plane,
  Import,
} from "lucide-react";

const iconMap = {
  Truck,
  Warehouse,
  Package,
  LocationIcon,
  Users,
  Forklift,
  Ship,
  Plane,
  Import,
};

export default function ServiceCard({
  service,
  index = 0,
}: {
  service: any;
  index?: number;
}) {
  const IconComponent = iconMap[service.icon as keyof typeof iconMap];
  return (
    <Card
      key={service.id}
      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200 bg-white"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <CardHeader className="space-y-4">
        <div className="w-12 h-12 bg-msl-orange/10 rounded-xl flex items-center justify-center group-hover:bg-msl-orange transition-colors">
          <IconComponent className="h-6 w-6 text-msl-orange group-hover:text-white transition-colors" />
        </div>
        <CardTitle className="text-xl text-msl-navy">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-gray-600 leading-relaxed">
          {service.shortDescription}
        </CardDescription>
        <div className="space-y-2">
          {service.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-msl-orange mr-3" />
              {feature}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
