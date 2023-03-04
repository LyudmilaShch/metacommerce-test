import * as React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography/Typography';

import binIcon from '../../assets/bin.png';
import { useNotes } from '../../store/NoteContext';
import { StyledButtonIcon } from '../common/styledButtonIcon/StyledButtonIcon';

import s from './RemoveNoteModal.module.css';

export function RemoveNoteModal() {
  const [open, setOpen] = React.useState(false);
  const { onRemoveNote, selectedNote } = useNotes();

  const handleOpen = () => setOpen(!open);
  const onClickHandler = () => {
    onRemoveNote(selectedNote);
    setOpen(!open);
  };

  return (
    <div>
      <StyledButtonIcon src={binIcon} onClickHandler={handleOpen} />
      <Modal open={open} onClose={handleOpen}>
        <Box className={s.modalBox}>
          <CloseIcon onClick={handleOpen} />
          <Typography component="h2">Удалить заметку?</Typography>
          <button type="button" onClick={onClickHandler}>
            Удалить
          </button>
          <button type="button" onClick={handleOpen}>
            Отмена
          </button>
        </Box>
      </Modal>
    </div>
  );
}
