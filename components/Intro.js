import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import background from "../images/abacus3.jpg";

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

  display: "flex",
  alignItems: "center",

  ".head": {
    width: "50%",
    minWidth: "300px",
    ml: "50px",
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

export default function Intro() {
  console.log(background.src);
  return (
    <Box sx={style}>
      <Box className="head">
        <Typography component="h1"> We Teach Abacus</Typography>
        <Button variant="contained">Contact Us</Button>
      </Box>
    </Box>
  );
}
