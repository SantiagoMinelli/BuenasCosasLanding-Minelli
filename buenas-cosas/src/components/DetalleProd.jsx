import prodcutosBuenasCosas from "../productos";
import { useParams } from "react-router-dom";

function DetalleProd() {
    const {id} = useParams()
    const producto = prodcutosBuenasCosas.find(prod=>prod.id===parseInt(id))
    if(!producto){
        return <h2>El producto seleccionado no existe</h2>
    }

    return (
    <div>
        <h2>Detalles del producto</h2>
        <img src={producto.imagen} alt="" />
        <h2>{producto.nombre}</h2>
        <h3>{producto.descripcion}</h3>
        <h2>{producto.precio}</h2>
    </div>
    )
}

export default DetalleProd