import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DrawerCloseButton } from "../../styles/appbar";
import { lighten } from "polished";
import { Colors } from "../../styles/theme";
import { useUIContext } from "../../context/UI";
import { Link } from "react-router-dom";

const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;

export default function AppDrawer() {
  const { drawerOpen, setDrawerOpen } = useUIContext();

  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon
            sx={{
              fontSize: "2.5rem",
              color: lighten(0.09, Colors.secondary),
            }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>
        <List>
          <ListItemButton onClick={() => setDrawerOpen(false)}>
            <Link
              to="/"
              style={{ textDecoration: "none", color: Colors.white }}
            >
              <ListItemText>Home</ListItemText>
            </Link>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton onClick={() => setDrawerOpen(false)}>
            <Link
              to="/categories"
              style={{ textDecoration: "none", color: Colors.white }}
            >
              <ListItemText>Categories</ListItemText>
            </Link>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton onClick={() => setDrawerOpen(false)}>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: Colors.white }}
            >
              <ListItemText>Products</ListItemText>
            </Link>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton onClick={() => setDrawerOpen(false)}>
            <Link
              to="/about_us"
              style={{ textDecoration: "none", color: Colors.white }}
            >
              <ListItemText>About Us</ListItemText>
            </Link>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton onClick={() => setDrawerOpen(false)}>
            <Link
              to="/contact-us"
              style={{ textDecoration: "none", color: Colors.white }}
            >
              <ListItemText>Contact Us</ListItemText>
            </Link>
          </ListItemButton>
          <MiddleDivider />
        </List>
      </Drawer>
    </>
  );
}
