
import * as React from 'react';
import Box from '@mui/material/Box';
import {
  Container,
  Typography,
  Paper,
  Button,
  ButtonGroup,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "../theme";
import illustration from "../Assets/illustration.jpg";
import illust from "../Assets/illust.png";
import bluegreen from "../Assets/bluegreenimg.png";
import background from "../Assets/wickedbackground2.png";
import homeimg from "../Assets/home_vn.png";
// import { useHistory } from "react-router-dom";

function Home({ volunteer }) {
  // let history = useHistory();

const appliedTheme = createTheme(theme);
  // ${volunteer.id}


  return (
 
        <div className="homecontainer" style={{backgroundImage:`url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height:800, width:1669}}>
      <ThemeProvider theme={appliedTheme}>
        <Paper>
  
          {/* <Grid item xs={12} alignItems="center"> */}
          <div id="section-3" class="panel">
            <div id="section3-text">
          <img
            src={homeimg}
            alt="reading"
            className="homepageimage"
            id="section3-img"
          />
          <div className="homepagetypog">
            <Typography type="h5" variant="h5" align="center">
            HELP OUT ONCE, HELP OUT ONCE A WEEK. BE PART OF A COMMUNITY OF FELLOW VOLUNTEERS!
            </Typography>
            {volunteer ? (
              <div className="homepagebutton">
                <Button
                   className="homepagebutton"
                  //  onClick={() =>  history.push("/user_home")}
                  variant="contained"
                  // className="b-radius btn btn-lg"
                  color="secondary"
                >
                  View My Events
                </Button>
              </div>
            ) : (
              <div className="homepagebutton">
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                  size="small"
                  align="center"
                >
                  <Button
                    className="homepagebutton"
                    //  onClick={() =>  history.push("/signup")}
                    variant="contained"
                    // className="b-radius btn btn-lg"
                    color="secondary"
                  >
                    Join Today!{" "}
                  </Button>
                  <Button
                    className="homepagebutton"
                    //  onClick={() =>  history.push("/login")}
                    variant="contained"
                    // className="b-radius btn btn-lg"
                    color="primary"
                  >
                    Already registered? Login!
                  </Button>
                </ButtonGroup>
              </div>
            )}
          </div>
          </div>
          </div>
        </Paper>
      </ThemeProvider>
    </div>
   
  );
}



export default Home;

