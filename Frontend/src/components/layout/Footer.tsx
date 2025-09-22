// src/components/Footer.tsx
import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import paypal from "../../assets/Paypal.png";
import WesternUnion from "../../assets/Western-union.png";
import visa from "../../assets/visa.png";
import masterCard from "../../assets/mastercard.png";


const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-200 text-gray-800 pt-26 pb-6 md:px-36">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-56">
        {/* Brand / About */}
        <div>
          <div className="flex items-center ">
            <img className="w-9 h-10 object-contain" src="/logo.png" alt="" />
            <span className="ml-2 text-xl font-bold">E-Comm</span>
          </div>
          <p className="text-[12px] leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <p className="text-[12px] mb-3">
            Since the 1500s, when an unknown printer took a galley of type and scrambled.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-[12px]">
            E-Comm, 4578 Marmora Road, <br /> Glasgow D04 89GR
          </p>
        </div>
      </div>

      {/* Links Sections */}
      <div className="container mx-auto px-6 mt-10 grid grid-cols-2 md:grid-cols-4 gap-26 text-sm">
        <div>
          <h3 className="font-semibold mb-3">Information</h3>
          <ul className="space-y-2">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Service</h3>
          <ul className="space-y-2">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">My Account</h3>
          <ul className="space-y-2">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Our Offers</h3>
          <ul className="space-y-2">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
    
      {/* Bottom Bar */}
      <div className="container mx-auto px-6 mt-4 border-t border-white pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p className="text-[#C1C8CE] text-sm">© 2018 Ecommerce theme by www.bisenbaev.com</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <img src={WesternUnion} alt="Western Union" className="h-6"/>
          <img src={masterCard} alt="Mastercard" className="h-6"/>
          <img src={paypal} alt="Paypal" className="h-6"/>
          <img src={visa} alt="Visa" className="h-6"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
