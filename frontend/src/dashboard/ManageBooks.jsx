import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiInbox } from "react-icons/hi";

import { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";



const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  const { user } = useContext(AuthContext);


  useEffect(() => {
    console.log(user?.email)
    console.log(import.meta.env.VITE_ADMIN_USER)
    fetch("https://bookish-backend-1.onrender.com/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  // delete book

  const handleDelete = (id) => {
    if(user?.email=== import.meta.env.VITE_ADMIN_USER){

      console.log(id);
      fetch(`https://bookish-backend-1.onrender.com/book/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Book is deleted successfully!");
          // setAllBooks(data);
        });
    }
    else{alert("You're not authorized to delete!")}
  };

  return (
    <div className="px-1 lg:pt-0 pb-8  md:pt-4 md:py-8  pt-14  mt-3 lg:px-16 bg-yellow w-full">
      <h2 className="mb-8 text-3xl md:text-4xl lg:text-5xl font-bold text-center flex gap-1 items-center justify-center">
        <HiInbox />
        Manage Your Books
      </h2>
      <div className="max-w-screen-xl overflow-y-auto h-[84vh] relative mx-auto rounded-md ">
        <Table hoverable className="w-full ">
          <Table.Head className="bg-blue-extra-dark sticky top-0 text-yellow text-base font-semibold rounded-t-md">
            <Table.HeadCell className="md:px-[1rem] lg:px[1.5rem] px-[0.3rem]">
              ID
            </Table.HeadCell>
            <Table.HeadCell className="md:px-[0.5rem] lg:px[1.5rem] px-[0.3rem]">
              Book Name
            </Table.HeadCell>
            <Table.HeadCell className="md:px-[0.5rem] lg:px[1.5rem] px-[0.3rem]">
              Author
            </Table.HeadCell>
            <Table.HeadCell className="hidden md:table-cell md:px-[0.5rem] px-[0.3rem] lg:px[1.5rem]">
              Category
            </Table.HeadCell>
            <Table.HeadCell className="hidden md:table-cell md:px-[0.5rem] px-[0.3rem] lg:px[1.5rem]">
              Price
            </Table.HeadCell>
            <Table.HeadCell className="md:px-[0.5rem] px-[0.3rem] lg:px[1.5rem]">
              Modify
            </Table.HeadCell>
          </Table.Head>

          <Table.Body className="rounded-md">
            {allBooks.map((book, index) => (
              <Table.Row
                key={book._id}
                className="!bg-off-white"
              >
                <Table.Cell className=" md:px-[1rem] lg:px[1.5rem] px-[0.3rem] font-medium !text-blue-extra-dark text:xs md:text-sm lg:text-base">
                  {index + 1}
                </Table.Cell>
                <Table.Cell className=" md:px-[0.5rem] lg:px[1.5rem] px-[0.3rem] font-medium !text-blue-extra-dark text:xs md:text-sm lg:text-base">
                  {book.title}
                </Table.Cell>
                <Table.Cell className=" md:px-[0.5rem] lg:px[1.5rem] px-[0.3rem] font-medium !text-blue-extra-dark text:xs md:text-sm lg:text-base">
                  {book.author}
                </Table.Cell>
                <Table.Cell className=" md:px-[0.5rem] lg:px[1.5rem] px-[0.3rem] hidden md:table-cell font-medium !text-blue-extra-dark text:xs md:text-sm lg:text-base">
                  {book.category}
                </Table.Cell>
                <Table.Cell className=" md:px-[0.5rem] lg:px[1.5rem] px-[0.3rem] hidden md:table-cell font-medium !text-blue-extra-dark text:xs md:text-sm lg:text-base">
                  $10.00
                </Table.Cell>
                <Table.Cell className=" md:px-[0.5rem] lg:px[1.5rem] px-[0.3rem] flex gap-2">
                  <Link
                    to={`/admin/dashboard/edit-books/${book._id}`}
                    className="font-bold text-white hover:bg-blue-extra-dark bg-blue rounded-full px-2 py-1 md:text-sm text-xs"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="bg-blue px-3 py-1 font-semibold text-off-white rounded-md hover:bg-red md:text-sm text-xs"
                  >
                    Delete
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ManageBooks;
