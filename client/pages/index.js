import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
const API_URL = "http://localhost:3001";

const IndexPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/books`)
      .then(res => res.json())
      .then(data => {
        setBooks(data.items)
      })
  }, []);

  return (
    <Layout>
      <div className="row">
        {books.map(book => (
          <div key={book.title} className="col-md-4">
            <div className="card">
              <h3>
                <Link href={`/books/${book.title}`}><a>{book.title}</a></Link>
              </h3>
              <img className="w-100" src={`/${book.imageLink}`} />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
} 

export default IndexPage;