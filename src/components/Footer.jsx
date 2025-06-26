import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-pink-50 text-gray-800 py-12 mt-16 border-t border-pink-200">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
        {/* Tagline */}
        <div>
          <p className="font-light">
            Everything you need, delivered fast and with care.
          </p>
        </div>

        {/* Location Info */}
        <div>
          <h3 className="text-lg font-semibold text-pink-600 mb-3">Location</h3>
          <p>123 Book Street</p>
          <p>Accra, Ghana</p>
          <p>Email: info@bookstore.com</p>
        </div>

        {/* Partner Info */}
        <div>
          <h3 className="text-lg font-semibold text-pink-600 mb-3">
            Make Money with Us
          </h3>
          <ul className="space-y-1">
            <li>Sell your products</li>
            <li>Become an affiliate</li>
            <li>Shop with us</li>
          </ul>
        </div>

        {/* <div>
          <h3 className="text-lg font-semibold mb-3 text-amber-300">About Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Donations</a></li>
            <li><a href="#" className="hover:underline">Bestsellers</a></li>
            <li><a href="#" className="hover:underline">License Summary</a></li>
             <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div> */}

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-pink-600 mb-3">
            Follow Us
          </h3>
          <div className="flex space-x-4 text-2xl text-pink-500">
            <a href="#" className="hover:text-pink-700 transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-pink-700 transition">
              <FaXTwitter />
            </a>
            <a href="#" className="hover:text-pink-700 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} JE Adverts. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
