import React, {useState} from 'react';
import DataContainer from './components/DataContainer';
import './App.css';

const App = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <DataContainer page = {page} setPage = {setPage}/>
    </div>
  );
}

export default App;
