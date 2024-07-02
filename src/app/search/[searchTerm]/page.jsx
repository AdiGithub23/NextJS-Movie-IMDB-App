import Results from "@/components/Results";

export default async function SearchPage({params}) {
    const searchTerm = params.searchTerm;
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
      );
    const data = await res.json();
    const results = data.results;

  return (
    // <div>
    //   {results && results.length === 0 ? (
    //     <h1 className="text-center pt-5">No Results Found</h1>
    //   ) : (
    //     <Results results={results} />
    //   )}
    // </div>

    <div className="w-full p-4 ">
      {results && results.length === 0 ? (
        <h1 className="text-center pt-5 text-2xl font-bold text-gray-700 dark:text-white">
          No Results Found
        </h1>
      ) : (
        <Results results={results} />
      )}
    </div>
  )
}
