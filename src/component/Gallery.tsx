import { useEffect, useState } from "react";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Stack, Typography } from "@mui/material";

export default function Gallery() {
  const [timeNow, setTimeNow] = useState(new Date().toLocaleString());
  const [color, setColor] = React.useState("");
  const final = Number(color);
  const colored = fckColor(final);

  function fckColor(item: number) {
    if (item === 1) {
      return "#b71c1c";
    }
    if (item === 2) {
      return "#2979ff";
    } else {
      return "#ffeb3b";
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeNow(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setColor(event.target.value as string);
  };

  return (
    <>
      <Stack
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          sx={{
            backgroundColor: "#9e9e9e",
            width: 700,
            height: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 1,
          }}
        >
          <FormControl sx={{ width: 200 }}>
            <InputLabel
              sx={{ color: colored, fontFamily: "Roboto", borderStyle: "none" }}
            >
              Select Color
            </InputLabel>

            <Select
              sx={{
                color: colored,
                backgroundColor: "#9e9e9e",

                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: "#757575",
                opacity: 0.3,
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={color}
              label="Color"
              onChange={handleChange}
            >
              <MenuItem value={1} sx={{ color: "#b71c1c" }}>
                Red
              </MenuItem>
              <MenuItem value={2} sx={{ color: "#2979ff" }}>
                Blue
              </MenuItem>
              <MenuItem value={3} sx={{ color: "#ffeb3b" }}>
                Yellow
              </MenuItem>
            </Select>
          </FormControl>

          <Typography
            sx={{
              color: colored,
              fontSize: 30,
              fontFamily: "Roboto",
              lineHeight: 10,
            }}
          >
            {timeNow}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}
