"use client";

import React, { useEffect, useState } from "react";
import {
  DialogDescription,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "./dialog";
import { Button } from "./button";

import { getCookies, setCookie } from "cookies-next";

type CookieConsentProps = {
  name: string;
  expires: Date;
  path?: string;
  action?: () => void;
};

const CookieConsent = () => {
  const [openDialog, setOpenDialog] = useState(true);
  const [possibleCookies, setPossibleCookies] = useState([
    {
      name: "cookieConsent",
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    },
    {
      name: "Hetzner",
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      path: "",
    },
  ]);

  useEffect(() => {
    if (getCookies().cookieConsent) {
      setOpenDialog(false);
    }
  }, []);

  const handleCloseDialog = () => {
    setCookie("cookieConsent", "true", {
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    });
    setOpenDialog(false);
  };

  const handleAcceptAllCookies = () => {
    setOpenDialog(false);
  };

  return (
    <Dialog open={openDialog}>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Diese Webseite verwendet Cookies</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="default"
              onClick={() => handleCloseDialog()}>
              Alle Cookies akzeptieren
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              onClick={() => handleCloseDialog()}>
              Nicht einverstanden
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CookieConsent;
