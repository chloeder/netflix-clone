import { AlignJustify } from "lucide-react";
import netflixLogo from "../../assets/netflix-logo.png";
import { useStyleStore } from "../../store";

export default function NavigationBar() {
  const toogle = useStyleStore();

  return (
    <nav
      className={`${
        toogle.isToogle ? " bg-black" : "backdrop-opacity-10 bg-black/65"
      } fixed top-0 left-0 right-0 px-3 z-50 w-full`}
    >
      <div className="min-h-5 py-1">
        <div className="flex justify-between items-center ">
          <div className="flex items-center">
            <button onClick={toogle.updateToogle}>
              <AlignJustify />
            </button>
            <a href="/" className="text-white text-2xl font-bold">
              <img className="w-28" src={netflixLogo} alt="logo" />
            </a>
          </div>
          <input
            className="bg-gray-900 border p-1 rounded-md text-white w-1/3"
            placeholder="Cari"
            type="text"
          />
        </div>
      </div>
    </nav>
  );
}
