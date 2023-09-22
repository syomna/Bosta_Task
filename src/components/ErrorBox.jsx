import { Box, Typography } from '@mui/material';
import React from 'react'
import WarningIcon from "@mui/icons-material/Warning";
import { useTranslation } from 'react-i18next';


export default function ErrorBox() {
      const { t } = useTranslation();

  return (
    <Box
      p={2}
      sx={{
        backgroundColor: "#fef3f2",
        border: "1px solid #fccbc8",
        borderRadius: 1,
      }}
      display="flex"
      flexDirection="row"
      columnGap={2}
    >
      <WarningIcon sx={{ color: "#b42419" }} />
      <Typography fontSize={14} fontWeight="bold">
        {t("error")}
      </Typography>
    </Box>
  );
}
