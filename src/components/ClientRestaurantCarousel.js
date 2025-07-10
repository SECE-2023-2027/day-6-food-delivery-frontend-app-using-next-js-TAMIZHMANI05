"use client";
import dynamic from "next/dynamic";

const RestaurantCarousel = dynamic(() => import("./RestaurantCarousel"), {
  ssr: false,
});

export default function ClientRestaurantCarousel() {
  return <RestaurantCarousel />;
}
