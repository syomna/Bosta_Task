import { Box, Menu, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { greyColor, navBarTextStyle, primaryColor } from "../utils/themes";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { getTrack } from "../redux/tracks_reducer";

export default function TrackSearch({ color = "#00000" }) {
  const { t } = useTranslation();

  const [anchorElTrack, setAnchorElTrack] = useState(null);
  const openTrack = Boolean(anchorElTrack);
  const [prompt, setPrompt] = useState("");
  // const [error , setError] = useState("");

  const dispatch = useDispatch();

  const handleSearch = () => {
    if (prompt) {
      dispatch(getTrack(prompt));
      setPrompt("");
      setAnchorElTrack(null);
    }
  //  if (/^\d{8}$/.test(prompt)) {
  //    // The `prompt` consists of exactly 8 digits
  //    dispatch(getTrack(prompt));
  //    setPrompt("");
  //    setAnchorElTrack(null);
  //  } else {
  //    setError("Invalid input.");
  //  }
  };

  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: greyColor,
      },
      "&.Mui-focused fieldset": {
        borderColor: greyColor,
      },
    },
  };
  return (
    <Stack>
      <Typography
        onClick={(event) => setAnchorElTrack(event.currentTarget)}
        color={openTrack === true ? primaryColor : color}
        sx={navBarTextStyle}
      >
        {t("track")}
      </Typography>
      <Menu
        id="basic-menu"
        anchorEl={anchorElTrack}
        open={openTrack}
        onClose={() => setAnchorElTrack(null)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        style={{ marginTop: 30 }}
      >
        <Stack p={2} gap={2}>
          <Typography fontWeight="bold">{t("track")}</Typography>
          <Stack direction="row">
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder={t("track_number")}
              InputProps={{
                sx: {
                  borderRadius: "0 4px 4px 0",
                },
              }}
              sx={inputStyle}
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            <Box
              width={50}
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                backgroundColor: primaryColor,
                borderRadius: "4px 0 0 4px",
                cursor: "pointer",
              }}
              onClick={handleSearch}
            >
              <SearchIcon sx={{ color: "#ffff", fontSize: 25 }} />
            </Box>
          </Stack>
          {/* {error && <Typography color="red">{error}</Typography>} */}
        </Stack>
      </Menu>
    </Stack>
  );
}
