import { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="px-4 py-28 lg:px-32 bg-yellow">
      <h2 className="text-5xl font-bold text-center">All Books are here</h2>
      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book, index) => (
          <Card key={index}>
            <img src={book.imageURL} alt="" className="h-96" />

            <div className="flex flex-col gap-1 px-1">
              <h3 className="font-bold text-ellipsis truncate text-blue-extra-dark text-xl">
                {book.title}
              </h3>
              <p className="text-sm font-semibold text-blue-extra-dark">{book.author}</p>
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

            <Link to={`${book.readBookURL}`} className="bg-blue hover:bg-blue-extra-dark font-semibold text-center text-white py-2  rounded-md">
              <button >
                Buy Now
              </button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
