// import React from "react";
// import { NavLink } from "react-router-dom";
// import textlogo from "../Assets/vnlogo.png";

// function NavBar({ user, setUser }) {
//   const linkStyles = {
//     display: "inline-block",
//     width: "120px",
//     padding: "12px",
//     borderRadius: "18px",
//     margin: "6px 6px 6px",
//     background: "#9DBA94",
//     textDecoration: "none",
//     color: "black",
//     fontSize: "14px",
//   };

//   function handleLogout() {
//     fetch("/logout", { method: "DELETE" }).then((r) => {
//       if (r.ok) {
//         setUser(null);
//       }
//     });
//   }

//   return (
//     <div className="navbar">
//       <div className="nav-links">
//         <NavLink to="/" exact className="nav-item">
//           <img src={textlogo} alt="logo" />
//         </NavLink>
//         <NavLink
//           to="/events"
//           exact
//           className="nav-item"
//           style={linkStyles}
//           activeStyle={{
//             background: "lightblue",
//           }}
//         >
//           Find Opportunities
//         </NavLink>

//         {user ? (
//           <button
//             style={linkStyles}
//             className="nav-item"
//             activeStyle={{
//               background: "lightblue",
//             }}
//             onClick={handleLogout}
//           >
//             Logout
//           </button>
//         ) : (
//           <>
//             <NavLink
//               to="/signup"
//               className="nav-item"
//               style={linkStyles}
//               activeStyle={{
//                 background: "lightblue",
//               }}
//             >
//               Sign-Up
//             </NavLink>
//             <NavLink
//               to="/login"
//               className="nav-item"
//               style={linkStyles}
//               activeStyle={{
//                 background: "lightblue",
//               }}
//             >
//               Login
//             </NavLink>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default NavBar;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { NavLink } from "react-router-dom";
import textlogo from "../Assets/vnlogo.png";

export default function NavBar({ user, setUser }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={textlogo} alt="logo" width="180px" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <MenuIcon /> */}
            </IconButton>
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            > */}
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <MenuItem>
              <NavLink to="/">
                <Button
                  onClick={handleCloseNavMenu}
                  className="btn btn-navbar"
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "Roboto",
                    textDecoration: "none",
                  }}
                ></Button>
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/events">
                <Button
                  onClick={handleCloseNavMenu}
                  className="btn btn-navbar"
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "Roboto",
                    textDecoration: "none",
                  }}
                >
                  Find Opportunities
                </Button>
              </NavLink>
            </MenuItem>

            {user ? (
              <MenuItem>
                <NavLink to="/logout" onClick={handleLogout}>
                  <Button
                    onClick={handleCloseNavMenu}
                    className="btn btn-navbar"
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      fontFamily: "Roboto",
                      textDecoration: "none",
                    }}
                  >
                    Logout
                  </Button>
                </NavLink>
              </MenuItem>
            ) : (
              <>
                <MenuItem>
                  <NavLink to="/login">
                    <Button
                      onClick={handleCloseNavMenu}
                      className="btn btn-navbar"
                      sx={{
                        my: 2,
                        color: "white",
                        display: "block",
                        fontFamily: "Roboto",
                        textDecoration: "none",
                      }}
                    >
                      Login
                    </Button>
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/signup">
                    <Button
                      onClick={handleCloseNavMenu}
                      className="btn btn-navbar"
                      sx={{
                        my: 2,
                        color: "white",
                        display: "block",
                        fontFamily: "Roboto",
                        textDecoration: "none",
                      }}
                    >
                      Sign Up
                    </Button>
                  </NavLink>
                </MenuItem>
              </>
            )}
            {/* </Menu> */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="user" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Settings</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
