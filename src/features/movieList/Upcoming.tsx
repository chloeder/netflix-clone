import { useEffect, useState } from "react";
import MovieBanner from "../../components/ui/MovieBanner";
import { getUpcomingMovies } from "../../libs/api";

interface Movie {
  id: number;
  backdrop_path: string;
}

export default function UpcomingMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getUpcomingMovies()
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  return (
    <div className="">
      <h1 className="font-bold text-xl text-gray-400 mb-2">Upcoming Movies</h1>
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
