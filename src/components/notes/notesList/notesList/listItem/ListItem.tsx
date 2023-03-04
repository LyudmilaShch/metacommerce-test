import * as React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ReactMarkdown from 'react-markdown';

import { noteType } from '../../../Notes';

import s from './ListItem.module.css';

type ListItemComponentType = {
  item: noteType;
  selected: number;
  changeSelectedItem: (newSelected: number) => void;
};

export default function ListItemComponent({
  item,
  selected,
  changeSelectedItem,
}: ListItemComponentType) {
  const onClickHandler = () => {
    changeSelectedItem(item.id);
  };

  const ListItemContainerClassName =
    s.ListItemContainer + (selected === item.id ? ` ${s.selectedItem}` : ' ');

  const stringTime = Intl.DateTimeFormat('ru', {
    hour: 'numeric',
    minute: 'numeric',
  }).format(item.date) || <br />;

  return (
    <ListItemButton
      className={ListItemContainerClassName}
      onClick={onClickHandler}
      selected={selected === item.id}
    >
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={
            <Typography component="span" variant="body2" className={s.primaryText}>
              {item.name}
            </Typography>
          }
          secondary={
            <Typography className={s.secondaryText}>
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
