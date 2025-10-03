import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Desert Safari",
    description: "Experience the thrill of dune bashing and a traditional Bedouin camp.",
    image: "/images/WhatsApp Image 2025-10-01 at 7.33.27 PM.jpeg",
    link: "/tours/desert-safari",
  },
  {
    name: "City Tours",
    description: "Explore the iconic landmarks and hidden gems of Dubai, Abu Dhabi, and Sharjah.",
    image: "/images/WhatsApp Image 2025-10-01 at 7.33.27 PM1.jpeg",
    link: "/tours/city-tours",
  },
  {
    name: "Tickets to Top Attractions",
    description: "Access the best attractions like Burj Khalifa, Ferrari World, and various theme parks.",
    image: "/images/WhatsApp Image 2025-10-01 at 7.33.28 PM.jpeg",
    link: "/tours/attractions",
  },
  {
    name: "Premium Desert Camping",
    description: "Luxury desert camping under the stars with tents, campfires & Bedouin vibes.",
    image: "/images/WhatsApp Image 2025-10-01 at 7.33.28 PM (1).jpeg",
    link: "/tours/premium-desert-camping",
  },
  {
    name: "Quad Bike Tours",
    description: "High-speed quad biking in Dubai’s open dunes—adventure for thrill seekers.",
    image: "/images/WhatsApp Image 2025-10-01 at 7.33.29 PM (1).jpeg",
    link: "/tours/quad-bike-tours",
  },
  {
    name: "Dhow Cruises",
    description: "Enjoy a serene cruise with dinner and entertainment along Dubai Creek or Marina.",
    image: "/images/WhatsApp Image 2025-10-01 at 7.33.29 PM.jpeg",
    link: "/tours/dhow-cruises",
  },
  {
    name: "UAE Holidays",
    description: "Discover comprehensive holiday packages across the United Arab Emirates.",
    image: "/images/WhatsApp Image 2025-10-01 at 7.33.29 PM (2).jpeg",
    link: "/tours/uae-holidays",
  },
];

export default function TourCategoriesPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">Our Tour Categories</h1>
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
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{category.name}</h2>
              <p className="text-gray-600">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
