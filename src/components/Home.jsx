import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState("");
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovie = async (title) => {
    if (!title) return;
    try {
      setLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=204e5827&s=${title}`
      );

      const data = await res.json();
      setMovie(data.Search || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie(searchItem);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovie(searchItem);
    setSearchItem("");
  };

  if (loading) {
    return (
      <section className="section loading text-center">
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-12">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Find Your Favorite Movies
        </h1>
        <p className="text-gray-600 mb-6">
          Search from a vast collection of movies and get instant results.
        </p>

        <form action="/" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter movie name..."
            value={searchItem}
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black w-full sm:w-80"
          />

          <button
            type="submit"
            className="mx-4 my-2 bg-blue-400 hover:bg-blue-500 text-black font-semibold px-6 py-2 rounded-lg transition-colors duration-200"
          >
            Search
          </button>
        </form>
      </section>

      {movie.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Search Results
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {movie.map((movie, index) => (
              <div
                key={index}
                className="my-4 bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300 flex flex-col max-w-sm mx-auto"
              >
                <div className="w-full">
                  <img
                    src={
                      movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"
                    }
                    alt={movie.Title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-col flex-grow p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                    {movie.Title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Released: {movie.Year}
                  </p>

                  <div className="mt-auto">
                    <button
                      type="button"
                      className="w-full mt-2 bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                      onClick={() => navigate(`/movie/${movie.imdbID}`)}
                    >
                      Details
                    </button>
                    <button
                      type="button"
                      className="w-full mt-2 bg-yellow-400 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors duration-200"
                      onClick={() => {
                        let stored =
                          JSON.parse(localStorage.getItem("watchlist")) || [];
                        if (!stored.some((m) => m.imdbID === movie.imdbID)) {
                          stored.push(movie);
                          localStorage.setItem(
                            "watchlist",
                            JSON.stringify(stored)
                          );
                          alert(`${movie.Title} added to Watchlist!`);
                        } else {
                          alert(`${movie.Title} is already in your Watchlist!`);
                        }
                      }}
                    >
                      Add to Watchlist
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default Home;
