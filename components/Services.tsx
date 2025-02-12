// components/Services.tsx
import { IoCallOutline, IoShieldCheckmarkOutline, IoCloudDownloadOutline, IoPieChartOutline, IoArrowForwardOutline } from 'react-icons/io5';

export default function Services() {
  const services = [
    {
      icon: <IoCallOutline className="text-4xl" />,
      title: "24/7 Support",
      description: "Round-the-clock expert assistance to resolve queries and ensure seamless chemical supply operations anytime, anywhere."
    },
    {
      icon: <IoShieldCheckmarkOutline className="text-4xl" />,
      title: "Secure Payments",
      description: "Trusted and encrypted payment systems for safe, hassle-free transactions every time you order."
    },
    {
      icon: <IoCloudDownloadOutline className="text-4xl" />,
      title: "Daily Updates",
      description: "Real-time tracking and updates on orders, deliveries, and inventory to keep you informed and prepared."
    },
    {
      icon: <IoPieChartOutline className="text-4xl" />,
      title: "Market Research",
      description: " In-depth industry insights and trends to help you make informed decisions and stay ahead in the chemical market."
    }
  ];

  return (
    <section className="py-8 text-center" aria-labelledby="service-label">
      <div className="container mx-auto px-4">
        <p className="text-lg text-gray-500 mb-2" id="service-label">What We Do?</p>
        <h2 className="text-3xl text-gray-900 md:text-3xl font-bold mb-12 max-w-2xl mx-auto">
          The service we offer is specifically designed to meet your needs.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-8 bg-white shadow-lg rounded-xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto text-white mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl text-gray-900 font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a href="#" className="flex items-center justify-center gap-2 text-blue-600 font-semibold hover:opacity-90 transition-opacity">
                <span>Learn More</span>
                <IoArrowForwardOutline className="text-lg" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}