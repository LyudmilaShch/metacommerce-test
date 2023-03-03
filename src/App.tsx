import './App.css';
import { Header } from './features/header/Header';
import { Notes } from './features/notes/Notes';

function App() {
  return (
    <div className="App">
      <div className="headerBlock">
        <Header />
      </div>
      <div className="notesBlock">
        <Notes />
      </div>
    </div>
  );
}

export default App;
