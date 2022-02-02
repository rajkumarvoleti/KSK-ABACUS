import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Logo from "../images/logobg3.png";
import CallIcon from "@mui/icons-material/Call";

const style = {
  width: "100vw",
  backgroundColor: "blue",
  display: "grid",
  gridTemplateColumns: "repeat(6,1fr)",
  p: "20px",
  rowGap: "20px",
  gridTemplateRows: {
    xs: "1fr 1fr",
    md: "1fr",
  },
  color: "white",
  ".edgeGrid": {
    gridColumn: {
      xs: "span 3",
      md: "span 1",
    },
    gridRowStart: {
      xs: "2",
      md: "1",
    },
  },
  ".centerGrid": {
    gridColumn: {
      xs: "1/-1",
      md: "span 4",
    },
    gridRowStart: {
      xs: "1",
      md: "1",
    },
  },
};

export default function Footer() {
  return (
    <Box id="footer" sx={style}>
      <Box className="center edgeGrid">
        <Image src={Logo.src} alt="logo" width="100px" height="50px" />
      </Box>
      <Box className="center centerGrid">
        <Typography sx={{ fontFamily: "Aurella" }} fontSize="38px">
          Get In Touch
        </Typography>
        <Box sx={{ border: "1px solid orange", width: "280px" }} />
      </Box>
      <Box className="center edgeGrid" sx={{ flexDirection: "row" }}>
        <CallIcon />
        <Typography sx={{ pl: "10px" }}>9393136305</Typography>
      </Box>
    </Box>
  );
}
