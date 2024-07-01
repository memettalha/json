import { Link } from "react-router-dom"
import { useStore } from "../store/store";

export default function NavBar(){
    const {favorites} = useStore()

    return(
        <nav>
            <ul>
                <li><Link to="/">AnaSayfa</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to={"/favorites"}>Favorites ({favorites.length})</Link></li>
            </ul>
        </nav>
    )
}