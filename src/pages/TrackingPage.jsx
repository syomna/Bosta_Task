import { Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { DetailsTable } from "../components/DetailsTable";
import ErrorBox from "../components/ErrorBox";
import InfosAndReport from "../components/InfosAndReport";
import TrackingInfo from "../components/TrackingInfo";

export default function TrackingPage() {
  const { t } = useTranslation();

  const { trackData, isLoading, error } = useSelector((state) => state.tracks);

  return Object.keys(trackData).length !== 0 ? (
    <Stack px={{ xs: 1, md: 9 }} py={4}>
      <TrackingInfo trackingData={trackData} />

      <Stack py={3} direction={{ xs: "column", lg: "row" }} columnGap={4}>
        <Stack flex={2} rowGap={3}>
          <Typography fontWeight="bold">{t("shipment_details")}</Typography>
          <DetailsTable />
        </Stack>

        <InfosAndReport />
      </Stack>
    </Stack>
  ) : (
    <Stack alignItems="center" justifyContent="center" height="80vh" px="20%">
      {error !== null ? (
        <ErrorBox />
      ) : isLoading ? (
        <Typography fontSize={14} fontWeight="bold">
          {t("loading")}....
        </Typography>
      ) : (
        <Typography fontSize={14} fontWeight="bold">
          {t("no_shipment_number")}
        </Typography>
      )}
    </Stack>
  );
}
