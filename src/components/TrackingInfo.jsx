import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  longDateFormat,
  shipmentColor,
  shortDateFormat,
} from "../utils/helpers";
import { greyColor } from "../utils/themes";
import { HorizontalTimeline } from "./HorizontalTimeline";

export default function TrackingInfo({ trackingData }) {
  const { t, i18n } = useTranslation();
    const trackingState = trackingData.CurrentStatus.state.toLowerCase();
    const lastEvent = trackingData.TransitEvents[trackingData.TransitEvents.length - 1]
        .state;

  const trackData = [
    {
      name: `${t("number")} ${trackingData.TrackingNumber}`,
      value: `${t(`${trackingState}`)}`,
    },
    {
      name: t("last_update"),
      value: `${longDateFormat(
        trackingData.TransitEvents[trackingData.TransitEvents.length - 1]
          .timestamp,
        i18n.language
      )}`,
    },
    {
      name: t("merchant_name"),
      value: `${trackingData.provider}`,
    },
    {
      name: t("delivered_at"),
      value:
        trackingData.PromisedDate === null
          ? t("not_found")
          : `${shortDateFormat(trackingData.PromisedDate, i18n.language)}`,
    },
  ];
  const trackingEvents = [
    t("ticket_created"),
    t("in_transit"),
    t("out_for_delivery"),
    t("package_received"),
  ];

  return (
    <Box py={2} sx={{ border: `solid 0.8px ${greyColor}`, borderRadius: 2 }}>
      <Stack
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        px={{ xs: 2, md: 4 }}
        pb={3}
      >
        {trackData.map((track, index) => (
          <Stack key={track.name} gap={1}>
            <Typography fontSize={14} fontWeight="bold" color="#b6b6b6">
              {track.name}
            </Typography>
            <Typography
              fontSize={14}
              fontWeight="bold"
              color={index === 0 ? shipmentColor(trackingState) : "#00000"}
            >
              {track.value}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <Divider />
      <HorizontalTimeline state={trackingState} />
      <Stack
        px={{ xs: 2, md: 4 }}
        pt={2}
        direction="row"
        justifyContent="space-between"
      >
        {trackingEvents.map((e, index) => (
          <Stack key={e}>
            <Typography
              fontSize={12}
              fontWeight="bold"
              color={
                trackingState !== "delivered" &&
                index === trackingEvents.length - 1
                  ? greyColor
                  : "#00000"
              }
            >
              {e}
            </Typography>
            {index === 2 &&
            (lastEvent === "DELIVERED_TO_SENDER" ||
              lastEvent === "CANCELLED") ? (
              <Typography
                fontSize={12}
                fontWeight="bold"
                color={shipmentColor(trackingState)}
              >
                {t(lastEvent.toLowerCase())}
              </Typography>
            ) : (
              <></>
            )}
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}
