"use client"
import { useState } from 'react';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const AboutSection = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(0);

  const accordionItems = [
    {
      title: 'Professional Design',
      content: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.'
    },
    {
      title: 'Top-Notch Support',
      content: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.'
    },
    {
      title: 'Exclusive Assets',
      content: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <section className="py-16" aria-labelledby="about-label">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <figure className="w-full">
            {/*<Image
              src="https://github.com/codewithsadee/adex/blob/master/assets/images/about-banner.png?raw=true"
              alt="About banner"
              width={800}
              height={580}
              className="w-full h-auto"
            />*/}
            <Image
                  src="/assets/images/Laboratory-bro.png" // Local path
                  alt="Feature banner"
                  width={800}
                  height={531}
                  className="w-full h-auto"
                />
          </figure>

          <div className="lg:pl-12">
            <p className="text-blue-600 font-medium mb-4" id="about-label">
              Why Choose Us?
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              We bring solutions to make life easier for our clients.
            </h2>

            <ul className="space-y-6">
              {accordionItems.map((item, index) => (
                <li key={index} className="border-b border-gray-200">
                  <div className="accordion-item">
                    <h3 className="mb-4">
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="flex items-center justify-between w-full group"
                        aria-expanded={expandedItem === index}
                      >
                        <div className="flex items-center gap-2">
                          <ChevronDownIcon
                            className={`w-6 h-6 text-blue-500 transition-transform ${
                              expandedItem === index ? 'rotate-180' : ''
                            }`}
                          />
                          <span className={`text-lg font-semibold group-hover:text-violet-700 ${
                            expandedItem === index ? 'text-violet-700' : 'text-gray-900'
                          }`}>
                            {item.title}
                          </span>
                        </div>
                      </button>
                    </h3>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedItem === index ? 'max-h-[500px]' : 'max-h-0'
                      }`}
                    >
                      <p className="text-gray-600 pb-4 pl-8">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;