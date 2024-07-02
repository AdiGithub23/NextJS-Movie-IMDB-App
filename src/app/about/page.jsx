// export default function About() {
//   return (
//     <div className='max-w-6xl mx-auto p-3 space-y-5'>
//       <h1 className='text-2xl font-medium text-amber-600'>About Us</h1>
//       <p>
//         Welcome to our movie database! 
//         We're a team of movie enthusiasts dedicated to providing a comprehensive, 
//         constantly updated collection of films from around the globe. 
//         Search by title, director, actor, genre, or release date to find your perfect movie.
//       </p>
//       <p>
//         Join our community to discuss films, read reviews, 
//         and stay updated with the latest news and trailers. 
//         Thank you for visiting, and enjoy exploring our site!
//       </p>
//     </div>
//   );
// }

export default function About() {
  return (
    <div className="mt-10 max-w-6xl mx-auto p-6 space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-amber-600">About Us</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Welcome to our movie database! We're a team of movie enthusiasts dedicated to providing a comprehensive, constantly updated collection of films from around the globe. Search by title, director, actor, genre, or release date to find your perfect movie.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Join our community to discuss films, read reviews, and stay updated with the latest news and trailers. Thank you for visiting, and enjoy exploring our site!
      </p>
    </div>
  );
}

