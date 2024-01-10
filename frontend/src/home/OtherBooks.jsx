import { useState, useEffect } from "react";
import BookCards from "../components/BookCards";

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://bookish-backend-1.onrender.com/all-books").then(res => res.json()).then(data => setBooks(data.slice(30,41)))
    }, [])
  return (
    <div>
        <BookCards books={books} headline="New Releases 2024"/>
    </div>
  )
}

export default OtherBooks