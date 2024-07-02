
import Results from "@/components/Results";

// const API_KEY = process.env.API_KEY;

// export default async function Home({searchParams}) {
//   const genre = searchParams.genre || 'fetchTrending';
//   const res = await fetch(
//     `https://api.themoviedb.org/3
//     ${genre==='fetchTopRated'? '/movie/top_rated': '/trending/all/week'}
//     ?api_key=${API_KEY}&language=en-US&page=1`
//   );
//   const data = await res.json();
//   if(!res.ok){
//     throw new Error('Movie Data Fetching Failed')
//   }
//   const results = data.results;
//   console.log(results);

//   return(
//     <div>Home</div>
//   )
// }

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';
  const endpoint =
    genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week';
  
  const url = `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&language=en-US&page=1`;

  let data;
  try {
    const res = await fetch(url);

    // Check if response is OK
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }

    // Attempt to parse JSON
    data = await res.json();
  } catch (error) {
    console.error('Error fetching movie data:', error);
    data = { results: [] }; // Provide a fallback empty results array
  }

  const results = data.results;
  // console.log(results);

  return (
    <div>
      <Results results={results}/>
    </div>
  );
}
