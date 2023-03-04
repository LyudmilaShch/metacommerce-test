import ReactMarkdown from 'react-markdown';

import { noteType } from '../Notes';

import s from './Note.module.css';

type NodePropsType = {
  note?: noteType | null;
};

export function Note({ note = null }: NodePropsType) {
  const stringDate = Intl.DateTimeFormat('ru', {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(note?.date) || <br />;

  return (
    <div className={s.noteContainer}>
      {note ? (
        <>
          <div className={s.noteDate}>{stringDate}</div>
          <h3>{note.name}</h3>
          <ReactMarkdown>{note.text}</ReactMarkdown>
        </>
      ) : (
        <div>Заметок нет</div>
      )}
    </div>
  );
}
