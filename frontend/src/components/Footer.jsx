import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#006083] text-black">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Ecommerce</h2>
          <p className="text-sm">
            Your one-stop destination for the best products. Shop smart, live better.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Customer */}
        <div>
          <h3 className="text-white font-semibold mb-3">Customer</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Login</li>
            <li className="hover:text-white cursor-pointer">Signup</li>
            <li className="hover:text-white cursor-pointer">Orders</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">Email: support@Ecommerce.com</p>
          <p className="text-sm">Phone: +91 9876543210</p>
          <p className="text-sm">Location: India</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Ecommerce. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;