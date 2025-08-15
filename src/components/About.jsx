import React from "react";

function About() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          About Movie Search
        </h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          Movie Search is a React-based web application that allows you to
          search for movies and get detailed information using the OMDb API. You
          can browse movie posters, check release years, and explore your
          favorite films with ease.
        </p>

        <p className="text-gray-600 leading-relaxed">
          This project is build to practice React concepts like components,
          state management, API fetching, and routing. It's also styled using
          Tailwind CSS for a responsive and modern look.
        </p>
      </div>
    </div>
  );
}

export default About;
