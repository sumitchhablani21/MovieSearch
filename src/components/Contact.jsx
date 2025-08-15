import React from 'react'

function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-6">
          Have any questions or feedback about Movie Search? We'd love to hear
          from you!
        </p>

        <form action="/" className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 mb-1 font-bold"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-400"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 mb-1 font-bold"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-400"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 mb-1 font-bold"
            >
              Message
            </label>
            <textarea
              type="text"
              placeholder="Your Message"
              id="message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-400"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-500 text-black font-semibold px-6 py-2 rounded-lg transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact