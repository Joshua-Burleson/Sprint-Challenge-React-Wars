import React, {useState, useEffect} from 'react';
import Character from '../styles/Character';
import CharacterList from '../styles/CharacterList';
import axios from 'axios';

const CharacterCard = props => {
    const [species, setSpecies] = useState('');

    useEffect(() => {
        axios.get(props.character.species)
            .then(res => setSpecies(res.data.name))
    },[props.character.species]);

    return (
        <Character>
            <h2>{props.character.name}</h2>
            <h2>Species: {species}</h2>
            <h3>Physical Description</h3>
            <CharacterList>
                <li>Skin Color: {props.character.skin_color}</li>
                <li>Height: {props.character.height}</li>
                <li>Mass: {props.character.mass}</li>
                <li>Hair: {props.character.hair_color}</li>
                <li>Eyes: {props.character.eye_color}</li>
            </CharacterList>
        </Character>
    )
}

export default CharacterCard;