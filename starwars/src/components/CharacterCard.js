import React, {useState, useEffect} from 'react';
import Character from '../styles/Character';
import CharacterList from '../styles/CharacterList';
import axios from 'axios';

const capitalize = str => [...str].includes('/') ? str.toUpperCase() : str[0].toUpperCase().concat(str.slice(1));

const CharacterCard = props => {
    const [species, setSpecies] = useState('');

    useEffect(() => {
        axios.get(props.character.species)
            .then(res => setSpecies(res.data.name))
    },[props.character.species]);

    return (
        <Character>
            <h1>{props.character.name}</h1>
            <h2>Species: {species}</h2>
            <h3>Physical Description</h3>
            <CharacterList>
                <li>Skin Color: {capitalize(props.character.skin_color)}</li>
                <li>Height: {capitalize(props.character.height)}</li>
                <li>Mass: {props.character.mass}</li>
                <li>Hair: {capitalize(props.character.hair_color)}</li>
                <li>Eyes: {capitalize(props.character.eye_color)}</li>
            </CharacterList>
        </Character>
    )
}

export default CharacterCard;