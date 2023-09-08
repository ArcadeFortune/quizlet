import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import Menu from "@mui/material/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuItem from "@mui/material/MenuItem";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ListItemIcon from "@mui/material/ListItemIcon";
import Fade from "@mui/material/Fade";

// https://mui.com/material-ui/react-menu/#context-menu
const useContextMenu = () => {
  const [contextMenu, setContextMenu] = React.useState(null);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX - 2,
            mouseY: event.clientY,
          }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };
  return { contextMenu, setContextMenu, handleContextMenu, handleClose };
};

export const ContextMenu = ({ children }) => {
  const { contextMenu, setContextMenu, handleContextMenu, handleClose } =
    useContextMenu();
  return (
    <div onContextMenu={handleContextMenu} style={{ cursor: "context-menu" }}>
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 150 }}
      >
        <MenuItem
          onClick={() => {
            window.history.back();
            setContextMenu(null);
          }}
        >
          <ListItemIcon>
            <ArrowBackIosIcon fontSize="small" />
          </ListItemIcon>
          Back
        </MenuItem>
        <MenuItem
          onClick={() => {
            window.history.forward();
            setContextMenu(null);
          }}
        >
          <ListItemIcon>
            <ArrowForwardIosIcon fontSize="small" />
          </ListItemIcon>
          Forward
        </MenuItem>
        <MenuItem
          onClick={() => {
            window.location.reload();
            setContextMenu(null);
          }}
        >
          <ListItemIcon>
            <ReplayIcon fontSize="small" />
          </ListItemIcon>
          Reload
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigator.clipboard
              .writeText(window.getSelection().toString())
              .then(() => {
                console.log("copying succesful!");
              });
            setContextMenu(null);
          }}
        >
          <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon>
          Copy
        </MenuItem>
      </Menu>
      {children}
    </div>
  );
}
