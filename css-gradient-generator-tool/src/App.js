import React from 'react'
import Display from './Display';
import Form from './Form'

function App() {
  return (
    <div className="App">
      <h1>CSS Gradient Code Generator</h1>
      <div className='gradient-gen'>
        <Display />
        <Form />
      </div>
    </div>
  );
}

export default App;
