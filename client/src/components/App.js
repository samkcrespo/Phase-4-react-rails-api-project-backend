import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import UserHome from "./UserHome";
import VolunteerEvents from "./VolunteerEvents"
import '@fontsource/roboto/400.css';
import EventsContainer from "./EventsContainer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "../theme";
import { CircularProgress } from "@mui/material";

function App() {
  const [user, setUser] = useState(null);
  const [sessionCheck, setSessionCheck] = useState(false);
  const appliedTheme = createTheme(theme);

  require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

  useEffect(() => {
    // auto-login
    handleCheckUser();
  }, []);

  function handleCheckUser() {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user);
        });
      } else {
        response.json().then((err) => console.log(err));
      }
    });
    setSessionCheck(true);
  }

  if (sessionCheck) {
  return (
    <>
      <ThemeProvider theme={appliedTheme} />
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>         
          <Route exact path="/">
            <Home volunteer={user}/>
           
         
          </Route>
        </Switch>
        
        {user ? (
          <Switch>
            <Route path="/events">
              <EventsContainer user={user} setUser={setUser} />
            </Route>
            <Route path="/user_home" >
              <UserHome volunteer={user} />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
          </Switch>
        )}
       
      </main>
    
    </>
  );
} else {
  return (
    <div>
      <ThemeProvider theme={appliedTheme}>
      <NavBar user={user} setUser={setUser} />
      <CircularProgress color="secondary" />
      <p>Loading...</p>

      </ThemeProvider >
    </div>
  );
}
  
}

export default App;
// import React, { useEffect, useState } from "react";
// import { Route, Switch } from "react-router-dom";
// import Login from "./Login";
// import NavBar from "./NavBar";
// import EventsContainer from "./EventsContainer";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);

//   // useEffect(() => {
//   //   fetch("http://localhost:3000/me").then((res) => {
//   //     if (res.ok) {
//   //       res.json().then((user) => {
//   //         setIsAuthenticated(true);
//   //         setUser(user);
//   //       });
//   //     }
//   //   });
//   // }, []);

//   // if (!isAuthenticated)
//   //   return (
//   //     <Login
//   //       error={"please login"}
//   //       setIsAuthenticated={setIsAuthenticated}
//   //       setUser={setUser}
//   //     />
//   //   );

//   return (
//     <div>
//       <NavBar />
//       <Switch>
//         <Route to="/login">
//           <Login />
//         </Route>
//         <Route to="/events">
//           <EventsContainer />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// export default App;
