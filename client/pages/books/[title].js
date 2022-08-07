import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const API_URL = "http://localhost:3001";

const BookPage = () => {
  const [book, setBook] = useState(null);
  const router = useRouter();
  const { title } = router.query;

  useEffect(() => {
    if (!title) return;
    fetch(`${API_URL}/books/${title}`)
      .then(res => res.json())
      .then(data => {
        setBook(data.item)
      })
  }, [title]);

  return (
    <div className="container">
      <div className="row">
        {!!book && (
          <div className="col-md-4">
            <div className="card">
              <h3>{book.title}</h3>
              <img className="w-100" src={`/${book.imageLink}`} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 

export default BookPage;