"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      {/* <Link className={ `hover:text-grey-700 hover:font-bold 
            ${ genre === param ? 'underline underline-offset-8 decoration-grey-500 rounded-lg' : '' }` }
            href={`/?genre=${param}`}> */}
      <Link
        href={`/?genre=${param}`}
        className={`block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-gray-500 rounded-lg"
            : ""
        }`}
      >
        {title}
      </Link>
    </div>
  );
}
