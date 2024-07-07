import { useEffect, useState } from "react";
import MovieBanner from "../../components/ui/MovieBanner";
import { getPlayingMovies } from "../../libs/api";

interface Movie {
  id: number;
  backdrop_path: string;
}

export default function PlayingNowMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getPlayingMovies()
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  return (
    <div className="">
      <h1 className="font-bold text-xl text-gray-400 mb-2">Now Playing</h1>
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
