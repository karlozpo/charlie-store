import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
const { useEffect, useState } = require("react");

export default function ItemList() {
    // const [products, setProducts] = useState([]);
    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(false);

    // const [pagina, setPagina] = useState(0);

    // function nextPage() {
    //     pagina++;
    //     setPagina();
    //     console.log(pagina);
    // }

    const getPersonajes = async () => {
        try {
          setLoading(true);
          const response = await fetch("https://rickandmortyapi.com/api/character", {
            "method": "GET"
        });
          // esto siempre se hace usando fetch
          const data = await response.json();
    
          console.log("data", data);
          setPersonajes(data.results);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };


    useEffect(() => {
       
        getPersonajes();


        // new Promise((resolve, reject) => {
        //     ///
        //     const data = [
        //         {
        //             id: "1",
        //             name: "Oranges",
        //             description: "naranjas ricas",
        //             pictureUrl: "https://s3-us-west-2.amazonaws.com/melingoimages/Images/67174.jpg",
        //             url:"#",
        //             stock: 2
        //         },
        //         {
        //             id: "2",
        //             name: "Apples",
        //             description: "Manzanas pomelos",
        //             pictureUrl: "https://i.ibb.co/SrjjMBf/apple.jpg",
        //             url:"#",
        //             stock: 3
        //         },
        //         {
        //             id: "3",
        //             name: "Sandias",
        //             description: "Patillas jugosas",
        //             pictureUrl: "https://i.ibb.co/x33SYtF/sandia.jpg",
        //             url:"#",
        //             stock: 5
        //         }
        //     ];
        //     setTimeout(() => resolve(data), 3000);
        // })
        //     .then((dataResolve) => {
        //         console.log("data Resolve", dataResolve);
        //         setProducts(dataResolve);
        //     })
        //     .catch((error) => {
        //         console.log("err", error);
        //     });



    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
      }

    return (
        <>
            {/** no va un h1, si no el componente Item, debemos pasarle las props de cada producto*/}
            {personajes.map((cadaProducto) => (
                <div className="col-12 col-md-3" style={{backgroundColor:"white", marginTop:"10px", border:"3px solid #a8c4a9"}}>
                <div className="card-body">
                <h1>{cadaProducto.name}</h1>
                <Link to={`/product-detail/${cadaProducto.id}`}>
                <img src={cadaProducto.image} className="img-fluid" alt={cadaProducto.name}></img>
                </Link>
                <p className="card-text">{cadaProducto.strInstructions}</p>
                 
            <ItemCount inventario={0} />
            <br></br>
            <Link to={cadaProducto.id} className="btn btn-success">Agregar al carro</Link>
                </div>
                </div>
            ))}

          {/* <Link to={"/productos"} className="btn btn-success">Next Page
          <span onClick={()=> {pagina++}}>More</span>
          </Link> */}
        </>
    );
}
