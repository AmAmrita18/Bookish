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
    <div className="md:pt-36 pt-20 flex bg-yellow min-h-screen gap-5 w-full flex-col md:flex-row px-4 lg:px-32">
      <img src={imageURL} alt="" className="md:h-[490px] h-[400px] w-[320px] md:mb-8 mb-0 py-2 mx-auto md:mx-0" />
      <div className="flex  flex-col gap-5 md:px-20 px-1">
        <h3 className="font-bold text-blue-extra-dark md:text-4xl text-3xl">{title}</h3>
        <p className="md:text-xl text-lg font-semibold text-blue">{author}</p>
        <p className="font-normal text-blue-extra-dark dark:text-blue">
          <p className="text-off-white overflow-y-auto h-[250px] md:text-base text-sm bg-blue-extra-dark p-2 rounded-lg">{description}</p>
        </p>

        <div className="flex justify-between w-full items-center">
          <p className="md:text-xl text-lg font-bold text-blue-extra-dark">{category}</p>
          <div className="md:text-xl text-lg font-bold text-blue-extra-dark">$10.00</div>
        </div>
        <div className="flex justify-evenly pb-6 md:pb-0">
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
