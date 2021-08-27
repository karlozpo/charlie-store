import { Link } from "react-router-dom";

function Item(props) {
    return (
        // <div style={{ border: "2px red solid", margin: "5px" }}>
        //   <h1>{props.name}</h1>
        //   <h4>$ {props.price}</h4>
        //   <h3>stock {props.stock}</h3>
        //   <button onClick={() => props.onAdd(props)}>agregar</button>
        //   <Link to={`/item/${props.id}`}>ir al detalle</Link>
        // </div>




        <div className="col-12 col-md-3" style={{ backgroundColor: "white", marginTop: "10px", border: "3px solid #a8c4a9" }}>
            <div className="card-body">
                <h1>{props.name}</h1>
                <Link to={`/product-detail/${props.id}`}>
                    <img src={props.image} className="img-fluid" alt={props.name}></img>
                </Link>
                <p className="card-text">{props.description}</p>

                <ItemCount inventario={0} />
                <br></br>
                <Link to={props.id} className="btn btn-success">Agregar al carro</Link>
            </div>
        </div>


    );
}

export default Item;