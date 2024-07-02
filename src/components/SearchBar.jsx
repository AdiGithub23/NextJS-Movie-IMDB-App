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
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" placeholder="Search Keywords ..." 
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
            />
            <button disabled={!searchKey}>Search</button>
        </form>
    </div>
  )
}
