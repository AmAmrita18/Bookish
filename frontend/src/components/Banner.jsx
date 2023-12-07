import BannerCard from "../home/BannerCard";

const Banner = () => {
  return (
    <div className="px-4 bg-yellow flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/*left side */}
        <div className="md:w-1/2  space-y-8 h-full">
            <h2 className=" text-5xl text-blue font-bold leading-snug ">Buy and Sell Your Books <span className="text-blue-extra-dark">for the Best Prices</span></h2>
            <p className="md:w-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
