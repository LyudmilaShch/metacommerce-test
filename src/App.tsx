import './App.css';
import { useState } from 'react';

import { EditModeProvider } from './store/EditModeContext';
import { NoteProvider } from './store/NoteContext';

import { Header } from 'components/header/Header';
import { Notes } from 'components/notes/Notes';

function App() {
  const [isListDisplay, setIsListDisplay] = useState(true);
  const changeListDisplay = (isListDisplayNew: boolean) => {
    setIsListDisplay(isListDisplayNew);
  };

  return (
    <div className="App">
      <EditModeProvider>
        <NoteProvider>
          <div className="headerBlock">
            <Header changeListDisplay={changeListDisplay} isListDisplay={isListDisplay} />
          </div>
          <div className="notesBlock">
            <Notes isListDisplay={isListDisplay} />
          </div>
        </NoteProvider>
      </EditModeProvider>
    </div>
  );
}

export default App;
