import Link from "next/link";

const Layout = ({children}) => {
  return (
    <div className="container">
      <h2><Link href="/"><a>Books</a></Link></h2>
      {children}
    </div>
  )
}

export default Layout;