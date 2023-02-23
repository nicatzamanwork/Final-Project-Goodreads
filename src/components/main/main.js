import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Cards from "./card";

const Main = () => {
  return (
    <div>
      <Box width="300px">
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"></Typography>
          </CardContent>
        </Card>
      </Box>
      <Cards />
    </div>
  );
};

export default Main;
