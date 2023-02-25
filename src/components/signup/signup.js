import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
export default function Signup() {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { mt: 5, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={4} sx={{ mt: 5 }}>
          <Grid item xs={6} md={3}>
            <h1>Sign Up</h1>
            <TextField
              label="Size"
              id="outlined-size-normal"
              defaultValue="Normal"
            />
            <TextField
              label="Size"
              id="outlined-size-normal"
              defaultValue="Normal"
            />
            <TextField
              label="Size"
              id="outlined-size-normal"
              defaultValue="Normal"
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
