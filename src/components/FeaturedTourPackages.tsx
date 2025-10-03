import Image from "next/image";
import Link from "next/link";

const tourPackages = [
  {
    name: "Premium Evening Desert Safari & BBQ Dinner",
    price: "AED 150.00",
    duration: "6-7 hours",
    image: "/images/09.jpg",
    link: "/tours/desert-safari/premium-evening-desert-safari",
  },
  {
    name: "Abu Dhabi Sheikh Zayed Grand Mosque Tour from Dubai",
    price: "AED 150.00",
    duration: "9 hours",
    image: "/images/08.jpg",
    link: "/tours/city-tours/abu-dhabi-grand-mosque-tour",
  },
  {
    name: "Combo Tour | Sheikh Zayed Grand Mosque + Evening Desert Safari",
    price: "AED 300.00",
    duration: "Full Day",
    image: "/images/12.jpg",
    link: "/tours/combo-tours/grand-mosque-desert-safari-combo",
  },
  {
    name: "Dubai City Tour | Burj Khalifa, Creek Abra & Souks",
    price: "AED 399.00",
    duration: "4-5 hours",
    image: "/images/10.jpg",
    link: "/tours/city-tours/dubai-city-tour",
  },
];

export default function FeaturedTourPackages() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Our Top-Rated Tour Packages</h2>
        <p className="text-xl text-gray-600 mb-12">Your Next Arabian Adventure Awaits</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tourPackages.map((tour, index) => (
            <Link href={tour.link} key={index} className="block bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56 w-full">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="transition-transform duration-300 hover:scale-105 object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{tour.name}</h3>
                <p className="text-gray-600 text-sm mb-2">Duration: {tour.duration}</p>
                <p className="text-blue-600 font-bold text-lg">{tour.price} /person</p>
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-sm transition duration-300">
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
