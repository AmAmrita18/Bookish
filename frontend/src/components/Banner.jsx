const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/*left side */}
        <div>
            <h2>Buy and sell your Books</h2>
            <p></p>
        </div>

        {/*right side */}
        <div>Right Side</div>
      </div>
    </div>
  );
};

export default Banner;
