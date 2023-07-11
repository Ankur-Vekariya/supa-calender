"use client";
import * as React from "react";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import UserHeader from "./components/User/Header";
import Calender from "./components/Calender";

export default function Home() {
  return (
    <Container>
      <Grid>
        <UserHeader />
      </Grid>
      <Grid>
        <Calender />
      </Grid>
    </Container>
  );
}
