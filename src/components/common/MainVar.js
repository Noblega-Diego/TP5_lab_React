import { Link } from "react-router-dom";
import './MainVar.css'

export function MainVar(){
    return (
    <nav className="main">
        
        <ul className="options">
            <li className="item"><Link to='/products'>Productos</Link></li>
            <li className="item"><Link to='/'>Informacion</Link></li>
        </ul>
    </nav>)
}