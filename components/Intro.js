import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import background from "../images/abacus3.jpg";
import Logo from "../images/logobg3.png";

const style = {
  backgroundImage: `url(${background.src})`,
  height: "100vh",
  width: "100vw",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundColor: "#018793",
  backgroundPositionX: {
    md: "300px",
    sm: "0px",
    xs: "-200px",
  },
  position: "relative",

  display: "flex",
  alignItems: "center",

  ".img": {
    position: "absolute",
    top: "20px",
    left: "20px",
  },

  ".head": {
    width: "50%",
    minWidth: "300px",
    ml: "50px",
    mt: "20px",
    h1: {
      color: "white",
      fontSize: {
        xs: "6rem",
        sm: "8rem",
        md: "10rem",
      },
      lineHeight: 1,
      "@font-face": {
        fontFamily: "Aurella",
        src: "url(/Aurella.ttf)",
      },
      fontFamily: "Aurella",
    },
    zIndex: "2",
    button: {
      mt: "20px",
      fontSize: "1.5rem",
      backgroundColor: "#005354",
      fontFamily: "Calibri",
      width: "300px",
      maxWidth: "70vw",
      zIndex: "2",
    },
  },
};

function handleScroll() {
  window.scroll({
    top: document.documentElement.scrollHeight,
    left: 0,
    behavior: "smooth",
  });
}

export default function Intro() {
  console.log(background.src);
  return (
    <Box sx={style}>
      <Box className="img">
        <Image src={Logo.src} alt="logo" width="100px" height="50px" />
      </Box>
      <Box className="head">
        <Typography component="h1"> We Teach Abacus</Typography>
        <Button onClick={handleScroll} variant="contained">
          Contact US
        </Button>
      </Box>
    </Box>
  );
}
