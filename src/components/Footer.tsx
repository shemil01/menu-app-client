import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="border border-gray-500 p-6 rounded-lg">
            <h3 className="text-blue-400 font-semibold mb-2">CONNECT WITH US</h3>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaPhone className="text-yellow-500" /> +91 9567843340
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 mt-1">
              <FaEnvelope className="text-yellow-500" /> info@deepnetsoft.com
            </p>
          </div>

          <div className="border border-gray-500 p-6 rounded-lg flex flex-col items-center">
            <Image width={50    } height={50    } src={'/Logo.png'} alt="logo image" />
            <h2 className="text-lg font-semibold mt-2">
              <span className="text-blue-400">DEEP</span> NET <span className="text-gray-400">SOFT</span>
            </h2>

            <div className="flex space-x-4 mt-2 text-gray-400">
              <span className="cursor-pointer hover:text-white">📎</span>
              <span className="cursor-pointer hover:text-white">📷</span>
              <span className="cursor-pointer hover:text-white">📺</span>
            </div>
          </div>

          <div className="border border-gray-500 p-6 rounded-lg">
            <h3 className="text-blue-400 font-semibold mb-2">FIND US</h3>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaMapMarkerAlt className="text-yellow-500" />
              First floor, Geo Infopark, Infopark EKPY, Kakkanad
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
