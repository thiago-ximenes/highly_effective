import {Alert, Button, Snackbar, SnackbarContent} from "@mui/material";
import {Fragment, useState} from "react";
import {useColorMode} from "@/contexts/ColorMode/ColorModeProvider";
import Notification from "@/@core/domain/entities/Notification";
import notificationSubject from "@/@core/infra/colorMode/Notifications";
import {COLOR_MODE} from "@/@core/domain/entities/ColorMode";

export default function RootNotifications() {
  const {
    value, key
  } = notificationSubject.getEntry();


  const [openSnackbar, setOpenSnackbar] =
    useState<boolean>(!!key);

  const {message, type} = value || {};

  return (
    <Snackbar open={openSnackbar} onClose={() => setOpenSnackbar(false)}>
      <Alert severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
}