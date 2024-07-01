import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex dark:bg-grey-100 bg-amber-500 p-3 justify-center gap-20">

        <NavbarItem title='Trending' param='fetchTrending'/>
        <NavbarItem title='Top Rated' param='fetchTopRated' />
        
    </div>
  )
}
