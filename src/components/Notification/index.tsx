import {Snackbar} from "@mui/material";
import {ReactNode} from "react";

enum Vertical {
  BOTTOM = "bottom",
  TOP = "top"
}

enum Horizontal {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right"
}

type Position = {
  vertical: Vertical;
  horizontal: Horizontal;
}

interface NotificationInterface {
  open: boolean;
  onClose: () => void;
  message: string;
  action?: ReactNode;
  autoHideDuration?: number;
  position?: Position;
  TransitionComponent: any;
}

export default function Notification(props: NotificationInterface) {
  return (
    <Snackbar  {...props} />
  );
}