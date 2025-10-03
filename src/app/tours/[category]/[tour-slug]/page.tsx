import Image from "next/image";
import Link from "next/link";

// Tour detail type definition
interface TourDetail {
  name: string;
  category: string;
  price: string;
  duration: string;
  image: string;
  description: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  gallery?: string[];
}

// Placeholder data for a single tour detail
const tourDetails: { [key: string]: TourDetail } = {
  "premium-evening-desert-safari": {
    name: "Premium Evening Desert Safari & BBQ Dinner",
    category: "Desert Safari",
    price: "AED 150.00",
    duration: "6-7 hours",
    image: "/images/09.jpg",
    description: "Experience an unforgettable evening in the Dubai desert with thrilling dune bashing, a camel ride, sandboarding, and a delicious BBQ dinner under the stars. Enjoy traditional entertainment like belly dancing and fire shows at a Bedouin-style camp.",
    highlights: [
      "Dune bashing in a 4x4 vehicle",
      "Camel riding experience",
      "Sandboarding down desert dunes",
      "BBQ dinner with vegetarian and non-vegetarian options",
      "Live entertainment (Belly Dance, Tanoura Show, Fire Show)",
      "Henna painting and Shisha smoking",
    ],
    inclusions: [
      "Pickup and drop-off from your hotel/residence",
      "Dune bashing",
      "Camel ride",
      "Sandboarding",
      "BBQ dinner",
      "Soft drinks and water",
      "Live entertainment",
    ],
    exclusions: [
      "Alcoholic beverages",
      "Quad biking (available at extra cost)",
      "Souvenirs",
    ],
    gallery: [
      "/images/22.jpg",
      "/images/23.jpg",
      "/images/24.jpg",
      "/images/25.jpg",
    ],
  },
  "abu-dhabi-grand-mosque-tour": {
    name: "Abu Dhabi Sheikh Zayed Grand Mosque Tour from Dubai",
    category: "City Tours",
    price: "AED 150.00",
    duration: "9 hours",
    image: "/images/08.jpg",
    description: "Embark on a full-day tour to Abu Dhabi from Dubai and explore the magnificent Sheikh Zayed Grand Mosque, one of the world's largest mosques. Visit other key attractions like the Emirates Palace and Heritage Village.",
    highlights: [
      "Visit Sheikh Zayed Grand Mosque",
      "Photo stop at Emirates Palace",
      "Explore Heritage Village",
      "Drive through Corniche Road",
    ],
    inclusions: [
      "Pickup and drop-off from your hotel/residence in Dubai",
      "Air-conditioned vehicle",
      "Professional tour guide",
      "Entrance fees to attractions (where applicable)",
      "Water bottles",
    ],
    exclusions: [
      "Lunch",
      "Souvenirs",
    ],
    gallery: [
      "/images/29.jpg",
      "/images/27.jpg",
      "/images/28.jpg",
    ],
  },
  // Add more tour details as needed
};

export default function TourDetailPage({ params }: { params: { category: string; "tour-slug": string } }) {
  const tourSlug = params["tour-slug"];
  const tour = tourDetails[tourSlug];

  if (!tour) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Tour Not Found</h1>
        <p className="text-lg text-gray-600">The tour you are looking for does not exist.</p>
        <Link href="/tours" className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
          Back to Tours
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">{tour.name}</h1>

      <div className="relative h-[70vh] w-full mb-12 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={tour.image}
          alt={tour.name}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Overview</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">{tour.description}</p>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">Highlights</h3>
          <ul className="list-disc list-inside text-gray-700 text-lg mb-8 space-y-2">
            {tour.highlights.map((highlight: string, index: number) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">Inclusions</h3>
          <ul className="list-disc list-inside text-gray-700 text-lg mb-8 space-y-2">
            {tour.inclusions.map((inclusion: string, index: number) => (
              <li key={index}>{inclusion}</li>
            ))}
          </ul>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">Exclusions</h3>
          <ul className="list-disc list-inside text-gray-700 text-lg mb-8 space-y-2">
            {tour.exclusions.map((exclusion: string, index: number) => (
              <li key={index}>{exclusion}</li>
            ))}
          </ul>

          {tour.gallery && tour.gallery.length > 0 && (
            <>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {tour.gallery.map((imgSrc: string, index: number) => (
                  <div key={index} className="relative h-48 w-full rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={imgSrc}
                      alt={`${tour.name} image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="lg:col-span-1 bg-gray-50 p-8 rounded-lg shadow-lg h-fit sticky top-24">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Tour Details</h3>
          <p className="text-gray-700 text-xl mb-4">
            <span className="font-semibold">Price:</span> {tour.price} /person
          </p>
          <p className="text-gray-700 text-xl mb-6">
            <span className="font-semibold">Duration:</span> {tour.duration}
          </p>
          <Link href="/contact" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-xl text-center transition duration-300">
            Inquire Now
          </Link>
        </div>
      </div>
    </div>
  );
}
