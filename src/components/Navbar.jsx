import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import LOGO from "../assets/images/logo.svg";
import { useTranslation } from "react-i18next";
import { navBarTextStyle, primaryColor } from "../utils/themes";
import TrackSearch from "./TrackSearch";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { MiddleNavItems, RestNavItems } from "./NavbarItems";
import { useDispatch, useSelector } from "react-redux";
import { changeMenu } from "../redux/tracks_reducer";

export default function Navbar() {
  const { t } = useTranslation();
    const dispatch = useDispatch();
   const data = useSelector(state => state.tracks);

  return (
    <Stack
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      px={{ xs: 1, md: 9 }}
      pb={2}
      py={2}
      position="sticky"
      top={0}
      sx={{
        backgroundColor: "#ffff",
        borderBottom: "1px solid #e0e0e0",
        zIndex: 1,
      }}
    >
      {/* LOGO  */}
      <Stack
        direction="row"
        columnGap={1}
        alignItems="center"
        sx={{ cursor: "pointer" }}
      >
        <Box component="img" src={LOGO} height={50} />
        <Typography fontSize={24} color={primaryColor} sx={navBarTextStyle}>
          {t("bosta")}
        </Typography>
      </Stack>

      <Stack
        display={{ xs: "flex", lg: "none" }}
        flexDirection="row"
        columnGap={2}
        alignItems="center"
      >
        <TrackSearch color={primaryColor} />
        <IconButton
          onClick={() => {
            dispatch(changeMenu());
          }}
        >
          {data.isMenuShown === true ? <ClearIcon /> : <MenuIcon />}
        </IconButton>
      </Stack>

      <MiddleNavItems customDisplay={{ xs: "none", lg: "flex" }} />
      <RestNavItems customDisplay={{ xs: "none", lg: "flex" }} />
    </Stack>
  );
}
