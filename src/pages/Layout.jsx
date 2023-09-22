import { Box, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { MiddleNavItems, RestNavItems } from "../components/NavbarItems";
import TrackingPage from "./TrackingPage";

export default function Layout() {
  const data = useSelector((state) => state.tracks);
  console.log(data);
  if (data)
    return (
      <Box minHeight="100vh">
        <Navbar />
        {data.isMenuShown === true ? (
          <Stack px={{ xs: 4, md: 9 }} pt={4} rowGap={2}>
            <MiddleNavItems direction="column" rowGap={2} />
            <RestNavItems direction="column" rowGap={2} />
          </Stack>
        ) : (
          <TrackingPage />
        )}
      </Box>
    );
}
