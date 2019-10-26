import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterContainer from '../styles/CharacterContainer';
import CharacterCard from './CharacterCard';
import Pagination from './Pagination';

const DataContainer = (props) => {
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
