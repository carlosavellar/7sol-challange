import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';

import { convertStringToHTML } from './../../../utils/stringConversion';

const parser = new DOMParser();
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
export default function Kit({ kitItem }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <ListItem>
      <Button variant="contained" size="medium" onClick={handleOpen}>
        {kitItem.titulo}
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 140 }} image={kitItem.url} title={kitItem.titulo} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {kitItem.titulo}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {kitItem.valor}
              </Typography>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </ListItem>
  );
}
