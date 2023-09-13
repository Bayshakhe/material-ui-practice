import { Box, Divider, Grid, Stack } from "@mui/material";

const LayoutPage = () => {
  return (
    <>
      {/* single box */}
      <Box
        component=""
        sx={{
          backgroundColor: "primary.light",
          color: "white",
          height: "100px",
          width: "100px",
          margin: "20px",
          padding: "20px",
          "&:hover": {
            backgroundColor: "primary.main",
          },
        }}
      >
        Hello
      </Box>

      {/* Stack the flex content */}
      <Stack
        direction="row-reverse"
        justifyContent="center"
        spacing={3}
        border={1}
        padding="10px"
        divider={
          <Divider sx={{ color: "red" }} orientation="vertical" flexItem />
        }
      >
        <Box
          component="div"
          sx={{
            backgroundColor: "secondary.light",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "20px",
            "&:hover": {
              backgroundColor: "secondary.main",
            },
          }}
        >
          Hello
        </Box>
        <Box
          component=""
          sx={{
            backgroundColor: "success.light",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "20px",
            "&:hover": {
              backgroundColor: "success.main",
            },
          }}
        >
          Hello
        </Box>
        <Box
          component=""
          sx={{
            backgroundColor: "warning.light",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "20px",
            "&:hover": {
              backgroundColor: "warning.main",
            },
          }}
        >
          Hello
        </Box>
      </Stack>

      {/* Grid */}
      <Grid container border={1} my={5}>
        <Grid item xs={8} sm={6} md={4}
          sx={{
            backgroundColor: "secondary.light",
            color: "white",
            height: "100px",
            padding: "20px",
            "&:hover": {
              backgroundColor: "secondary.main",
            },
          }}
        >
          Hello
        </Grid>
        <Grid item xs={4} sm={2} md={4}
          sx={{
            backgroundColor: "success.light",
            color: "white",
            height: "100px",
            padding: "20px",
            "&:hover": {
              backgroundColor: "success.main",
            },
          }}
        >
          Hello
        </Grid>
        <Grid item xs={4} sm={4} md={4}
          sx={{
            backgroundColor: "warning.light",
            color: "white",
            height: "100px",
            padding: "20px",
            "&:hover": {
              backgroundColor: "warning.main",
            },
          }}
        >
          Hello
        </Grid>
      </Grid>
    </>
  );
};

export default LayoutPage;
