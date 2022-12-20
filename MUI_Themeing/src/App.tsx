import "./App.scss";

// React
import { useEffect, useState } from "react";

// Packages
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import { createTheme, Theme, ThemeProvider } from "@mui/material";
import {
  green,
  lightGreen,
  orange,
  purple,
  blue,
  lightBlue,
  red,
} from "@mui/material/colors";
import { Box } from "@mui/system";
import Nav from "./Nav/Nav";

// Themes
const outerTheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: purple[600],
    },
  },
});

const innerTheme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: lightGreen[600],
    },
  },
});

const midTheme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: blue[50],
    },
  },
});

const dangerTheme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: red[300],
    },
  },
});

function App() {
  const [expand, setExpand] = useState<boolean>(false);
  const [className, setClassName] = useState<string>("nav collapsed");
  const [currentTheme, setCurrentTheme] = useState<Theme>(innerTheme);
  const [check1, setCheck1] = useState<boolean>(false);
  const [check2, setCheck2] = useState<boolean>(false);

  const activateTheme1 = () => {
    setCurrentTheme(innerTheme);
  };

  const activateTheme2 = () => {
    setCurrentTheme(outerTheme);
  };

  const activateTheme3 = () => {
    setCurrentTheme(midTheme);
  };

  const activateTheme4 = () => {
    setCurrentTheme(dangerTheme);
  };

  const check1Action = () => {
    setCheck1(!check1);
  };

  const check2Action = () => {
    setCheck2(!check2);
  };

  useEffect(() => {
    console.log("First status : " + expand);
    setClassName(expand ? "nav expanded" : "nav collapsed");
  }, [expand]);

  const toggleSize = () => {
    setExpand(!expand);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <div className="app">
        <div className="themeButtons">
          <Button variant="contained" onClick={activateTheme1}>
            Theme 1
          </Button>
          <Button variant="contained" onClick={activateTheme2}>
            Theme 2
          </Button>
          <Button variant="contained" onClick={activateTheme3}>
            Theme 3
          </Button>
          <Button variant="contained" onClick={activateTheme4}>
            Theme 4
          </Button>
          <Button variant="contained" onClick={toggleSize}>
            Toggle
          </Button>
        </div>
        <div className="CheckBoxes">
          <Checkbox value={check1} onChange={check1Action} />
          <Checkbox value={check2} onChange={check2Action} color="secondary" />
        </div>
        <Box width={300}>
          <div className="Sliders">
            <Slider defaultValue={30} />
            <Slider value={[-100, 200]} color="secondary" />
          </div>
        </Box>
        <Nav state={className} />
      </div>
    </ThemeProvider>
  );
}

export default App;
