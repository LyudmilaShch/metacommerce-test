import * as React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ReactMarkdown from 'react-markdown';

import { useNotes } from '../../../../../store/NoteContext';
import { NoteType } from '../../../Notes';

import s from './ListItem.module.css';

type ListItemComponentType = {
  item: NoteType;
  setEditMode: (value: boolean) => void;
};

export default function ListItemComponent({ item, setEditMode }: ListItemComponentType) {
  const { selectedNote, onSetSelectedNote } = useNotes();
  const onClickHandler = () => {
    onSetSelectedNote(item.id);
    setEditMode(false);
  };

  const ListItemContainerClassName =
    s.ListItemContainer + (selectedNote === item.id ? ` ${s.selectedItem}` : ' ');

  const stringTime = Intl.DateTimeFormat('ru', {
    hour: 'numeric',
    minute: 'numeric',
  }).format(item.date) || <br />;

  return (
    <ListItemButton
      className={ListItemContainerClassName}
      onClick={onClickHandler}
      selected={selectedNote === item.id}
    >
      <ListItem alignItems="flex-start" className={s.listItem}>
        <ListItemText
          primary={
            <Typography component="span" variant="body2" className={s.primaryText}>
              {item.name}
            </Typography>
          }
          secondary={
            <Typography className={s.secondaryText} component="span">
              {stringTime}
              <div className={s.itemText}>
                <ReactMarkdown>{item.text}</ReactMarkdown>
              </div>
            </Typography>
          }
        />
      </ListItem>
    </ListItemButton>
  );
}
