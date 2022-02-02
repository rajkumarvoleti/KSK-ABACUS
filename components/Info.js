import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import img from "../images/groupimg.jpeg";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import IconButton from "@mui/material/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAssistiveListeningSystems,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import PsychologyIcon from "@mui/icons-material/Psychology";
import Image from "next/image";
import confidence from "../images/confidence2.png";
const style = {
  width: "100vw",
  minHeight: "100vh",
  position: "relative",
  ".img": {
    position: "absolute",
    width: "100vw",
    minHeight: "100vh",
    backgroundImage: `url(${img.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: -1,
    // filter: "blur(10px) contrast(50%)",
  },
  ".filter": {
    position: "absolute",
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: "black",
    opacity: "80%",
    zIndex: -1,
  },
  ".data": {
    position: "absolute",
    top: "20%",
  },
  ".dots": {
    position: "absolute",
    display: "flex",
    bottom: "30%",
  },
  ".icons": {
    position: "absolute",
    bottom: "10%",
    display: "flex",
    width: "1000px",
    maxWidth: "90%",
    justifyContent: "space-between",
  },
  color: "white",
};

const headData = [
  {
    index: 1,
    title: "Sharp Listening Skills",
    text: "With the help of flashcard training, one of the mental training techniques, and while solving mental math problems, a child who has been learning Abacus for math can start processing numbers with just one glance. As the training continues, the child hones their observational skills. Similarly, the listening skills also get better as the kids are trained to hear the numbers only once while solving the problems.",
    icon: (
      <FontAwesomeIcon
        size="lg"
        icon={faAssistiveListeningSystems}
        color="#AAA8AA"
      />
    ),
  },
  {
    index: 2,
    title: "Overall Brain Development",
    text: "Abacus learning helps in overall brain development and hence increases power and sharpens overall mental formation. This lays a strong foundation for them to excel in their academics",
    icon: <PsychologyIcon sx={{ fontSize: "40px" }} htmlColor="gray" />,
  },
  {
    index: 3,
    title: "Extended Memory",
    text: " The memory also improves multiple fold as we practice more visualization skills. This training program enhances the photographic memory and it also helps in better reading and writing. By continuous practice, a child’s ability to memorize something they see improves and can even lead to it becoming a photographic memory",
    icon: <FontAwesomeIcon size="lg" icon={faBrain} color="#AAA8AA" />,
  },
  {
    index: 4,
    title: "Confidence Boost",
    text: " It also helps in developing the self esteem and confidence. These are the two most important part of an intellectual personality. With improved mental abilities, these kids get a powerful boost for their self-image and confidence",
    icon: (
      <Image
        src={confidence.src}
        alt="confidence"
        width="40px"
        height="40px"
      ></Image>
    ),
  },
];

const headStyle = {
  width: "90vw",
  maxWidth: "1000px",
  textAlign: "center",
  h1: {
    width: "500px",
    maxWidth: "90vw",
    fontSize: "2.5rem",
    fontWeight: "600",
    p: "20px",
  },
  ".text": {
    width: "90vw",
    maxWidth: "1000px",
    color: "gray",
  },
};

const DotStyle = {
  ".dot": {
    border: "6px solid gray",
    borderRadius: "50%",
    "&:hover": {
      transform: "scale(1.2)",
      cursor: "pointer",
    },
  },
  ".dot.active": {
    transform: "scale(1.2)",
    border: "1px solid orange",
    p: "5px",
  },
  mx: "10px",
};

function Head({ title, text }) {
  return (
    <Box sx={headStyle} className="center">
      <Typography variant="h1">{title}</Typography>
      <Typography className="text" variant="body2">
        {text}
      </Typography>
    </Box>
  );
}

function Dot({ active, setIndex, index, icon }) {
  return (
    <Box sx={DotStyle} onClick={() => setIndex(index)}>
      <Box className={!active ? "dot" : "dot active"}> </Box>
    </Box>
  );
}

function Icon({ active, setIndex, index, icon }) {
  return (
    <Box
      onClick={() => setIndex(index)}
      sx={{
        border: "1px solid orange",
        mt: "20px",
        borderRadius: "50%",
        "&:hover": { transform: "scale(1.2)" },
        transform: active ? "scale(1.2)" : "",
        boxShadow: "orange 0 0 3px 1px;",
      }}
    >
      <IconButton>
        {/* <CalculateOutlinedIcon sx={{ fontSize: "40px" }} htmlColor="gray" /> */}
        {icon}
      </IconButton>
    </Box>
  );
}

export default function Info() {
  const [index, setIndex] = useState(1);
  return (
    <Box sx={style} className="center">
      <Box className="img" />
      <Box className="filter" />
      <Box className="center data">
        {headData.map(
          (data) =>
            data.index === index && (
              <Head key={data.index} title={data.title} text={data.text} />
            )
        )}
      </Box>
      <Box className="dots">
        {headData.map((data) => (
          <Dot
            key={data.index}
            active={data.index === index}
            setIndex={setIndex}
            index={data.index}
          />
        ))}
      </Box>
      <Box className="icons">
        {headData.map((data) => (
          <Icon
            key={data.index}
            active={data.index === index}
            setIndex={setIndex}
            index={data.index}
            icon={data.icon}
          />
        ))}
      </Box>
    </Box>
  );
}
