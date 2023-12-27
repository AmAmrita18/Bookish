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

  //delete book
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:8000/book/${id}`, {
      method:"DELETE",
    }).then(res => res.json()).then(data => {alert("Book is deleted successfully!")
    // setAllBooks(data);
  })
  }
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>
      <Table hoverable className="lg:w-[1180px]">
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Book name</Table.HeadCell>
          <Table.HeadCell>Author</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>

        {allBooks.map((book, index) => (
          <Table.Body className="divide-y" key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {book.title}
              </Table.Cell>
              <Table.Cell>{book.author}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>$10.00</Table.Cell>
              <Table.Cell>
                <Link
                  to={`/admin/dashboard/edit-books/${book._id}`}
                  className="font-medium text-blue hover:underline dark:text-blue-dark mr-5"
                >
                  Edit
                </Link>
                <button onClick={() => handleDelete(book._id)} className="bg-blue px-4 py-1 font-semibold text-off-white rounded-sm hover:bg-blue-extra-dark">Delete</button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
};

export default ManageBooks;
