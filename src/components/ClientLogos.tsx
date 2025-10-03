import Image from "next/image";

const clientLogos = [
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 1" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 2" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 3" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 4" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 5" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 6" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 7" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 8" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 9" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 10" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 11" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 12" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 13" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 14" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 15" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 16" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 17" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 18" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 1" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 2" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 3" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 4" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 5" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 6" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 7" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 8" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 9" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 10" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 11" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 12" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 13" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 14" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 15" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 16" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 17" },
  { src: "https://dummyimage.com/125x125/000/fff", alt: "Client Logo 18" },
];

const ClientLogos = () => {
  return (
    <div className="client-logos-container">
      <div className="client-logos-scroll">
        {clientLogos.map((logo, index) => (
          <div key={index} className="client-logo">
            <Image src={logo.src} alt={logo.alt} width={125} height={125} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;
