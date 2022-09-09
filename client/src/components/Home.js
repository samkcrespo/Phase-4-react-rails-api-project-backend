
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import VolunteerEvents from "./VolunteerEvents";

function Home({ volunteer }) {
  const [volunteerEvents, setVolunteerEvents] = React.useState([]);
  const [signups, setSignups] = React.useState([]);
  // ${volunteer.id}
  React.useEffect(() => {
    fetch(`/signups/`)
      .then((r) => r.json())
      .then((signups) => setSignups(signups));
  }, []);

  React.useEffect(() => {
    if (volunteer?.id) {
      fetch(`/volunteers/${volunteer.id}`)
        .then((r) => r.json())
        .then((volunteer) => setVolunteerEvents(volunteer.events));
    }
  }, [volunteer?.id]);

  console.log("volunteer events", volunteerEvents);

  function handleDeleteSignup(id) {
    const updatedsignups = signups.filter((signup) => signup.id !== id);
    setSignups(updatedsignups);
  }

  return (
  
       <Box
 
    >
      <Box     sx={{
        display: 'justify-content',
        margin: '25px', padding: '25px'
        
      }}>
      <Paper>
      <Typography >
        <Typography variant="h4" sx={{textAlign: "center"}} gutterBottom>Are you ready to volunteer? </Typography>

      <Typography variant="h5" gutterBottom >The need for volunteers has never been
        greater, and the time to get involved has never been better. Finding the
        opportunity that best suits your skills, availability, and expectations
        can make all the difference in your experience.
        Volunteering can open
        your mind, your heart, your hands to helping your community and building
        a better future for all of us.
        </Typography>
      <Typography variant="h5" sx={{textAlign: "center"}}>Help out once, help out once a week. Be a
        part of a great community and a tremendous state!

        </Typography>
      </Typography>
      </Paper>
      </Box>
      {volunteerEvents.map((event) => {
        return (
          <>
          <Typography variant="h5" >Your upcoming events</Typography>
          <VolunteerEvents
            event={event}
            key={event.id}
            volunteer={volunteer}
            handleDeleteSignup={handleDeleteSignup}
          />
          </>
        );
      })} 
    </Box> 
   
    
  );
}



export default Home;
