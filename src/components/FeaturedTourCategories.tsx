import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Desert Safari",
    description: "This is the most popular tour/activity to do in UAE",
    image: "/images/WhatsApp Image 2025-10-01 at 7.33.27 PM.jpeg",
    link: "/tours/desert-safari",
  },
  {
    name: "City Tours",
    description: "Explore Dubai, Abu Dhabi, Sharjah and Al Ain with expert-guided city sightseeing tours",
    image: "/images/WhatsApp Image 2025-10-01 at 7.33.27 PM1.jpeg",
    link: "/tours/city-tours",
  },
  {
    name: "Tickets to Top Attractions",
    description: "Burj Khalifa, Ferrari World, Theme Parks & More",
    image: "/images/WhatsApp Image 2025-10-01 at 7.33.28 PM.jpeg",
    link: "/tours/attractions",
  },
  {
    name: "Dhow Cruises",
    description: "Dubai dhow cruise with sunset views, live entertainment & onboard dining",
    image: "/images/WhatsApp Image 2025-10-01 at 7.33.29 PM.jpeg",
    link: "/tours/dhow-cruises",
  },
];

export default function FeaturedTourCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Handpicked Adventures by Take My Trip</h2>
        <p className="text-xl text-gray-600 mb-12">Your Next Arabian Adventure Awaits</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link href={category.link} key={index} className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="transition-transform duration-300 hover:scale-105 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
