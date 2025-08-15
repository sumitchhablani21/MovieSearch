import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(stored);
  }, []);

  const removeFromWatchlist = (id) => {
    const updated = watchlist.filter((movie) => movie.imdbID !== id);
    setWatchlist(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  if (watchlist.length === 0) {
    return (
      <p className="text-center my-10 text-lg font-semibold">
        Your Watchlist is empty!
      </p>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">My Watchlist</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {watchlist.map((movie) => (
          <div
            key={movie.imdbID}
            className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300 flex flex-col"
          >
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
              alt={movie.Title}
              className=" w-full"
            />

            <div className="flex flex-col flex-grow p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-1 truncate">
                {movie.Title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Released: {movie.Year}
              </p>

              <div className="mt-auto space-y-2">
                {/* Go to Details */}
                <button
                  type="button"
                  className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                  onClick={() => navigate(`/movie/${movie.imdbID}`)}
                >
                  Details
                </button>

                {/* Remove Button */}
                <button
                  type="button"
                  className="w-full bg-red-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
                  onClick={() => removeFromWatchlist(movie.imdbID)}
                >
                  Remove from Watchlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Watchlist;
