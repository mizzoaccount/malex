"use client";

import { useParams, usePathname } from "next/navigation";
import { IoCallOutline, IoShieldCheckmarkOutline, IoCloudDownloadOutline, IoPieChartOutline } from "react-icons/io5";

const services = [
  {
    slug: "24-7-support",
    icon: <IoCallOutline className="text-6xl text-blue-600" />,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to assist you with inquiries, troubleshooting, and order assistance. Whether it's late at night or early in the morning, we ensure your concerns are resolved swiftly so that your business keeps running smoothly without interruptions.",
  },
  {
    slug: "secure-payments",
    icon: <IoShieldCheckmarkOutline className="text-6xl text-blue-600" />,
    title: "Secure Payments",
    description:
      "We ensure your payments are handled safely and smoothly, so you can shop with confidence. With multiple trusted payment options, every transaction is secure, simple, and stress-free.",
  },  
  {
    slug: "daily-updates",
    icon: <IoCloudDownloadOutline className="text-6xl text-blue-600" />,
    title: "Daily Updates",
    description:
      "Stay ahead with real-time updates on inventory, market trends, and order tracking. Our system continuously provides the latest insights to help you make informed decisions, ensuring you never run out of essential supplies or miss a critical market shift.",
  },
  {
    slug: "market-research",
    icon: <IoPieChartOutline className="text-6xl text-blue-600" />,
    title: "Market Research",
    description:
      "Gain access to in-depth reports and analytics tailored to your industry. We provide data-driven insights on demand trends, pricing strategies, and competitor analysis to help you optimize your business operations and achieve sustainable growth.",
  },
];

export default function ServiceDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-600 px-4">
        <h2 className="text-2xl font-semibold">Service not found.</h2>
        <button
          onClick={() => window.history.back()}
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all transform hover:scale-105"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 md:px-8">
      <div className="max-w-3xl bg-white shadow-xl rounded-lg p-6 sm:p-10 md:p-12 transition-all">
        <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
          <div className="animate-fade-in">{service.icon}</div>
          <h1 className="text-xl font-extrabold text-gray-900 sm:text-xl">{service.title}</h1>
          <p className="text-gray-600 text-md sm:text-md leading-relaxed">{service.description}</p>
          <button
            onClick={() => window.history.back()}
            className="mt-6 px-6 py-2 text-md sm:text-md bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all transform hover:scale-105"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
