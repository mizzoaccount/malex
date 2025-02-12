import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/outline';

const FeatureSection = () => {
  const features = [
    'Aenean quam ornare. Curabitur blandit.',
    'Nullam quis risus eget urna mollis ornare.',
    'Etiam porta euismod malesuada mollis.',
    'Vivamus sagittis lacus vel augue rutrum.'
  ];

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="feature-label">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content on the Left */}
          <div className="lg:pr-12 text-center lg:text-left order-first lg:order-none">
            <p className="text-blue-600 font-medium mb-4" id="feature-label">
              Our Solutions
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              We make your spending stress-free for you to have the perfect control.
            </h2>
            <p className="text-gray-600 mb-8">
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus.
            </p>

            <ul className="grid grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 p-1.5 bg-purple-100 rounded-full">
                    <CheckIcon className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Feature Image on the Right */}
          <figure className="order-last lg:order-none">
            {/*<Image
              src="https://github.com/codewithsadee/adex/blob/master/assets/images/feature-banner.png?raw=true"
              alt="Feature banner"
              width={800}
              height={531}
              className="w-full h-auto"
            />*/}
  <Image
      src="/assets/images/chemistry lab-cuate.png" // Local path
      alt="Feature banner"
      width={800}
      height={531}
      className="w-full h-auto"
    />

          </figure>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
