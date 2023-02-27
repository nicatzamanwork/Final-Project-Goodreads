import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/", {
        email,
        password,
      });
    } catch (e) {
      console.log(e);
    }
  }
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
            <form action="POST">
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <input type="submit" onClick={submit}></input>
            </form>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
