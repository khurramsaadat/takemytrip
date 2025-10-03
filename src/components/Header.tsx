import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.jpeg"
            alt="Take My Trip Logo"
            width={100}
            height={50}
            className="h-12 w-auto"
          />
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-gray-800 hover:text-blue-600">
            Home
          </Link>
          <Link href="/tours" className="text-gray-800 hover:text-blue-600">
            Tours
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-blue-600">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-blue-600">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
