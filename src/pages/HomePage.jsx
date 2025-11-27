import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <div>
            <h1>
                Bienvenidos Tramax
            </h1>
            <Link to='/section'>
                Redireccion
            </Link>
        </div>
    )
}