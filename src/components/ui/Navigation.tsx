export default function Navigation() {
  return (
    <nav className="bg-blue-700">
      <div className="min-h-5 px-3">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="text-white text-2xl font-bold">
            <img src="" alt="" />
          </a>
          <ul className="flex">
            <li>
              <a href="/" className="text-white px-4">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-white px-4">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white px-4">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
