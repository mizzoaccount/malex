import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[400px]">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="https://i.pinimg.com/736x/d1/42/3a/d1423a5ee549c324788f4617b179b461.jpg" // Replace with your image path or URL
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center p-4">
        <h1 className="text-4xl font-bold mb-4">Your Title Here</h1>
        <p className="text-lg mb-6">
          Brief description of what your site offers or what the promotion is.
        </p>
        <button className="bg-blue-600 py-2 px-6 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-200">
          Call to Action
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
