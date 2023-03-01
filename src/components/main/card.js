import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import ReactStars from "react-rating-stars-component";

export default function Cards() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <Card>
      <Card
        variant="outlined"
        orientation="horizontal"
        sx={{
          width: 750,
          gap: 2,
          "&:hover": {
            boxShadow: "md",
            borderColor: "neutral.outlinedHoverBorder",
          },
        }}
      >
        <AspectRatio ratio="1" sx={{ width: 100 }}>
          <img
            src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
            srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <div>
          <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
            Yosemite Park
          </Typography>
          <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
            <Link
              overlay
              underline="none"
              href="#interactive-card"
              sx={{ color: "text.tertiary" }}
            >
              California, USA
            </Link>
          </Typography>
        </div>
        <Chip
          variant="outlined"
          color="primary"
          size="sm"
          sx={{ pointerEvents: "none", ml: 30 }}
        >
          Want to Read
        </Chip>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        />
      </Card>
    </Card>
  );
}
