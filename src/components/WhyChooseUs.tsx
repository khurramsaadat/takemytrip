export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Take My Trip?</h2>
        <p className="text-xl text-gray-600 mb-12">Every Journey Has a Story. Let Yours Begin with Us.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Expert Guided Tours</h3>
            <p className="text-gray-600">Explore the desert's wonders with expert guidance and fascinating narratives.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Family-Friendly Activities</h3>
            <p className="text-gray-600">Enjoyable experiences suitable for all ages, creating unforgettable family memories.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Comfortable Transport</h3>
            <p className="text-gray-600">Comfortable transport ensures a relaxing journey, prioritizing passenger ease and satisfaction.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
