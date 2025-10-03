import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Desert Safari",
    description: "Experience the thrill of dune bashing and a traditional Bedouin camp.",
    image: "/images/01.jpg",
    link: "/tours/desert-safari",
  },
  {
    name: "City Tours",
    description: "Explore the iconic landmarks and hidden gems of Dubai, Abu Dhabi, and Sharjah.",
    image: "/images/02.jpg",
    link: "/tours/city-tours",
  },
  {
    name: "Tickets to Top Attractions",
    description: "Access the best attractions like Burj Khalifa, Ferrari World, and various theme parks.",
    image: "/images/04.jpg",
    link: "/tours/attractions",
  },
  {
    name: "Premium Desert Camping",
    description: "Luxury desert camping under the stars with tents, campfires & Bedouin vibes.",
    image: "/images/03.jpg",
    link: "/tours/premium-desert-camping",
  },
  {
    name: "Quad Bike Tours",
    description: "High-speed quad biking in Dubai’s open dunes—adventure for thrill seekers.",
    image: "/images/05.jpg",
    link: "/tours/quad-bike-tours",
  },
  {
    name: "Dhow Cruises",
    description: "Enjoy a serene cruise with dinner and entertainment along Dubai Creek or Marina.",
    image: "/images/07.jpg",
    link: "/tours/dhow-cruises",
  },
  {
    name: "UAE Holidays",
    description: "Discover comprehensive holiday packages across the United Arab Emirates.",
    image: "/images/06.jpg",
    link: "/tours/uae-holidays",
  },
];

export default function TourCategoriesPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-2xl md:text-5xl font-bold text-center text-gray-800 mb-12">Our Tour Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <Link href={category.link} key={index} className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-60 w-full">
              <Image
                src={category.image}
                alt={category.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 md:p-6">
              <h2 className="text-base md:text-2xl font-semibold text-gray-800 mb-2">{category.name}</h2>
              <p className="text-xs md:text-base text-gray-600">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
