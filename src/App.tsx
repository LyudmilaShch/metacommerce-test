import './App.css';
import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { PATH } from 'assets/routes/path';
import { TiledNotesList, Note, Notes, Header } from 'components';
import { EditModeProvider, NoteProvider } from 'store';

function App() {
  return (
    <div className="App">
      <EditModeProvider>
        <NoteProvider>
          <div className="headerBlock">
            <Header />
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
