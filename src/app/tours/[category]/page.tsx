import Image from "next/image";
import Link from "next/link";

// Tour type definition
interface Tour {
  name: string;
  price: string;
  duration: string;
  image: string;
  link: string;
}

// Placeholder data for tours within categories
const toursByCategory: { [key: string]: Tour[] } = {
  "desert-safari": [
    {
      name: "Premium Evening Desert Safari & BBQ Dinner",
      price: "AED 150.00",
      duration: "6-7 hours",
      image: "/images/09.jpg",
      link: "/tours/desert-safari/premium-evening-desert-safari",
    },
    {
      name: "Standard Sunset Desert Safari",
      price: "AED 899.00",
      duration: "5-6 hours",
      image: "/images/15.jpg",
      link: "/tours/desert-safari/standard-sunset-desert-safari",
    },
    {
      name: "Self-Drive Evening Desert Safari",
      price: "AED 899.00",
      duration: "6-7 hours",
      image: "/images/16.jpg",
      link: "/tours/desert-safari/self-drive-evening-desert-safari",
    },
  ],
  "city-tours": [
    {
      name: "Abu Dhabi Sheikh Zayed Grand Mosque Tour from Dubai",
      price: "AED 150.00",
      duration: "9 hours",
      image: "/images/08.jpg",
      link: "/tours/city-tours/abu-dhabi-grand-mosque-tour",
    },
    {
      name: "Dubai City Tour | Burj Khalifa, Creek Abra & Souks",
      price: "AED 399.00",
      duration: "4-5 hours",
      image: "/images/10.jpg",
      link: "/tours/city-tours/dubai-city-tour",
    },
    {
      name: "Al Ain City Tour from Dubai | Garden City & Jebel Hafeet",
      price: "AED 399.00",
      duration: "Full Day",
      image: "/images/19.jpg",
      link: "/tours/city-tours/al-ain-city-tour",
    },
  ],
  "attractions": [
    {
      name: "Ferrari World Abu Dhabi",
      price: "AED 1.00",
      duration: "Full Day",
      image: "/images/18.jpg",
      link: "/tours/attractions/ferrari-world",
    },
    {
      name: "Burj Khalifa – At the Top",
      price: "AED 100.00",
      duration: "2-3 hours",
      image: "/images/20.jpg",
      link: "/tours/attractions/burj-khalifa",
    },
  ],
  "dhow-cruises": [
    {
      name: "Dubai Creek Dhow Cruise Dinner",
      price: "AED 60.00",
      duration: "2 hours",
      image: "/images/26.jpg",
      link: "/tours/dhow-cruises/dubai-creek-dinner",
    },
    {
      name: "Dubai Marina Dhow Cruise Dinner",
      price: "AED 120.00",
      duration: "2 hours",
      image: "/images/21.jpg",
      link: "/tours/dhow-cruises/dubai-marina-dinner",
    },
  ],
  // Add more categories and their tours as needed
};

export default function TourCategoryDetailPage({ params }: { params: { category: string } }) {
  const categorySlug = params.category;
  const tours = toursByCategory[categorySlug] || [];

  const categoryName = categorySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-2xl md:text-5xl font-bold text-center text-gray-800 mb-12">{categoryName} Tours</h1>
      {tours.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <Link href={tour.link} key={index} className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56 w-full">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 md:p-6 text-left">
                <h2 className="text-base md:text-xl font-semibold text-gray-800 mb-2">{tour.name}</h2>
                <p className="text-gray-600 text-xs md:text-sm mb-2">Duration: {tour.duration}</p>
                <p className="text-blue-600 font-bold text-sm md:text-lg">{tour.price} /person</p>
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded-full text-xs md:text-sm transition duration-300">
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-sm md:text-lg">No tours found for this category.</p>
      )}
    </div>
  );
}
