import Image from 'next/image';

const shops = [
  { id: 1, name: 'Shop A', image: '/images/shop1.jpg', products: 120 },
  { id: 2, name: 'Shop B', image: '/images/shop2.jpg', products: 95 },
  { id: 3, name: 'Shop C', image: '/images/shop3.jpg', products: 150 },
  { id: 4, name: 'Shop D', image: '/images/shop4.jpg', products: 230 },
  { id: 5, name: 'Shop E', image: '/images/shop5.jpg', products: 75 },
  { id: 6, name: 'Shop F', image: '/images/shop6.jpg', products: 180 },
  { id: 7, name: 'Shop G', image: '/images/shop7.jpg', products: 110 },
  { id: 8, name: 'Shop H', image: '/images/shop8.jpg', products: 200 },
  { id: 9, name: 'Shop I', image: '/images/shop9.jpg', products: 60 },
  { id: 10, name: 'Shop J', image: '/images/shop10.jpg', products: 90 },
];

const ShopsList = () => {
  return (
    <div className="w-full py-6 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">Our Shops</h2>
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {shops.map((shop) => (
            <div key={shop.id} className="flex-none w-64 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-40">
                <Image
                  src={shop.image} // Replace with actual path or URL
                  alt={shop.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{shop.name}</h3>
                <p className="text-gray-600">Products: {shop.products}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopsList;
