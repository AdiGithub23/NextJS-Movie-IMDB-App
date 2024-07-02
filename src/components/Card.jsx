import Image from "next/image";
import Link from "next/link";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

export default function Card({result}) {
  return (
    // <div className="group cursor-pointer sm:hover:shadow-slate-800
    //     sm:shadow-md rounded-lg sm:border-slate-700 sm:m-2
    //     transition-shadow duration-900">
    //     <Link href={`/movie/${result.id}`}>
    //         <Image src={`https://image.tmdb.org/t/p/original/${
    //                 result.backdrop_path || result.poster_path
    //             }`}
    //             width={500} height={300}
    //             className='sm:rounded-t-lg sm:rounded-b-lg '
    //         />

    //         <div>
    //             <h2 className="text-lg font-bold ">{result.title || result.name}</h2>
    //             <p className="line-clamp-2 text-md">{result.overview}</p>
    //             <p className="flex gap-2 items-center">
    //                 {result.release_date}
    //                 <BsFillHandThumbsUpFill className="mr-1 ml-3 h-4"/>
    //                 {result.vote_count}
    //             </p>
                
    //         </div>
    //     </Link>
    //     {/* card */}
    // </div>

    <div className="group cursor-pointer rounded-lg sm:hover:shadow-lg sm:border-gray-700 sm:m-2 transition-transform duration-500 ease-in-out transform hover:scale-105">
      <Link href={`/movie/${result.id}`}>
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              result.backdrop_path || result.poster_path
            }`}
            width={500}
            height={300}
            className="rounded-t-lg object-cover"
            alt={result.title || result.name}
          />
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {result.title || result.name}
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
              {result.overview}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
              {result.release_date ? (
                <span className="mr-2">{new Date(result.release_date).getFullYear()}</span>
              ) : null}
              <BsFillHandThumbsUpFill className="h-4 w-4 text-yellow-500" />
              <span>{result.vote_count}</span>
            </p>
          </div>
      </Link>
    </div>

  )
}

