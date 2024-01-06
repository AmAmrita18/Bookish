import { useLoaderData, useParams } from "react-router-dom";
import { Label, Button, Textarea, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import { MdBrowserUpdated } from "react-icons/md";


const EditBooks = () => {
  const { id } = useParams();
  const { title, author, imageURL, description, readBookURL } = useLoaderData();

  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Romance",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );
  const handleChangeSelectedValue = (event) => {
    // console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  //handle book submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const title = form.title.value;
    const author = form.author.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const description = form.description.value;
    const readBookURL = form.readBookURL.value;

    const updateBookObj = {
      title,
      author,
      imageURL,
      category,
      description,
      readBookURL,
    };
    // console.log(bookObj);

    //update book data
    fetch(`http://localhost:8000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data => {
      alert("Book Uploaded Successfully!")
    })
  };

  return (
    <div className="px-8 md:px-8 lg:px-16 md:py-8 pt-14 md:pt-4 bg-yellow w-full ">
      <h2 className="mb-8 text-3xl md:text-4xl lg:text-5xl font-bold text-center flex gap-1 items-center justify-center"><MdBrowserUpdated />
Update the book data</h2>
      <form
        onSubmit={handleUpdate}
        className="flex flex-col gap-4 max-w-4xl mx-auto"
      >
        {/*first row*/}
        <div  className="flex flex-wrap md:gap-4 justify-between md:flex-row flex-col">
          <div className="mb-4 md:w-[45%]">
            <Label htmlFor="title"
            className="text-lg md:text-xl font-bold text-blue-extra-dark" value="Book Title" name="title" />
            <TextInput
              id="title"
              name="title"
              type="text"
              placeholder="Book name"
              required
              defaultValue={title}
            />
          </div>
          <div className="mb-4 md:w-[45%]">
          <Label htmlFor="author" 
          className="text-lg md:text-xl font-bold text-blue-extra-dark" value="Author Name" name="author" />
            <TextInput
              id="author"
              name="author"
              type="text"
              placeholder="Author name"
              required
              defaultValue={author}
            />
          </div>
        </div>

        {/*second row*/}
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
              defaultValue={imageURL}
            />
          </div>

          {/*category*/}
          <div className="mb-4 md:w-[45%]">
          <Label htmlFor="inputState" 
          className="text-lg md:text-xl font-bold text-blue-extra-dark" value="Book Category" />
            <Select
              id="inputState"
              name="category"
              className="rounded "
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

        {/*book description*/}
        <div>
        <Label htmlFor="description" className="text-lg md:text-xl font-bold text-blue-extra-dark" value="Book Description" />
          <Textarea
            id="description"
            name="description"
            placeholder="Write your book description here..."
            required
            className="p-2"
            rows={6}
            defaultValue={description}
          />

          {/*pdf link*/}
          <div className="mb-4">
          <Label htmlFor="email1" 
          className="text-lg md:text-xl font-bold text-blue-extra-dark" value="Your email" />
            <TextInput
              id="readBookURL"
              name="readBookURL"
              type="text"
              placeholder="Book pdf URL"
              required
              defaultValue={readBookURL}
            />
          </div>
        </div>
        <Button type="submit" className="mt-5 border-none md:mb-0 mb-4 text-off-white bg-blue hover:bg-blue-extra-dark">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
