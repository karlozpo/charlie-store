import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { productsJson } from "./productsJson";

const { useEffect, useState } = require("react");

export default function ItemList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);


    const getProducts = async () => {
        
      try {
          setLoading(true);  
          new Promise((resolve, reject) => {
            setLoading(true);
            setTimeout(() => resolve(productsJson), 3000);
          }).then((data) => setProducts(data))
          .finally(() => {
            setLoading(false);
          });
    
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };


    useEffect(() => {
       
        getProducts();


    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
      }

    return (
        <>
            {/** no va un h1, si no el componente Item, debemos pasarle las props de cada producto*/}
            {products.map((cadaProducto) => (
                <div className="col-12 col-md-3" style={{backgroundColor:"white", marginTop:"10px", border:"3px solid #a8c4a9"}}>
                <div className="card-body">
                <h1>{cadaProducto.name}</h1>
                <Link to={`/product-detail/${cadaProducto.id}`}>
                <img src={cadaProducto.image} className="img-fluid" alt={cadaProducto.name}></img>
                </Link>
                <p className="card-text">{cadaProducto.description}</p>
                 
            <ItemCount inventario={0} />
            <br></br>
            <Link to={cadaProducto.id} className="btn btn-success">Agregar al carro</Link>
                </div>
                </div>
            ))}
        </>
    );
}
