import { Paper } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";

const style = {
  backgroundColor: "#FFFFF7",
  // boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
  width: "350px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  my: "25px",
  ".image": {
    width: "100%",
    // background: "#F7971E",
    // background: "linear-gradient(to right, #FFD200, #F7971E)",
    background: "#2193b0",
    background: " linear-gradient(to right, #6dd5ed, #2193b0)",

    py: "20px",
  },
  ".image img": {
    borderRadius: "50%",
    objectFit: "cover",
  },
};

export default function CardComp({ url, name, content }) {
  return (
    <Box sx={style}>
      <Box className="image">
        <Image width="130px" height="130px" src={url} alt={name} />
      </Box>
      <Box className="center" sx={{ margin: "20px" }}>
        <Typography variant="h3" fontSize="28px" color="blue">
          {name}
        </Typography>
        <Typography variant="h4" fontSize="16px" color="gray">
          Course Instructor
        </Typography>
        <Box sx={{ width: "220px", border: "1px solid orange", mt: "5px" }} />
        <Typography
          variant="body1"
          fontSize="16px"
          color="gray"
          sx={{ my: "20px" }}
        >
          {content}
        </Typography>
      </Box>
    </Box>
  );
}
