import React from 'react';
import ItemCount from './ItemCount';
const { useEffect, useState } = require("react");

export default function ItemList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        new Promise((resolve, reject) => {
            ///
            const data = [
                {
                    id: "1",
                    name: "Oranges",
                    description: "naranjas ricas",
                    pictureUrl: "https://s3-us-west-2.amazonaws.com/melingoimages/Images/67174.jpg",
                    url:"#",
                    stock: 2
                },
                {
                    id: "2",
                    name: "Apples",
                    description: "Manzanas pomelos",
                    pictureUrl: "https://i.ibb.co/SrjjMBf/apple.jpg",
                    url:"#",
                    stock: 3
                },
                {
                    id: "3",
                    name: "Sandias",
                    description: "Patillas jugosas",
                    pictureUrl: "https://i.ibb.co/x33SYtF/sandia.jpg",
                    url:"#",
                    stock: 5
                }
            ];
            setTimeout(() => resolve(data), 3000);
        })
            .then((dataResolve) => {
                console.log("data Resolve", dataResolve);
                setProducts(dataResolve);
            })
            .catch((error) => {
                console.log("err", error);
            });
    }, []);

    return (
        <>
            {/** no va un h1, si no el componente Item, debemos pasarle las props de cada producto*/}
            {products.map((cadaProducto) => (
                <div className="col-12 col-md-3 offset-1" style={{backgroundColor:"white", marginTop:"10px"}}>
                <div className="card-body">
                <h1>{cadaProducto.name}</h1>
                <img src={cadaProducto.pictureUrl} className="img-fluid" alt={cadaProducto.name}></img>
                <p className="card-text">{cadaProducto.description}</p>
                 
            <ItemCount inventario={cadaProducto.stock} />
            <br></br>
            <a href={cadaProducto.url} className="btn btn-success">Agregar al carro</a>
                </div>
                </div>
            ))}
        </>
    );
}
