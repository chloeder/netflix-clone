import { useEffect, useState } from "react";
import MovieBanner from "../../components/ui/MovieBanner";
import { getTopRatedMovies } from "../../libs/api";

interface Movie {
  id: number;
  backdrop_path: string;
}

export default function TopRatedMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getTopRatedMovies()
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  return (
    <div className="">
      <h1 className="font-bold text-xl text-gray-400 mb-2">Top Rated</h1>
      <div className="overflow-x-scroll">
        <div className="flex gap-1">
          {movies &&
            movies.map((movie) => (
              <MovieBanner key={movie.id} imageUrl={movie.backdrop_path} />
            ))}
        </div>
      </div>
    </div>
  );
}
