import React from "react";

type HorizontalPosition = "left" | "center" | "right";
type VerticalProps = "top" | "center" | "bottom";
type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalProps}`, "center-center">
    | "center";
};
function Toast({ position }: ToastProps) {
  return <div>Toast Notification Position - {position}</div>;
}

export default Toast;
