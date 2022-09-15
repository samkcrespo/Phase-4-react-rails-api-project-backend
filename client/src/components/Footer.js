import React from "react";
import { Container} from "@mui/material/";
// import { AiFillGithub } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
// import { BiEnvelope } from "react-icons/bi";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer">
    Volunteer Network
     <h3>Copyright © {year}</h3>   
    </div>
  );
}

export default Footer;
