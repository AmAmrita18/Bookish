import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  // delete book
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:8000/book/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book is deleted successfully!");
        // setAllBooks(data);
      });
  };

  return (
    <div className="p-4 md:p-8 lg:p-16 bg-yellow w-full">
      <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        Manage Your Books
      </h2>
      <div className="max-w-screen-xl mx-auto">
        <Table hoverable className="w-full">
          <Table.Head className="bg-blue-extra-dark text-yellow text-base font-semibold">
            <Table.HeadCell>ID</Table.HeadCell>
            <Table.HeadCell>Book Name</Table.HeadCell>
            <Table.HeadCell>Author</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Modify</Table.HeadCell>
          </Table.Head>

          <Table.Body>
            {allBooks.map((book, index) => (
              <Table.Row
                key={book._id}
                className="bg-white dark:border-blue dark:bg-blue-extra-dark"
              >
                <Table.Cell className="font-medium text-blue-extra-dark text-base">
                  {index + 1}
                </Table.Cell>
                <Table.Cell className="font-medium text-blue-extra-dark text-base">
                  {book.title}
                </Table.Cell>
                <Table.Cell className="font-medium text-blue-extra-dark text-base">
                  {book.author}
                </Table.Cell>
                <Table.Cell className="font-medium text-blue-extra-dark text-base">
                  {book.category}
                </Table.Cell>
                <Table.Cell className="font-medium text-blue-extra-dark text-base">
                  $10.00
                </Table.Cell>
                <Table.Cell className="flex gap-2">
                  <Link
                    to={`/admin/dashboard/edit-books/${book._id}`}
                    className="font-bold text-white hover:bg-blue-extra-dark bg-blue rounded-full px-2 py-1 text-sm"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="bg-blue px-3 py-1 font-semibold text-off-white rounded-md hover:bg-red text-sm"
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
