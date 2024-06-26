import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotesIcon from "@mui/icons-material/Notes";
import { styled } from "@mui/material";

const MainAppBar = styled(AppBar)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "80px" }}>
      <MainAppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Detail View
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none" } }}
            >
              Your Habits
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home
            </Typography>
          </Box>
          <Button color="inherit">
            <NotesIcon sx={{ display: { md: "flex" } }} />
          </Button>
        </Toolbar>
      </MainAppBar>
    </Box>
  );
}
