"use client";

import { SnackbarProvider } from "notistack";
import React from "react";

export const NotistackProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SnackbarProvider
      maxSnack={5}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      autoHideDuration={3000}
    >
      {children}
    </SnackbarProvider>
  );
};
