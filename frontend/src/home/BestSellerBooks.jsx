import { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://bookish-backend-1.onrender.com/all-books").then(res => res.json()).then(data => setBooks(data.slice(4,17)))
    }, [])
  return (
    
    <div className=''>
        <BookCards books={books} headline="Best Seller Books"/>
    </div>
  )
}

export default BestSellerBooks