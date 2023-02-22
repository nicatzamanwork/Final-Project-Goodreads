import React from "react";
import Box from "@mui/material/Box";
import COntainer from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#f9f8f4", color: "grey.700" }}>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography sx={{ mb: 4 }}>Nosotros Vosotros</Typography>

        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={6} md={3}>
            <Stack spacing={2}>
              <Typography variant="body1" component="a" href="">
                COMPANY
              </Typography>
            </Stack>
            <Stack spacing={2}>
              <Typography variant="body1" component="a" href="">
                FAQ
              </Typography>
            </Stack>
            <Stack spacing={2}>
              <Typography variant="body1" component="a" href="">
                FAQ
              </Typography>
            </Stack>
            <Stack spacing={2}>
              <Typography variant="body1" component="a" href="">
                FAQ
              </Typography>
            </Stack>
            <Stack spacing={2}>
              <Typography variant="body1" component="a" href="">
                FAQ
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <Stack spacing={2}>
              <Typography variant="body1" component="a" href="">
                WORK WITH US
              </Typography>
            </Stack>
            <Stack spacing={2}>
              <Typography variant="body1" component="a" href="">
                FAQ
              </Typography>
            </Stack>
            <Stack spacing={2}>
              <Typography variant="body1" component="a" href="">
                FAQ
              </Typography>
            </Stack>
            <Stack spacing={2}>
              <Typography variant="body1" component="a" href="">
                FAQ
              </Typography>
            </Stack>
            <Stack spacing={2}>
              <Typography variant="body1" component="a" href="">
                FAQ
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <Stack spacing={2}>
              <Typography variant="body1" component="a" href="">
                CONNECT
              </Typography>
            </Stack>
            <LinkedInIcon />
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </Grid>
          <Grid item xs={6} md={3}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Footer;
