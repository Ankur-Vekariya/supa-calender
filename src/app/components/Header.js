"use client";

import * as React from "react";
import { Avatar, Grid, Button, Switch, FormControlLabel } from "@mui/material";
// import Logo from "@/component/Logo";
import { usePathname, useRouter } from "next/navigation";

export default function Header({ switchTheme }) {
  const pathaname = usePathname();
  const router = useRouter();
  return (
    <Grid sx={{ p: 2 }}>
      <Grid
        container
        direction="row"
        justifyContent={pathaname === "/" ? "center" : "space-between"}
        alignItems="center"
      >
        <Grid item lg={6}>
          {/* <Logo /> */}
        </Grid>
        <Grid
          xs={6}
          rowSpacing={1}
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
        >
          <FormControlLabel
            control={
              <Switch onChange={switchTheme} name="gilad" color="primary" />
            }
            label="night mode"
          />
          <Avatar
            className="ponter"
            onClick={() => router.push("/profile")}
            sx={{ width: 56, height: 56, backgroundColor: "#1F6FFF" }}
          >
            G
          </Avatar>
        </Grid>
      </Grid>
    </Grid>
  );
}
