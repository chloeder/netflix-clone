import { useStyleStore } from "../../store";

export default function Sidebar() {
  const toogle = useStyleStore((state) => state.isToogle);

  return (
    <aside
      className={`backdrop-opacity-10 bg-black fixed top-12 left-0 bottom-0 z-50 transition-transform duration-300 delay-150 ease-in-out ${
        toogle ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-screen w-60 px-3 ">
        <div className="relative">
          <div className="mt-5 pl-2">
            <a href="/" className="text-white block mb-3  ">
              Home
            </a>
            <a href="/" className="text-white block mb-3">
              TV Shows
            </a>
            <a href="/" className="text-white block mb-3">
              Movies
            </a>
            <a href="/" className="text-white block mb-3">
              Recently Added
            </a>
            <a href="/" className="text-white block mb-3">
              My List
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
