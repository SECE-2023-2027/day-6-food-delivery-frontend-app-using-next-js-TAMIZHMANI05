const Restaurants = ({restaurants}) => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        <span>🚀 Restaurants with online food delivery in Noida</span>
        <span className="text-sm bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full">
          Best Deals
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative h-48">
              <div className="w-full h-full flex items-center justify-center text-4xl">
                🍽️
              </div>
              {restaurant.premium && (
                <div className="absolute top-2 right-2">
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    👑 Premium
                  </span>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 text-gray-800 flex items-center gap-2">
                {restaurant.name}
                {parseFloat(restaurant.rating) >= 4.3 && <span>⭐</span>}
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                {restaurant.cuisine} 🍴
              </p>
              <div className="flex justify-between items-center">
                <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded-lg text-sm font-semibold">
                  ★ {restaurant.rating}
                </span>
                <span className="text-gray-600 text-sm flex items-center gap-1">
                  <span>🕒</span> {restaurant.deliveryTime}
                </span>
              </div>
              <p className="text-gray-700 text-sm mt-2 flex items-center gap-1">
                <span>💰</span> {restaurant.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Restaurants