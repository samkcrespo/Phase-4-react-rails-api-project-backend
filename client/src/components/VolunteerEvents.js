import * as React from 'react';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';


function VolunteerEvents({ event, volunteer, handleDeleteSignup, }) {

    // function handleDelete(){
    //     fetch(`/signups/${id}`,{ 
    //         method: "DELETE",
    //     });
    //     handleDeleteSignup(event.id);
    //   }

    return (
        <div>
       
        <Card variant="outlined" sx={{ maxWidth: '320px', display: 'inline-grid',
      width: '20rem', padding: '20px',
      margin: '20px', }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography level="h2" fontSize="md" sx={{ alignSelf: 'flex-start' }}>
        {event.name}
        </Typography>
        {/* <Typography level="body2">Date: {event.date}</Typography> */}
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
      <Button variant="outlined" startIcon={<EventBusyIcon />}>
       Resign From Event
      </Button>
     
   
    </Stack>
    </Box>
    </Card>
     
  
     
    
        
        </div>
    );
} 

export default VolunteerEvents;