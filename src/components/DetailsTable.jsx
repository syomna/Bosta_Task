import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { getDateAndTime, shipmentColor } from "../utils/helpers";
import { useSelector } from "react-redux";

export const DetailsTable = () => {
  const { t, i18n } = useTranslation();
  const { trackData } = useSelector((state) => state.tracks);

  const headers = [t("hub"), t("date"), t("time"), t("details")];
  const textAlignStyle = {
    textAlign: i18n.language === "ar" ? "right" : "left",
  };
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{ border: "1px solid #e0e0e0" }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#fafafa" }}>
            {headers.map((head) => (
                <TableCell
                    key={head}
                sx={{ fontWeight: "bold", color: "#a2abbf", ...textAlignStyle }}
              >
                {head}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {trackData.TransitEvents.map((event, index) => {
            const {date , time} = getDateAndTime(event.timestamp);
            return (
              <TableRow key={index}>
                <TableCell sx={textAlignStyle}>
                  {event.hub ? t(`${event.hub}`) : t("unknown")}
                </TableCell>
                <TableCell sx={textAlignStyle}>{date}</TableCell>
                <TableCell sx={textAlignStyle}>{time}</TableCell>
                <TableCell sx={textAlignStyle}>
                  <Stack>
                    <Typography fontSize={14}>
                      {event.state === "WAITING_FOR_CUSTOMER_ACTION"
                        ? t(`${event.state.toLowerCase()}.text`)
                        : t(`${event.state.toLowerCase()}`)}
                    </Typography>
                    <Typography
                      fontSize={14}
                      color={shipmentColor(
                        trackData.CurrentStatus.state.toLowerCase()
                      )}
                    >
                      {event.state === "WAITING_FOR_CUSTOMER_ACTION" &&
                      event.exceptionCode
                        ? t(
                            `${event.state.toLowerCase()}.${
                              event.exceptionCode
                            }`
                          )
                        : ""}
                    </Typography>
                  </Stack>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
