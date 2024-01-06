import { useState, useEffect } from "react";
import BookCards from "../components/BookCards";

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/all-books").then(res => res.json()).then(data => setBooks(data.slice(31,42)))
    }, [])
  return (
    <div>
        <BookCards books={books} headline="New Releases 2024"/>
    </div>
  )
}

export default OtherBooks