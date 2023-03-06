import ReactMarkdown from 'react-markdown';

import { EditNote } from './editNote';
import s from './Note.module.css';

import { useEditMode, useNotes } from 'store';

export function Note() {
  const { editMode, onSetEditMode } = useEditMode();
  const { selectedNote } = useNotes();

  const stringDate = Intl.DateTimeFormat('ru', {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(selectedNote?.date) || <br />;

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <div className={s.noteContainer}>
      {editMode ? (
        <EditNote />
      ) : (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div className={s.noteContainer} onClick={() => onSetEditMode(true)}>
          {selectedNote ? (
            <div>
              <div className={s.noteDate}>{stringDate}</div>
              <h3>{selectedNote.name}</h3>
              <ReactMarkdown>{selectedNote.text}</ReactMarkdown>
            </div>
          ) : (
            <div>Заметок нет</div>
          )}
        </div>
      )}
    </div>
  );
}
