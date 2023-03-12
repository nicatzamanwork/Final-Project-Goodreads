import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import Form from "./form";
const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={(theme.palette.background = "#964B00")}
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Goodreads
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={(theme.palette.background = "#808080")}
      >
        <Typography fontWeight="500" sx={{ mb: "1.5rem" }}>
          WELCOME TO GOODREADS
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
