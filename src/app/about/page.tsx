import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">About Us</h1>

      <div className="flex flex-col lg:flex-row items-center lg:space-x-12 mb-16">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Your Adventure Architects in the UAE</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            At Take My Trip, we specialize in curating unforgettable journeys through the heart of the Emirates. With deep local knowledge, handpicked tour experiences, and a passion for excellence, we are more than a travel company—we are your companions in discovery.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you're visiting for the first time or exploring deeper, our promise is simple: authentic, seamless, and exciting adventures from start to finish.
          </p>
        </div>
        <div className="lg:w-1/2 relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/WhatsApp Image 2025-10-01 at 7.41.14 PM.jpeg" // Placeholder image
            alt="About Us"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
          <h3 className="text-4xl font-bold text-blue-600 mb-2">5,000+</h3>
          <p className="text-xl text-gray-700">Top Destinations</p>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
          <h3 className="text-4xl font-bold text-blue-600 mb-2">3,000+</h3>
          <p className="text-xl text-gray-700">Bookings Completed</p>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
          <h3 className="text-4xl font-bold text-blue-600 mb-2">11,000+</h3>
          <p className="text-xl text-gray-700">Satisfied Clients</p>
        </div>
      </div>
    </div>
  );
}
