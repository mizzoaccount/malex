import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="bg-gray-900 text-white py-16 text-center" aria-label="Call to action">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join our community by using our services and grow your business.
        </h2>
        <Link href="#" className="btn btn-primary">Try it For Free</Link>
      </div>
    </section>
  );
};

export default CTASection;
