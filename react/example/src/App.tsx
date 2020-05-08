import React from 'react';
import './App.css';

import { TaskList } from './component/TaskList'

const tasks = [
  { title: 'Task 1' },
  { title: 'Task 2' }
]

function App() {
  return (
    <div className="App">
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
