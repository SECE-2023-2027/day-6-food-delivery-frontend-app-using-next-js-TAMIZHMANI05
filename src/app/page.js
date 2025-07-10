'use client';
import ClientRestaurantCarousel from "@/components/ClientRestaurantCarousel";
import Restaurants from "@/components/Restaurants";

const restaurants = [
	{
		name: 'Biryani House',
		cuisine: 'North Indian, Biryani',
		rating: '4.5',
		deliveryTime: '25 mins',
		price: '₹350 for two',
		premium: true
	},
	{
		name: 'Pizza Paradise',
		cuisine: 'Italian, Fast Food',
		rating: '4.3',
		deliveryTime: '30 mins',
		price: '₹400 for two',
		premium: true
	},
	{
		name: 'Spice Garden',
		cuisine: 'Indian, Chinese',
		rating: '4.2',
		deliveryTime: '35 mins',
		price: '₹300 for two',
		premium: false
	},
	{
		name: 'Sushi Express',
		cuisine: 'Japanese, Asian',
		rating: '4.4',
		deliveryTime: '40 mins',
		price: '₹500 for two',
		premium: true
	}
];

export default function Home() {
	return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              🍽️ FoodDelivery
            </span>
          </div>
          <nav className="flex items-center gap-6">
            <a
              href="/"
              className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
            >
              Home
            </a>
            <a
              href="/help"
              className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
            >
               Help
            </a>
            <a
              href="/search"
              className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
            >
              Search
            </a>
            <a
              href="/cart"
              className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
            >
            Cart
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <ClientRestaurantCarousel />
        </section>

        <Restaurants restaurants={restaurants}/>
      </main>
    </div>
  );
}
