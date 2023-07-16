"use client";
import * as React from "react";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import UserHeader from "./components/User/Header";
import Calender from "./components/Calender";
import Form from "./components/Form";

export default function Home() {
  const [events, setEvents] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  return (
    <Container>
      <Grid>
        <UserHeader />
      </Grid>
      <Grid>
        {!open && <Calender events={events} setOpen={setOpen} />}

        {open && <Form setEvents={setEvents} setOpen={setOpen} />}
      </Grid>
    </Container>
  );
}
