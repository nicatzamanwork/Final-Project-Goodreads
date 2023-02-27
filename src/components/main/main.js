import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Cards from "./card";
import CurrentReading from "../assets/currentlyreading.svg";
import Search from "../navbar/searchbar";
import Want from "../assets/wanttoread.jpg";
import { useLocation, useNavigate } from "react-router-dom";
const Main = () => {
  return (
    <div>
      <Box width="450px">
        <Card sx={{ mt: "30px" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              CURRENTLY READING
            </Typography>
            <img src={CurrentReading}></img>
            <Typography gutterBottom variant="h5" component="div">
              What are you reading
            </Typography>
            <Search />
          </CardContent>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              2023 READING CHALLENGE
            </Typography>
            <img src={Want}></img>
            <Typography gutterBottom variant="h5" component="div">
              What are you reading
            </Typography>
          </CardContent>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Want To Read
            </Typography>
            <img src={Want}></img>
            <Typography gutterBottom variant="h5" component="div"></Typography>
          </CardContent>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              BOOKSHELVES
            </Typography>

            <Typography gutterBottom variant="h5" component="div">
              Want to read
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Currently reading
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Read
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Main;
