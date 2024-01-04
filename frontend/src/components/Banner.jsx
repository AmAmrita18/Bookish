
import { useState } from "react";
import BannerCard from "../home/BannerCard";

const Banner = () => {

  const [search, setSearch] = useState();
  const [books, setBooks] = useState();
  const handleSearch = () => {
    fetch(`http://localhost:8000/all-books?search=${search}`)
      .then((res) => res.json())
      .then((data) =>{
        setBooks(data)
        console.log(data)
      } );
      
  }
  return (
    <div className="px-4 min-h-screen lg:px-32 bg-yellow flex  items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 pt-40 pb-20">
        {/*left side */}
        <div className="md:w-1/2 space-y-10 h-full">
          
          <h2 className=" text-5xl text-blue-extra-dark font-bold leading-snug ">Explore, Purchase & Sell <span className="text-blue">Books with Ease</span></h2>
          <h4 className="text-2xl font-bold font-sans text-blue-extra-dark italic">&#10077; Your Next Chapter Begins Here! &#10078;</h4>
          <p className="md:w-4/5">Dive into a curated collection, find your next read, and even share your favorites with fellow book enthusiasts. Join us in celebrating the joy of reading – where every page tells a story, and every book finds a new chapter in someone&apos;s hands.</p>
          <div className="">
            <input type="text" name="search" id="search" placeholder="search a book" value={search} onChange={(e) => setSearch(e.target.value)} className="py-2 px-2 rounded-l-lg outline-none" />
            <button className="bg-blue px-6 py-2 font-medium hover:bg-blue-extra-dark rounded-r-lg transition-all ease-in duration-200 text-white" onClick={() => handleSearch()}>Search</button>
          </div>
        </div>

        {/*right side */}
        <div>
          <BannerCard/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
