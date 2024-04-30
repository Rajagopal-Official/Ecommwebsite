import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {
  ActionIconsContainerMobile,
  ActionsIconsContainerDesktop,
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { Link } from "react-router-dom";
import { useUIContext } from "../../context/UI";
import { Colors } from "../../styles/theme";

export default function Appbardesktop({ matches }) {
  const { setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>
      <AppbarHeader>Wixieebags</AppbarHeader>
      <MyList sx={{gap:"20px"}} type="row">
      <ListItemButton>
            <Link
              to="/"
              style={{ textDecoration: "none", color: Colors.primary }}
            >
              <ListItemText>Home</ListItemText>
            </Link>
          </ListItemButton>
          <ListItemButton>
            <Link
              to="/categories"
              style={{ textDecoration: "none", color: Colors.primary }}
            >
              <ListItemText>Categories</ListItemText>
            </Link>
          </ListItemButton>
          <ListItemButton>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: Colors.primary }}
            >
              <ListItemText>Products</ListItemText>
            </Link>
          </ListItemButton>
          <ListItemButton>
            <Link
              to="/about_us"
              style={{ textDecoration: "none", color: Colors.primary }}
            >
              <ListItemText>About Us</ListItemText>
            </Link>
          </ListItemButton>
          <ListItemButton>
            <Link
              to="/contact-us"
              style={{ textDecoration: "none", color: Colors.primary }}
            >
              <ListItemText>Contact Us</ListItemText>
            </Link>
          </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}