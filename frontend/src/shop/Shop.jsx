import { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
const Shop = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState();

  const handleSearch = () => {
    fetch(`http://localhost:8000/all-books?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data)
        console.log(data)
      });

  }
  useEffect(() => {
    fetch("http://localhost:8000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="px-4 md:px-8 pt-28 pb-[1rem] lg:px-32 bg-yellow">
      <div className="flex w-full flex-col md:flex-row justify-between items-center py-4 ">
        <div className="md:w-1/2 space-y-10">
          <h2 className=" lg:text-5xl md:text-4xl text-3xl text-blue-extra-dark font-bold leading-snug ">
            Explore Our <span className="text-blue">Book</span> Collections
          </h2>
          <h4 className="md:text-2xl font-bold text-xl text-blue-extra-dark italic">
            &#10077; Your Next Chapter Begins Here! &#10078;
          </h4>
          <p className="md:text-base text-sm text-blue-extra-dark mb-8">
            Embark on a literary
            journey through our diverse book collection, where every page holds
            a new adventure waiting to unfold. Whether you&apos;re drawn to the
            enchanting realms of fiction, the gripping mysteries that keep you
            on the edge of your seat, the timeless tales of love and romance, or
            the mind-bending narratives of science fiction, our curated
            selection caters to every reader&apos;s taste. Let the
            magic of words transport you to worlds beyond your imagination.
          </p>
          <div className="flex flex-row items-center">
            <input type="text" name="search" id="search" placeholder="search a book by title/author/category" value={search} onChange={(e) => {
              setSearch(e.target.value)
              handleSearch()
            }} className="px-2 h-[40px] w-[270px] bg-off-white hover:brightness-110 rounded-l-lg text-sm font-extralight transition-all ease-in duration-200 outline-none" />
            <button className="bg-blue h-[40px]  px-2 text-center hover:bg-blue-extra-dark rounded-r-lg transition-all ease-in duration-200 text-white" onClick={() => handleSearch()}><IoSearch /></button>
          </div>
        </div>
        <div>
          <img
            src="src/assets/browseCollectionImg.png"
            className="md:h-[380px] md:w-[380px] h-[320px] w-[320px] mx-8 md:mt-0 mt-8"
          />
        </div>
      </div>

      <div className="grid gap-8 my-12 lg:grid-cols-4 grid-cols-2 md:grid-cols-3 ">
        {books.map((book, index) => (
          <Card key={index} className=" bg-off-white transition-all ease-in duration-200 hover:brightness-90 ">

            <Link to={`/book/${book._id}`}>
              <img src={book.imageURL} alt="" className="h-96 mx-auto" />
              <div className="flex flex-col gap-1 px-1">
                <h3 className="font-bold text-ellipsis truncate pt-2 text-blue-extra-dark text-xl">
                  {book.title}
                </h3>
                <p className="text-sm font-semibold text-blue-extra-dark">
                  {book.author}
                </p>
                <p className="font-normal text-blue-extra-dark dark:text-blue">
                  <p className="text-blue line-clamp-4 text-xs">
                    {book.description}
                  </p>
                </p>

                <div className="flex justify-between w-full items-center">
                  <p className="text-sm font-bold text-blue-extra-dark">
                    {book.category}
                  </p>
                  <div className="text-sm font-bold text-blue">$10.00</div>
                </div>
              </div>
            </Link>

            <Link
              to={`${book.readBookURL}`}
              className="bg-blue hover:bg-blue-extra-dark font-semibold text-center text-white py-2  rounded-md"
            >
              <button>Buy Now</button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
