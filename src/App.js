import React from 'react';
import './App.css';
import InputField from  './InputField'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>My ToDo List</h2>
      
      </header>
      <main>
      <InputField></InputField>
      </main>
      <footer>
        <h4>TodoList created by Fofo</h4>
      </footer>
    </div>
  );
}

export default App;
