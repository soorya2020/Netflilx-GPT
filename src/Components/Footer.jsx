import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-20 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 text-sm">
          <a href="#" className="hover:underline">
            FAQ
          </a>
          <a href="#" className="hover:underline">
            Help Center
          </a>
          <a href="#" className="hover:underline">
            Account
          </a>
          <a href="#" className="hover:underline">
            Media Center
          </a>
          <a href="#" className="hover:underline">
            Investor Relations
          </a>
          <a href="#" className="hover:underline">
            Jobs
          </a>
          <a href="#" className="hover:underline">
            Ways to Watch
          </a>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Cookie Preferences
          </a>
          <a href="#" className="hover:underline">
            Corporate Information
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs">
            © {new Date().getFullYear()} Movie-app bingebox — This is a learning
            project.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-3 sm:mt-0">
            <a
              href="https://www.linkedin.com/in/soorya-krishnanunni/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com/soorya2020"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaGithub size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
