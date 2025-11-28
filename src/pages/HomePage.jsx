import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <div className="mt-20">
            <h1>
                Bienvenidos Tramax
            </h1>
            <Link to='/services'>
                Redireccion
            </Link>
        </div>
    )
}