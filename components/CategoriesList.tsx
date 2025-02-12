const categories = [
    'Electronics',
    'Fashion',
    'Home & Kitchen',
    'Books',
    'Toys & Games',
    'Beauty & Personal Care',
    'Sports & Outdoors',
    'Automotive',
  ];
  
  const CategoriesList = () => {
    return (
      <div className="w-full bg-gray-100 py-6">
        <div className="container mx-auto flex justify-center items-center space-x-8">
          {categories.map((category, index) => (
            <div key={index} className="category-item text-center">
              <div className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200">
                {category}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CategoriesList;
  