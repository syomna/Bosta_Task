import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { greyColor, primaryColor } from "../utils/themes";
import problem from "../assets/images/problem.svg";
import { useTranslation } from "react-i18next";

export default function InfosAndReport() {
  const { t } = useTranslation();

  return (
    <Stack flex={1} pt={{ xs: 4, lg: 0 }} rowGap={3}>
      <Typography fontWeight="bold">{t("delivery_address")}</Typography>
      <Box
        py={3}
        sx={{ border: `solid 0.8px ${greyColor}`, borderRadius: 1 }}
        display="flex"
        flexDirection="row"
        columnGap={2}
        px={3}
      >
        <Typography>{t("delivery_address")}</Typography>
      </Box>

      <Box
        py={2}
        sx={{ border: `solid 0.8px ${greyColor}`, borderRadius: 1 }}
        display="flex"
        flexDirection="row"
        alignItems="center"
        columnGap={2}
      >
        <Box component="img" src={problem} height={100} />
        <Stack px={3}>
          <Typography pb={1} fontSize={12} fontWeight="bold">
            {t("problem")}
          </Typography>
          <Button
            sx={{
              backgroundColor: primaryColor,
              borderRadius: 2,
                          "&:hover": { backgroundColor: primaryColor },
            }}
          >
            <Typography
              fontSize={12}
              fontWeight="bold"
              color="#ffff"
              sx={{ textTransform: "capitalize" }}
            >
              {t("report")}
            </Typography>
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}
