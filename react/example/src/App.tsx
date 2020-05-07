import React from 'react';
import './App.css';

import { Tasks } from './component/Tasks'

const tasks = [
  { title: 'Task 1' },
  { title: 'Task 2' }
]

function App() {
  return (
    <div className="App">
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
