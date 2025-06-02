import { Link } from "react-router-dom";

function Producto(nombre,descripcion,precio,imagen) {
    return (
        <Link to={'/productos/${id}'} className="card">
            <img src={imagen} alt=""/>
            <h2>{nombre}</h2>
            <h3>{descripcion}</h3>
            <h2>{precio}</h2>
        </Link>
    )
}

export default Producto