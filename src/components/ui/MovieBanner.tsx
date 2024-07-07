export default function MovieBanner({ imageUrl }: { imageUrl: string }) {
  return (
    <img
      className="w-full h-40 object-cover"
      src={`https://image.tmdb.org/t/p/original/${imageUrl}`}
      alt="logo"
    />
  );
}
