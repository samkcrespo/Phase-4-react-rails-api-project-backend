
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "../theme";


function Home({ volunteer }) {

  const appliedTheme = createTheme(theme);
  // ${volunteer.id}


  return (
  
       <Box
 
    >
        <ThemeProvider theme={appliedTheme}> 
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
      </ThemeProvider>
      
    </Box> 
   
   
    
  );
}



export default Home;
