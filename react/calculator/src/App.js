import React from 'react';
import './App.css';
import Calculator from './components/Calculator'

function App() {
  return (
    <div className="App">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-lg-offset-3">
          <Calculator></Calculator>
        </div>
      </div>
    </div>
  );
}

export default App;
