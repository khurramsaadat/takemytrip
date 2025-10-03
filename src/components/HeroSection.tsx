import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
      <Image
        src="/images/WhatsApp Image 2025-10-01 at 7.33.35 PM.jpeg"
        alt="Desert Safari"
        fill
        sizes="100vw"
        priority
        quality={100}
        className="absolute inset-0 z-0 object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 p-4">
        <h1 className="text-5xl font-bold mb-4">Discover Dubai Like Never Before</h1>
        <p className="text-xl mb-8">From thrilling desert safaris to luxurious dhow cruises</p>
        <Link href="/tours" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
          Explore Our Tours
        </Link>
      </div>
    </section>
  );
}
