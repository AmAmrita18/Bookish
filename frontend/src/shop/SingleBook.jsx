import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const { _id, title, description, author, category, imageURL, readBookURL } =
    useLoaderData();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="pt-36 flex bg-yellow min-h-screen gap-5 w-full flex-row px-4 lg:px-32">
      <img src={imageURL} alt="" className="h-[490px] mb-8 py-2" />
      <div className="flex  flex-col gap-5 px-20">
        <h3 className="font-bold text-blue-extra-dark text-4xl">{title}</h3>
        <p className="text-xl font-semibold text-blue">{author}</p>
        <p className="font-normal text-blue-extra-dark dark:text-blue">
          <p className="text-off-white overflow-y-auto h-[250px] text-base bg-blue-extra-dark p-2 rounded-lg">{description}</p>
        </p>

        <div className="flex justify-between w-full items-center">
          <p className="text-xl font-bold text-blue-extra-dark">{category}</p>
          <div className="text-xl font-bold text-blue-extra-dark">$10.00</div>
        </div>
        <div className="flex justify-evenly">
        <Link
          to={`${readBookURL}`}
          className="bg-blue hover:bg-blue-extra-dark w-[45%] font-semibold text-center text-white py-2 rounded-md"
        >
          <button>Want to read</button>
        </Link>
        <Link
          to={`${readBookURL}`}
          className="bg-blue hover:bg-blue-extra-dark w-[45%] font-semibold text-center text-white py-2  rounded-md"
        >
          <button>Buy Now</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
