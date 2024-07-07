import PlayingNowMovies from "../features/movieList/PlayingNow";
import PopularMovies from "../features/movieList/Popular";
import TopRatedMovies from "../features/movieList/TopRated";
import UpcomingMovies from "../features/movieList/Upcoming";
import { useStyleStore } from "../store";

export default function HomePage() {
  const toogle = useStyleStore((state) => state.isToogle);

  return (
    <div className={`mt-20 flex flex-col gap-10 ${toogle ? "opacity-70" : ""}`}>
      <PlayingNowMovies />
      <PopularMovies />
      <TopRatedMovies />
      <UpcomingMovies />
    </div>
  );
}
