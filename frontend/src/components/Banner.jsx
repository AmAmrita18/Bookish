import BannerCard from "../home/BannerCard";

const Banner = () => {
  return (
    <div className="px-4 lg:px-32 bg-yellow flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 pt-40 pb-12">
        {/*left side */}
        <div className="md:w-1/2  space-y-8 h-full">
            <h2 className=" text-5xl text-blue-extra-dark font-bold leading-snug ">Explore, Purchase & Sell <span className="text-blue">Books with Ease</span></h2>
            <h4 className="text-2xl font-bold font-sans text-blue-extra-dark italic">&#10077; Your Next Chapter Begins Here! &#10078;</h4>
            <p className="md:w-4/5">Dive into a curated collection, find your next read, and even share your favorites with fellow book enthusiasts. Join us in celebrating the joy of reading – where every page tells a story, and every book finds a new chapter in someone's hands.</p>
            <div>
                <input type="text" name="search" id="search" placeholder="search a book" className="py-2 px-2 rounded-sm outline-none"/>
                <button className="bg-blue px-6 py-2 font-medium hover:bg-blue-extra-dark transition-all ease-in duration-200 text-white">Search</button>
            </div>
        </div>

        {/*right side */}
        <div>
          <BannerCard></BannerCard>
        </div>
      </div>
    </div>
  );
};

export default Banner;
