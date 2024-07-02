'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"

export default function SearchBar() {
    const [searchKey, setSearchKey] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search/${searchKey}`)
    }

  return (
    // <div>
    //     <form onSubmit={handleSubmit}>
    //         <input 
    //             type="text" placeholder="Search Keywords ..." 
    //             value={searchKey}
    //             onChange={(e) => setSearchKey(e.target.value)}
    //         />
    //         <button disabled={!searchKey}>Search</button>
    //     </form>
    // </div>

    <div className="max-w-lg mx-auto mt-3">
      <form onSubmit={handleSubmit} className="flex items-center justify-between">
        <input
          type="text"
          placeholder="Search Keywords ..."
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          className=" border-gray-100 focus:outline-none focus:shadow focus:ring-gray-500 rounded-l-lg px-4 py-2 w-full bg-slate-100 dark:bg-slate-700"
        />
        <button
          type="submit"
          disabled={!searchKey}
          className={`bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-100 px-4 py-2 rounded-r-lg ${!searchKey ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-700'}`}
        >
          Search
        </button>
      </form>
    </div>
  )
}
