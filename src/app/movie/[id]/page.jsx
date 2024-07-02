import Image from "next/image";

export default async function MoviePage({params}) {
    const movieId = params.id;
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
    );
    const movie = await res.json();

  return (
    <div className="w-full p-4">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg object-cover"
          style={{ maxWidth: "100%", height: "auto" }}
          alt={movie.title || movie.name}
        />
        <div className="md:ml-6 flex flex-col items-start">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {movie.title || movie.name}
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            {movie.overview}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span className="font-semibold">Release Date:</span>{" "}
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Votes:</span> {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  )
}
