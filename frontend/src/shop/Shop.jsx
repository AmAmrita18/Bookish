import { useEffect, useState } from "react";
import { Card } from "flowbite-react";

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
            <img src={book.imageURL} alt="" className="h-96"/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.title}
            </h5>
            <p className="font-normal text-blue-extra-dark dark:text-blue">
              <p>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
              </p>
            </p>

            <button className="bg-blue hover:bg-blue-extra-dark font-semibold text-white py-2 my-2 rounded">Buy Now</button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
