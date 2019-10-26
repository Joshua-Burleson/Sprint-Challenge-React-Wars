import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterContainer from '../styles/CharacterContainer';
import CharacterCard from './CharacterCard';
import Pagination from './Pagination';

const DataContainer = (props) => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState('');
  const [page, setPage] = useState(props.page);

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?page=${page}`)
      .then(res => {
        console.log(res.data);
        setCharacters(res.data.results);
      })
      .catch(err => console.log(err));
  }, [page]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="data-container">
      <Pagination page = {page} setPage = {setPage}/>
      <CharacterContainer>
        {characters && characters.map(char => <CharacterCard character={char} />)}
      </CharacterContainer>
    </div>
  );
}

export default DataContainer;
