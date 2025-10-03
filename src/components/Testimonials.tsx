import Image from "next/image";

const testimonials = [
  {
    name: "Ahmed S",
    location: "UAE",
    quote: "The Hatta mountain tour was spectacular. Our guide showed us hidden wadis, traditional ruins, and even helped us try local sweets. A must-do with Take My Trip!",
    avatar: "/images/WhatsApp Image 2025-10-01 at 7.33.32 PM.jpeg", // Placeholder image
  },
  {
    name: "Maria G",
    location: "USA",
    quote: "Booked quad bikes for my son’s birthday—he still talks about it! The bikes were new, the guides prioritized safety, and we got amazing desert photos.",
    avatar: "/images/WhatsApp Image 2025-10-01 at 7.33.32 PM (1).jpeg", // Placeholder image
  },
  {
    name: "Lisa M",
    location: "UK",
    quote: "Take My Trip took our family on the most magical overnight desert safari—roasting marshmallows by campfire under a million stars. Unforgettable!",
    avatar: "/images/WhatsApp Image 2025-10-01 at 7.33.33 PM.jpeg", // Placeholder image
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Hear From Our Happy Explorers</h2>
        <p className="text-xl text-gray-600 mb-12">Every tour we offer is a chapter in your travel story. Make it unforgettable.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col items-center">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={80}
                height={80}
                className="rounded-full mb-4 object-cover"
              />
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
              <p className="text-gray-500 text-sm">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
