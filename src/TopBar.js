import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";

export const TopBar = () => {
	const title = "Welcome to the (totally) fastest langauge learner!";
	const SubTitle = "By ArcadeFortune - Alessio Lama";

	const handleAbout = () => {
		alert("Made by ArcadeFortune - Alessio Lama");
	};
	
  return (
    <AppBar position="static" color="transparent">
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
        <Typography
          variant="h6"
          component="a"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "inherit",
            display: { xs: "none", md: "flex" },
            fontWeight: 700,
          }}
          href="/"
        >
          {title}
        </Typography>

        <Typography
          variant="subtitle"
          component="div"
          sx={{ flexGrow: 100, color: "inherit" }}
        >
          {SubTitle}
        </Typography>
        <Divider />
        <Button
          color="inherit"
          onClick={handleAbout}
        >
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
};
