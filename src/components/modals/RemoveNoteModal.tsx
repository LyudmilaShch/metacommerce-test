import * as React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography/Typography';
import { useNavigate } from 'react-router-dom';

import s from './RemoveNoteModal.module.css';

import binIcon from 'assets/images/bin.png';
import { PATH } from 'assets/routes/path';
import { StyledButtonIcon } from 'components';
import { useNotes } from 'store';

export function RemoveNoteModal() {
  const [open, setOpen] = React.useState(false);
  const { onRemoveNote, selectedNote, displayType } = useNotes();
  const navigate = useNavigate();
  const handleOpen = () => setOpen(!open);
  const onClickHandler = () => {
    onRemoveNote(selectedNote.id);
    setOpen(!open);
    if (displayType === 'list') {
      navigate(PATH.LIST);
    } else {
      navigate(PATH.TILED_LIST);
    }
  };

  return (
    <div>
      <StyledButtonIcon src={binIcon} onClickHandler={handleOpen} />
      <Modal open={open} onClose={handleOpen}>
        <Box className={s.modalBox}>
          <CloseIcon onClick={handleOpen} className={s.closeIcon} />
          <Typography className={s.modalText}>
            {/* Удалить заметку {selectedNote.name}? */}
          </Typography>
          <div className={s.buttonsContainer}>
            <button type="button" onClick={onClickHandler}>
              Удалить
            </button>
            <button type="button" onClick={handleOpen}>
              Отмена
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
