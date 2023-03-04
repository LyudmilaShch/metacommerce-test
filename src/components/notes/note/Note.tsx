import ReactMarkdown from 'react-markdown';

import { NoteType } from '../Notes';

import s from './Note.module.css';

type NodePropsType = {
  note?: NoteType | null;
  setEditMode: (value: boolean) => void;
};

export function Note({ note = null, setEditMode }: NodePropsType) {
  const stringDate = Intl.DateTimeFormat('ru', {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(note?.date) || <br />;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className={s.noteContainer} onClick={() => setEditMode(true)}>
      {note ? (
        <div>
          <div className={s.noteDate}>{stringDate}</div>
          <h3>{note.name}</h3>
          <ReactMarkdown>{note.text}</ReactMarkdown>
        </div>
      ) : (
        <div>Заметок нет</div>
      )}
    </div>
  );
}
