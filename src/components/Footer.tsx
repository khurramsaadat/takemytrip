import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaCommentDots, FaClock } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-30">
      <div className="container mx-auto px-6 flex flex-wrap justify-between gap-8">
        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h3 className="text-sm md:text-lg font-semibold mb-4">Take My Trip</h3>
          <p className="text-gray-400 text-xs md:text-sm">
            Your adventure architects in the UAE. Curating unforgettable journeys through the heart of the Emirates.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h3 className="text-sm md:text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-400 hover:text-white text-xs md:text-sm">
                Home
              </Link>
            </li>
            <li>
              <Link href="/tours" className="text-gray-400 hover:text-white text-xs md:text-sm">
                Tours
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white text-xs md:text-sm">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white text-xs md:text-sm">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-400 hover:text-white text-xs md:text-sm">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-gray-400 hover:text-white text-xs md:text-sm">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h3 className="text-sm md:text-lg font-semibold mb-4">Contact & Support</h3>
          <ul className="space-y-6 text-xs md:text-sm text-gray-400">
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <span>Office M-35, Warbha Centre, Abubakr Al Siddiqui Road, Deira, Dubai-UAE</span>
            </li>
            <li className="flex items-center">
              <FaPhone className="mr-2" />
              <span>+971506402821</span>
            </li>
            <li className="flex items-center">
              <FaCommentDots className="mr-2" />
              <span>+971505149968</span>
            </li>
            <li className="flex items-center">
              <FaCommentDots className="mr-2" />
              <span>takemytriptourism@gmail.com</span>
            </li>
            <li className="flex items-center">
              <FaClock className="mr-2" />
              <span>08:00-22:00 (Daily)</span>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/5">
          <h3 className="text-sm md:text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaXTwitter size={24} />
            </a>
             <a href="#" className="text-gray-400 hover:text-white">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
      <hr className="border-gray-700 my-4 mt-42" />
      <div className="text-center text-gray-500 mt-4 text-xs md:text-sm">
        &copy; 2025 Take My Trip. All rights reserved. | <Link href="/privacy" className="text-gray-500 hover:text-white">Privacy Policy</Link> | <Link href="/terms" className="text-gray-500 hover:text-white">Terms & Conditions</Link>
      </div>
    </footer>
  );
}
