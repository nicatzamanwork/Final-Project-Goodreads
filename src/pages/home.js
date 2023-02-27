import React from "react";
import Grid from "@mui/material/Grid";
import Main from "../components/main/main";
import Cards from "../components/main/card";
export default function Home() {
  return (
    <div>
      <Grid container spacing={4} sx={{ mt: 5 }}>
        <Grid item xs={6} md={3}>
          <Main />
        </Grid>
        <Grid item xs={6} md={3} ml={15}>
          <Cards />
        </Grid>
      </Grid>
    </div>
  );
}
