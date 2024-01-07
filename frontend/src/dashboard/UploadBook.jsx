import { Label, Button, Textarea, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import { IoCloudUpload } from "react-icons/io5";

const UploadBook = () => {
  const bookCategories = [
    "Biography",
    "Classics",
    "Fantasy",
    "Fiction",
    "Historical Fiction",
    "Horror",
    "Mystery",
    "Non Fiction",
    "Romance",
    "Science Fiction",
    "Self Help",
    "Spirituality",
    "Thriller",
    "Young Adult"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );
  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  // handle book submission
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const title = form.title.value;
    const author = form.author.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const description = form.description.value;
    const readBookURL = form.readBookURL.value;

    const bookObj = {
      title,
      author,
      imageURL,
      category,
      description,
      readBookURL,
    };
    console.log(bookObj);

    // send data to DB
    fetch("http://localhost:8000/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book uploaded successfully!!!");
      });
  };

  return (
    <div className="px-8 md:px-8 lg:px-16 md:py-8 pt-14 md:pt-4 bg-yellow w-full ">
      <h2 className="mb-8 text-3xl md:text-4xl lg:text-5xl font-bold text-center flex gap-1 items-center justify-center"><IoCloudUpload />
        Upload a Book
      </h2>
      <form
        onSubmit={handleBookSubmit}
        className="flex flex-col gap-4 max-w-4xl mx-auto"
      >
        <div className="flex flex-wrap md:gap-4 justify-between md:flex-row flex-col">
          <div className="mb-4 md:w-[45%]">
            <Label
              className="text-lg md:text-xl font-bold text-blue-extra-dark"
              htmlFor="title"
              value="Book Title"
              name="title"
            />
            <TextInput
              id="title"
              name="title"
              type="text"
              placeholder="Book name"
              required
            />
          </div>

          <div className="mb-4 md:w-[45%]">
            <Label
              className="text-lg md:text-xl font-bold text-blue-extra-dark"
              htmlFor="author"
              value="Author Name"
              name="author"
            />
            <TextInput
              id="author"
              name="author"
              type="text"
              placeholder="Author name"
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap md:gap-4 justify-between md:flex-row flex-col">
          <div className="mb-4 md:w-[45%]">
            <Label
              className="text-lg md:text-xl font-bold text-blue-extra-dark"
              htmlFor="imageURL"
              value="Book image URL"
              name="imageURL"
            />
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Book image URL"
              required
            />
          </div>

          <div className="mb-4 md:w-[45%]">
            <Label
              className="text-lg md:text-xl font-bold text-blue-extra-dark"
              htmlFor="inputState"
              value="Book Category"
            />
            <Select
              id="inputState"
              name="category"
              
              className="rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <div className="mb-4">
          <Label
            className="text-lg md:text-xl font-bold text-blue-extra-dark"
            htmlFor="description"
            value="Book Description"
          />
          <Textarea
            id="description"
            name="description"
            placeholder="Write your book description here..."
            required
            className="p-2"
            rows={6}
          />
        </div>

        <div className="mb-4">
          <Label
            className="text-lg md:text-xl font-bold text-blue-extra-dark"
            htmlFor="readBookURL"
            value="Book PDF URL"
          />
          <TextInput
            id="readBookURL"
            name="readBookURL"
            type="text"
            placeholder="Book pdf URL"
            required
          />
        </div>

        <Button
          type="submit"
          className="mt-5 border-none md:mb-0 mb-4 text-off-white bg-blue hover:bg-blue-extra-dark"
        >
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;
