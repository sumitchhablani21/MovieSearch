import React from "react";

function Footer() {
  return (
    <footer className="py-6 bg-gray-200">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm">© {new Date().getFullYear()} Movie Search.</p>

        <p>All rights reserved - Sumit Chhablani Project</p>

        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a
            href="https://github.com/sumitchhablani21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="github.svg" alt="" className="h-7" />
          </a>
          <a
            href="https://www.instagram.com/_sumit19_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="instagram.svg" alt="" className="h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/sumit-chhablani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="linkedin.svg" alt="" className="h-7" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
