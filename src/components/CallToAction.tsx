import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">Ready for Your Next Adventure?</h2>
        <p className="text-xl mb-8">Every journey has a story. Let yours begin with Take My Trip.</p>
        <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
          Book Your Trip Now
        </Link>
      </div>
    </section>
  );
}
