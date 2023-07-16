"use client";
import * as React from "react";
import dayjs from "dayjs";
import config from "../../../config";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Grid,
  Slider,
  Stack,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
  Alert,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
// import { LoadingButton } from "@mui/lab";

export default function Form({ setEvents, setOpen }) {
  return (
    <Card
      variant="outlined"
      sx={{ minWidth: 275, maxWidth: 600, mx: "auto", px: 2, py: 1, my: 2 }}
    >
      <CardContent>
        <Grid sx={{mb:3}}>
            <h2>Add a new crisis</h2>
        </Grid>
        <Grid container spacing={4}>
            
        </Grid>
      </CardContent>
    </Card>
  );
}
