import './App.css';
import React, { useState } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Note } from './components/notes/note/Note';
import { EditModeProvider } from './store/EditModeContext';
import { NoteProvider } from './store/NoteContext';

import { PATH } from 'assets/routes/path';
import { Header } from 'components/header/Header';
import { Notes } from 'components/notes/Notes';
import { TiledNotesList } from 'components/notes/notesList/tiledNotesList/TiledNotesList';

function App() {
  const [isListDisplay, setIsListDisplay] = useState(true);

  return (
    <div className="App">
      <EditModeProvider>
        <NoteProvider>
          <div className="headerBlock">
            <Header isListDisplay={isListDisplay} />
          </div>
          <div className="notesBlock">
            <Routes>
              <Route path="/" element={<Notes />} />
              <Route path={PATH.LIST} element={<Notes />} />
              <Route path={PATH.TILED_LIST} element={<TiledNotesList />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path={PATH.NOTE} element={<Note />} />
            </Routes>
          </div>
        </NoteProvider>
      </EditModeProvider>
    </div>
  );
}

export default App;
