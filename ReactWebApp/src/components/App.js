import React, { useState } from 'react';
import { TopBar } from './TopBar';
import { Board } from './Board';
import './App.scss';

function App() {
  const [editingMode, setEditingMode] = useState(false);

  const toggleEdit = () => setEditingMode(!editingMode);

  return (
    <div className="App">
      <TopBar toggleEdit={toggleEdit} />

      <Board editing={editingMode} />

      <div className="App-footer"> qw.hu @ 2019 </div>
    </div>
  );
}

export default App;
