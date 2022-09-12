import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "../theme";

import VolunteerEvents from "./VolunteerEvents";
 
    function UserHome ({volunteer}) {
    const [volunteerEvents, setVolunteerEvents] = React.useState([]);
    const [signups, setSignups] = React.useState([]);
    const appliedTheme = createTheme(theme);
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
        <Box>
        
          <Box     sx={{
            display: 'justify-content',
            margin: '25px', padding: '25px'
            
          }}>
          <Paper>
          {volunteerEvents.map((event) => {
            return (
              <>
              <VolunteerEvents
                event={event}
                key={event.id}
                volunteer={volunteer}
                handleDeleteSignup={handleDeleteSignup}
              />
              </>
            );
          })} 
          </Paper>
          </Box>
         
        </Box> 
    );
}
export default UserHome;