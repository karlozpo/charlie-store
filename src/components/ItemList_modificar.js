import React from 'react';
import ItemCount from './ItemCount';
const { useEffect, useState } = require("react");

export default function ItemList() {
    // const [products, setProducts] = useState([]);

    const [characters, setCharacter] = useState([]);

    const getCharacterFromApi = async () => {

  
      try {
        // este response siempre nos devuelve un objeto para ejecutar una promesa
        const response = await fetch(
          "https://rickandmortyapi.com/api/character",
          {
            method: "GET"
          }
        );
  
    
        // siempre siempre que usemos fetch SIEMPREEEEEEEEE
        const data = await response.json();
  
        setCharacter(data.results);
      } catch (error) {
        console.log("aca hay un error");
      }
    };



    useEffect(() => {
        getCharacterFromApi();
    }, []);

    return (
        <>
            {/** no va un h1, si no el componente Item, debemos pasarle las props de cada producto*/}
            {characters.map((character) => (
                <div className="col-12 col-md-3 offset-1" style={{backgroundColor:"white", marginTop:"10px"}}>
                <div className="card-body">
                <h1>{character.name}</h1>
                <img src={character.image} className="img-fluid" alt={character.name}></img>
                <p className="card-text">{character.description}</p>
                 
            <ItemCount inventario={character.stock} />
            <br></br>
            <a href={character.url} className="btn btn-success">Agregar al carro</a>
                </div>
                </div>
            ))}
        </>
    );
}
