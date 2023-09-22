import { Menu, MenuItem, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { navBarTextStyle, primaryColor } from "../utils/themes";
import TrackSearch from "./TrackSearch";

export const MiddleNavItems = ({ customDisplay, direction = "row", rowGap }) => {
  const { t } = useTranslation();
  const navbarItem = [t("home"), t("prices"), t("sales")];

  return (
    <Stack
      display={customDisplay}
      direction={direction}
      columnGap={2}
      rowGap={rowGap}
    >
      {navbarItem.map((e) => {
        return (
          <Typography key={e} sx={navBarTextStyle}>
            {e}
          </Typography>
        );
      })}
    </Stack>
  );
};

export const RestNavItems = ({ customDisplay, direction = "row", rowGap }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = (lan) => {
    i18n.changeLanguage(lan);
    setCurrentLanguage(lan);
    setAnchorEl(null);
  };

  const languages =
    currentLanguage === "en"
      ? ["English", "Arabic"]
      : ["اللغة الإنجليزية", "اللغة العربية"];
  return (
    <Stack
      display={customDisplay}
      direction={direction}
      columnGap={2}
      rowGap={rowGap}
    >
      {/* Search Component */}
      <TrackSearch />
      <Typography sx={navBarTextStyle}>{t("login")}</Typography>
      {/* Change Language */}
      <Typography
        onClick={(event) => setAnchorEl(event.currentTarget)}
        color={primaryColor}
        sx={{
          ...navBarTextStyle,
          textTransform: "uppercase",
        }}
      >
        {currentLanguage}
      </Typography>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        style={{ marginTop: 30 }}
      >
        {languages.map((lan , index) => (
          <MenuItem key={lan} onClick={() => {
            changeLanguage(index === 0 ? 'en' : 'ar');
          }}>
            {lan}
          </MenuItem>
        ))}
      </Menu>
    </Stack>
  );
};
