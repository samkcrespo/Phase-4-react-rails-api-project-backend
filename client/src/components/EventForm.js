
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import Alert from '@mui/joy/Alert';

function EventForm({handleAddEvent}){
    const [name, setName] = React.useState("");
    const [when, setWhen] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
    


    const handleNewEvents = (e) => {
        e.preventDefault();
    
        fetch("/events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            when,
            location
          }),
        })
          .then((resp) => resp.json())
          .then((newEvent) => {
            handleAddEvent(newEvent);
          });
      };
    
    return(
        <div className="ui segment">
          <Button onClick={handleOpen} startIcon={<EventAvailableIcon />}>Add A New Event</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">

          <form id="form" className="ui form" onSubmit={handleNewEvents}>
                <div className="inline fields">
                    <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <input
                    type="text"
                    name="when"
                    placeholder="When"
                    value={when}
                    onChange={(e) => setWhen(e.target.value)}
                    />
                    <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <Button variant="outlined" type="submit">Add Event</Button>
                </form>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        
            <Alert color="success">All fields are required</Alert>
         
          </Typography>
        </Box>
      </Modal>
               
            </div>
        );
}

export default EventForm;