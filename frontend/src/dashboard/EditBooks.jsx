import { useLoaderData} from "react-router-dom";
import { Label, Button, Textarea, Select, TextInput } from "flowbite-react";
import { useState } from "react";

const EditBooks = () => {
  // const { id } = useParams();
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

    const bookObj = {
      title,
      author,
      imageURL,
      category,
      description,
      readBookURL,
    };
    // console.log(bookObj);

    //update book data
    fetch()
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update the book data</h2>
      <form
        onSubmit={handleUpdate}
        className="flex flex-col flex-wrap gap-4 lg:w-[1180px]"
      >
        {/*first row*/}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="title" value="Book Title" name="title" />
            </div>
            <TextInput
              id="title"
              name="title"
              type="text"
              placeholder="Book name"
              required
              defaultValue={title}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="author" value="Author Name" name="author" />
            </div>
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
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label
                htmlFor="imageURL"
                value="Book image URL"
                name="imageURL"
                
              />
            </div>
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
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              id="inputState"
              name="category"
              className="w-full rounded "
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
          <div className="mb-2 block">
            <Label htmlFor="description" value="Book Description" />
          </div>
          <Textarea
            id="description"
            name="description"
            placeholder="Write your book description here..."
            required
            className="w-full"
            rows={6}
            defaultValue={description}
          />

          {/*pdf link*/}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
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
        <Button type="submit" className="mt-5 border text-off-white bg-blue">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
