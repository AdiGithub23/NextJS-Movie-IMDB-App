import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    // <div className="flex dark:bg-grey-100 bg-amber-500 p-3 justify-center gap-20">

    //     <NavbarItem title='Trending' param='fetchTrending'/>
    //     <NavbarItem title='Top Rated' param='fetchTopRated' />
        
    // </div>

    <nav className="flex justify-center gap-20 p-3 bg-amber-500 dark:bg-gray-800 shadow-md">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </nav>
  )
}
