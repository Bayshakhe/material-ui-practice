import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  const navLists = [
    { path: "/", name: "Typography" },
    { path: "/button", name: "Button" },
    { path: "/textfield", name: "Textfield" },
    { path: "/othersFields", name: "OthersFields" },
    { path: "/rating", name: "Rating" },
    { path: "/autoComplete", name: "AutoComplete" },
    { path: "/layout", name: "Layout" },
    { path: "/card", name: "Card" },
    { path: "/accordion", name: "Accordion" },
    { path: "/imageList", name: "ImageList" },
  ];
  return (
    <Box mb={8}>
      <AppBar position="fixed">
        <Toolbar variant="regular">
          {navLists.map((nav) => (
            <Typography
              key={nav.path}
              color="white"
              sx={{ marginRight: "15px" }}
            >
              <Link href={nav.path} color="inherit" underline="hover">{nav.name}</Link>
            </Typography>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
