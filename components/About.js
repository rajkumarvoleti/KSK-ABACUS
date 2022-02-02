import { Box } from "@mui/system";
import CardComp from "./CardComp";
import photo1 from "../images/suresh.jpeg";
import photo2 from "../images/akhila.jpeg";

const style = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  width: "1000px",
  maxWidth: "90vw",
  mt: "100px",
};

export default function About() {
  return (
    <Box sx={style}>
      <CardComp
        name="Suresh"
        content="As a Teacher I have the great privilege and responsibility to impact our students lives positively, giving them reasons to push forward and motivating them to want to success in life. I will make sure that my students move forward toward their goals and succeed in their lives"
        url={photo1.src}
      />
      <CardComp
        name="Akhila"
        content="The responsibility of rearing good, kind, ethical, responsible students is the biggest responsibility as a teacher. I ensure that my students reach academic succes and bring positive change to the wrold "
        url={photo2.src}
      />
    </Box>
  );
}
