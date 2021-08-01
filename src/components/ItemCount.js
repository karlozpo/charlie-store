import { useState, useEffect } from "react"

export default function ItemCount(props) {

    const [contador,setCount]= useState(props.inventario);
     
    useEffect(()=>{
 console.log({contador});
    },[contador])

    return(
<div className="row contador">
<div className="col-2"><button className="btnContador" onClick={()=> setCount(contador-1)}>-</button></div>
<div className="col-8">Unidades = {contador}</div>
<div className="col-2"><button className="btnContador" onClick={()=> setCount(contador+1)}>+</button></div>
</div>
    )
}