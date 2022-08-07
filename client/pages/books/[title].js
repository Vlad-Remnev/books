import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
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
    <Layout>
      <div className="row">
        {!!book && (
          <div className="col-md-4">
            <div className="card">
              <h3 className="h-blue">{book.title}</h3>
              <img className="w-100" src={`/${book.imageLink}`} />
              <a href={book.link} target="_blank">Link to WIKI</a>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

// export const getServerSideProps = async (context) => {
//   const { title } = context.query;
  
//   const res = await fetch(`${API_URL}/books/${title}`)
//   const data = await res.json();
//   const book = data.item
//   return {
//     props: {
//       book
//     }, // will be passed to the page component as props
//   }
// }

export default BookPage;