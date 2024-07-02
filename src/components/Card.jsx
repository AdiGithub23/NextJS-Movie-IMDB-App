import Image from "next/image";
import Link from "next/link";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

export default function Card({result}) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-800
        sm:shadow-md rounded-lg sm:border-slate-700 sm:m-2
        transition-shadow duration-900">
        <Link href={`/movie/${result.id}`}>
            <Image src={`https://image.tmdb.org/t/p/original/${
                    result.backdrop_path || result.poster_path
                }`}
                width={500} height={300}
                className='sm:rounded-t-lg sm:rounded-b-lg '
            />

            <div>
                <h2 className="text-lg font-bold ">{result.title || result.name}</h2>
                <p className="line-clamp-2 text-md">{result.overview}</p>
                <p className="flex gap-2 items-center">
                    {result.release_date}
                    <BsFillHandThumbsUpFill className="mr-1 ml-3 h-4"/>
                    {result.vote_count}
                </p>
                
            </div>
        </Link>
        {/* card */}
    </div>
  )
}

