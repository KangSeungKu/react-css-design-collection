import { Link } from "react-router-dom"
import { navStyle } from "./index.css"

const MainPage = () => {
  return (
    <>
        <h1>MainPage</h1>
        <nav className={navStyle}>
            {/* <Link to='/'>Home</Link> */}
            <Link to='/navs'>Navs</Link>
            <Link to='/banners'>Banners</Link>
            <Link to='/cards'>Cards</Link>
            <Link to='/buttons'>Buttons</Link>
        </nav>
    </>
  )
}

export default MainPage