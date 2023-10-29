import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PhoneIcon from "@mui/icons-material/Phone";
import React, { useEffect, useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Peer from "simple-peer";
import io from "socket.io-client";
import "./style/meet.css";
import NavBar from "./NavBar";
import Slide from "./Carousel";
function Home() {
  return (
    <>
      <NavBar />
      <Slide />
    </>
  );
}

export default Home;
