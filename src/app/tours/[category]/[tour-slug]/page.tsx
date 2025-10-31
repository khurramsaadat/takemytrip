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
    duration: "5-6 hours",
    image: "/images/09.jpg",
    description: "Join the Ride – Shared 4x4 Desert Safari Adventure. Experience an unforgettable evening in the Dubai desert with thrilling dune bashing, a camel ride, sandboarding, and a delicious BBQ dinner under the stars. Enjoy traditional entertainment like belly dancing and fire shows at a Bedouin-style camp.",
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
  "private-sunset-ds-bbq": {
    name: "Private Sunset Desert Safari & BBQ Dinner",
    category: "Desert Safari",
    price: "AED 1000/Vehicle (Max 6 pax)",
    duration: "5-6 hours",
    image: "/images/15.jpg",
    description: "Join the Ride – Shared 4x4 Desert Safari Adventure. Your Private Gateway to the Golden Dunes (max 6 pax). Experience an unforgettable evening in the Dubai desert with thrilling dune bashing, a camel ride, sandboarding, and a delicious BBQ dinner under the stars. Enjoy traditional entertainment like belly dancing and fire shows at a Bedouin-style camp.",
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
  "morning-desert-safari": {
    name: "Morning Desert Safari",
    category: "Desert Safari",
    price: "AED 100",
    duration: "4 hours",
    image: "/images/16.jpg",
    description: "Where the Sun Rises and the Desert Breathes - A Dawn Safari Like No Other. The perfect way to start your day - fresh, exhilarating, and unforgettable. Feel the dawn air as you journey across golden dunes in a powerful 4×4, far from the noise of the city. Feel the tranquility of the desert as you enjoy a peaceful camel ride through the soft morning light. For those seeking a touch of thrill, sandboarding down pristine slopes offers the perfect blend of calm and adventure.",
    highlights: [
      "Dune bashing in a 4x4 vehicle",
      "Camel riding experience",
      "Sandboarding down desert dunes",
    ],
    inclusions: [
      "Pickup and drop-off from your hotel/residence",
      "Dune bashing",
      "Camel ride",
      "Sandboarding",
    ],
    exclusions: [
      "Quad biking (available at extra cost – A MUST TRY THOUGH)",
    ],
    gallery: [
      "/images/22.jpg",
      "/images/23.jpg",
      "/images/24.jpg",
      "/images/25.jpg",
    ],
  },
  "evening-desert-safari": {
    name: "Evening Desert Safari",
    category: "Desert Safari",
    price: "AED 100",
    duration: "4 hours",
    image: "/images/17.jpg",
    description: "Glide into the golden hour of the Arabian desert—where every dune holds a story, and every sunset feels like magic. Feel the thrill as you carve through red-sand dunes in an adrenaline-pumping 4x4 ride. To add up to the sand, speed, and sunsets—desert sandboarding doesn't get better than this. Then, unwind with a peaceful camel trek at sunset, the horizon ablaze with desert hues.",
    highlights: [
      "Dune bashing in a 4x4 vehicle",
      "Camel riding experience",
      "Sandboarding down desert dunes",
    ],
    inclusions: [
      "Pickup and drop-off from your hotel/residence",
      "Dune bashing",
      "Camel ride",
      "Sandboarding",
    ],
    exclusions: [
      "Quad biking (available at extra cost – A MUST TRY THOUGH)",
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

export default async function TourDetailPage({ params }: { params: Promise<{ category: string; "tour-slug": string }> }) {
  const resolvedParams = await params;
  const tourSlug = resolvedParams["tour-slug"];
  const tour = tourDetails[tourSlug];

  if (!tour) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-xl md:text-4xl font-bold text-gray-800 mb-4">Tour Not Found</h1>
        <p className="text-sm md:text-lg text-gray-600">The tour you are looking for does not exist.</p>
        <Link href="/tours" className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full text-sm md:text-lg transition duration-300">
          Back to Tours
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-xl md:text-5xl font-bold text-center text-gray-800 mb-12">{tour.name}</h1>

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
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-6">Overview</h2>
          <p className="text-gray-700 text-sm md:text-lg leading-relaxed mb-8">{tour.description}</p>

          <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-4">Highlights</h3>
          <ul className="list-disc list-inside text-gray-700 text-sm md:text-lg mb-8 space-y-2">
            {tour.highlights.map((highlight: string, index: number) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>

          <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-4">Inclusions</h3>
          <ul className="list-disc list-inside text-gray-700 text-sm md:text-lg mb-8 space-y-2">
            {tour.inclusions.map((inclusion: string, index: number) => (
              <li key={index}>{inclusion}</li>
            ))}
          </ul>

          <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-4">Exclusions</h3>
          <ul className="list-disc list-inside text-gray-700 text-sm md:text-lg mb-8 space-y-2">
            {tour.exclusions.map((exclusion: string, index: number) => (
              <li key={index}>{exclusion}</li>
            ))}
          </ul>

          {tour.gallery && tour.gallery.length > 0 && (
            <>
              <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-4">Gallery</h3>
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

        <div className="lg:col-span-1 bg-gray-50 p-4 md:p-8 rounded-lg shadow-lg h-fit sticky top-24">
          <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-6">Tour Details</h3>
          <p className="text-gray-700 text-sm md:text-xl mb-4">
            <span className="font-semibold">Price:</span> {tour.price}{!tour.price.includes('Vehicle') ? ' /person' : ''}
          </p>
          <p className="text-gray-700 text-sm md:text-xl mb-6">
            <span className="font-semibold">Duration:</span> {tour.duration}
          </p>
          <Link href="/contact" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 md:py-4 md:px-8 rounded-full text-sm md:text-xl text-center transition duration-300">
            Inquire Now
          </Link>
        </div>
      </div>
    </div>
  );
}
