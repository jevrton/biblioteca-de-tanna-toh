import React from 'react';
import './App.css';

import Button from './Components/Button';

const CriarFicha = () => {
  alert('test')
}

function App() {
  return (
    <div>
      <Button handleClick={CriarFicha} text={"Adicionar Ficha"} type={"success"}/>
    </div>
  );
}

export default App;
