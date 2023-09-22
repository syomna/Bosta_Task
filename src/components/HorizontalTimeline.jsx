import { Box, Stack } from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { greyColor } from "../utils/themes";
import { shipmentColor } from "../utils/helpers";

export const HorizontalTimeline = ({ state }) => {
  const isDelivered = state === "delivered";
  const color = shipmentColor(state);
  const Icon = ({ iconColor = color, hasBorder, children }) => {
    return (
      <Box
        height={40}
        width={140}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: iconColor,
          borderRadius: "50%",
          border: hasBorder ? "2px solid #eeeeee" : "",
        }}
      >
        {children}
      </Box>
    );
  };

  const Line = ({ lineColor = color }) => (
    <Box
      height={8}
      width="100%"
      sx={{
        backgroundColor: lineColor,
      }}
    />
  );
  return (
    <Stack px={{ xs: 2, md: 4 }} pt={3} direction="row" alignItems="center">
      <CheckCircleIcon sx={{ color: color }} />

      <Line />
      <CheckCircleIcon sx={{ color: color }} />

      <Line />
      {isDelivered ? (
        <CheckCircleIcon sx={{ color: color }} />
      ) : (
        <Icon>
          <LocalShippingIcon sx={{ color: "#ffff" }} />
        </Icon>
      )}

      <Line lineColor={!isDelivered ? "#eeeeee" : color} />
      {isDelivered ? (
        <CheckCircleIcon sx={{ color: color }} />
      ) : (
        <Icon iconColor={!isDelivered ? "#ffff" : color} hasBorder>
          <ReceiptIcon sx={{ color: !isDelivered ? greyColor : "#ffff" }} />
        </Icon>
      )}
    </Stack>
  );
};
