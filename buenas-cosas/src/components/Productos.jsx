import prodcutosBuenasCosas from "../productos.js";
import Producto from "./Producto"

function Productos() {
  return (
    <div id="container">
      {prodcutosBuenasCosas.map(prod=>(
        <Producto {...prod}/>
      ))}
    </div>
  )
}

export default Productos