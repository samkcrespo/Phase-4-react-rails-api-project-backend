import * as React from 'react';
import EditEvent from "./EditEvent";
import DeleteIcon from '@mui/icons-material/Delete';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';


function EventDetails({ event, volunteer, onEventDelete, handleUpdateEvent }) {
  //const [eventId, setEventId] = useState("");
  //const [volunteerId, setVolunteerId] =useState("");
  const [isEditing, setIsEditing] = React.useState(false);


  // function addSignupEvent() {
  //   console.log("addSignupEvent called");
  // }

  function handleVolSignUp() {
    const signupData = {
      event_id: event.id,
    };
    fetch("/signups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupData),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
    console.log(`fetch console log ${event.id}, ${volunteer.id}`);
  }

  function handleDeleteClick() {
    fetch(`events${event.id}`, {
      method: "DELETE",
    });
    onEventDelete(event.id);
  }

  return (
    
      <Card variant="outlined" sx={{ maxWidth: '320px', display: 'inline-grid',
      width: '20rem', padding: '20px',
      margin: '20px', }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography level="h2" fontSize="md" sx={{ alignSelf: 'flex-start' }}>
        {event.name}
        </Typography>
        <Typography level="body2">Date: {event.date}</Typography>
      </Box>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?crop=entropy&auto=format&fit=crop&w=3270"
          alt=""
        />
      </AspectRatio>
      <Box>
        <div>
          <Typography level="body3">Location:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
           {event.location}
          </Typography>
        </div>
      {/* <h2>{event.name}</h2>
      <h5>Date: {event.date}</h5>
      <h6>Location: {event.location}</h6> */}
      <Stack direction="column" spacing={1}>
      {volunteer ? <Button variant="outlined" startIcon={<VolunteerActivismIcon />} >
        Volunteer
      </Button> : null}
      <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleDeleteClick}>
        Delete Event
      </Button>
      <Button variant="outlined" startIcon={<EditIcon />} onClick={() => setIsEditing((isEditing) => !isEditing)}>
     
       Edit Event Date
      </Button>
      {isEditing ? (
       
        <EditEvent event={event} handleUpdateEvent={handleUpdateEvent}/>
         ) : (
        <p></p>
      )}
    </Stack>
    </Box>
    </Card>
 
 


      
  );
}

export default EventDetails;
