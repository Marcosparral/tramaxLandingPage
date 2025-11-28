import { Link } from "react-router-dom"

export default function SectionPage() {
    return (
        <div>
            <h5 className="text-center mt-20">Esta es la pagina de las secciones</h5>
            <Link to="/" className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-white ">Volver</Link>
        </div>
    )
}