import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function CharacterDetail() {
    const { id } = useParams();
  
    console.log("el id es", id);
  
    const [character, setCharacter] = useState([]);
    const [loading, setLoading] = useState(false);
  
    
  
    useEffect(() => {
        const getCharacters = async () => {
            try {
              setLoading(true);
              const response = await fetch(
                `https://rickandmortyapi.com/api/character/${id}`
              );
              // esto siempre se hace usando fetch
              const data = await response.json();
        
              console.log("data", data);
              setCharacter(data);
              setLoading(false);
            } catch (error) {
              console.log(error);
            }
          };
          getCharacters();
        //   setTimeout(() =>  getCharacters(), 2000);
    }, []);
  
    if (loading) {
      return <h1>Loading...</h1>;
    }
  
    return (
      <div>
  
        <h1>{character.name}</h1>
        <img src={character.image} alt={character.name} />
        <h3>{character.status}</h3>
      </div>
    );
  }
  