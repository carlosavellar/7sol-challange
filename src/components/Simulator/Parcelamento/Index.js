import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Parcelamento = ({ parcel }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <ListItem>
      <Button variant="contained" size="medium" onClick={handleOpen}>
        {parcel.parcelas}x
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Parcelas: {parcel.parcelas}x
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Taxa mínima: {parcel.taxa_minima}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Taxa máxima: {parcel.taxa_maxima}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Valor mínimo: {parcel.valor_minimo}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Valor máximo: {parcel.valor_maximo}
          </Typography>
        </Box>
      </Modal>
    </ListItem>
  );
};

export default Parcelamento;
