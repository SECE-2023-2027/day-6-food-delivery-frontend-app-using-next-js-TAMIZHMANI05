"use client";
import Slider from "react-slick";

const restaurants = [
  {
    name: "Chinese Wok",
    cuisine: "Chinese, Asian, Tibetan, Desserts",
    price: "₹230 for two",
    rating: "4.1",
    deliveryTime: "32 mins",
  },
  {
    name: "BOX8 - Desi Meals",
    cuisine: "North Indian, Biryani, Thali, Home Food",
    price: "₹255 for two",
    rating: "4.3",
    deliveryTime: "32 mins",
  },
  {
    name: "Bikanervala",
    cuisine: "Sweets, North Indian, South Indian, Chinese",
    price: "₹350 for two",
    rating: "4.3",
    deliveryTime: "32 mins",
  },
  {
    name: "White Hart Pizza",
    cuisine: "Pizza, Beverages, Snacks, Burgers",
    price: "₹320 for two",
    rating: "4.3",
    deliveryTime: "32 mins",
  },
  {
    name: "Chicago Pizza",
    cuisine: "Pizza, Italian, Fast Food",
    price: "₹300 for two",
    rating: "4.2",
    deliveryTime: "32 mins",
  },
];

const RestaurantCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    swipeToSlide: true,
    useCSS: true,
    useTransform: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        <span>✨ Top restaurant chains in Noida</span>
        <span className="text-xl">🍽️</span>
      </h2>
      <Slider {...settings}>
        {restaurants.map((restaurant, index) => (
          <div key={index} className="px-2">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-48">
                <div className="absolute top-2 right-2 z-10">
                  {restaurant.rating >= 4.3 && (
                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                      👑 Premium
                    </span>
                  )}
                </div>
                <div className="w-full h-full flex items-center justify-center text-4xl">
                  🍽️
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 text-gray-800 flex items-center gap-2">
                  {restaurant.name}
                  {restaurant.rating >= 4.0 && <span>⭐</span>}
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
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RestaurantCarousel;
