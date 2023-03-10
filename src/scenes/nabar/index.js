import { Search } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <FlexBetween padding="1rem 6%">
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem,2rem,2.25rem)"
          color="primary"
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        ></Typography>
        {isNonMobileScreens && (
          <FlexBetween borderRadius="9px" gap="3rem" padding="0">
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <IconButton onClick={() => dispatch(setMode())}></IconButton>
        </FlexBetween>
      ) : (
        <IconButton></IconButton>
      )}
    </FlexBetween>
  );
};

export default Navbar;
