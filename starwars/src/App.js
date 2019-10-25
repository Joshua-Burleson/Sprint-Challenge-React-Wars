import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterContainer from './styles/CharacterContainer';
import CharacterCard from './components/CharacterCard';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?page=${page}`)
      .then(res => {
        console.log(res.data);
        setCharacters(res.data.results);
      })
      .catch(err => console.log(err));
  }, [])
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterContainer>
        {characters && characters.map(char => <CharacterCard character={char} />)}
      </CharacterContainer>
    </div>
  );
}

export default App;
