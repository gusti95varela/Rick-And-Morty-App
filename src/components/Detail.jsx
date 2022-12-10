import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from '../components/styles/Detail.module.css'

export default function Detail() {
    const { detailId } = useParams()
    const [character, setCharacter] = useState()
    const navigate = useNavigate()

    console.log(character)
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);

    return (
        <div className={styles.Detail}>
            {character ? (
                <div>
                    <div >
                        <h1>{character.name}</h1>
                        <h5>{character.status}</h5>
                        <h5>{character.species}</h5>
                        <h5>{character.gender}</h5>
                        <h5>{character.origin?.name}</h5>
                    </div>
                    <div>
                        <img src={character.image} alt={character.name} />
                    </div>
                </div>
            ) : (""
            )}
            <button onClick={() => navigate('/home')}>Volver</button>
        </div>
    )
}