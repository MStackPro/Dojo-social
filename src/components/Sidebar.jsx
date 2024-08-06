import {
  AccountBox,
  Group,
  Home,
  ModeNight,
  Pages,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

const Sidebar = ({ mode, setMode }) => {

  const sidebar = [
    { id: 1, name: "Home", primary: "Home", link: "#home", icon: <Home /> },
    { id: 2, name: "Pages", primary: "Pages", link: "#pages", icon: <Pages /> },
    {
      id: 3,
      name: "Groups",
      primary: "Groups",
      link: "#groups",
      icon: <Group />,
    },
    {
      id: 4,
      name: "Marketplace",
      primary: "Marketplace",
      link: "#marketplace",
      icon: <Storefront />,
    },
    {
      id: 5,
      name: "Friends",
      primary: "Friends",
      link: "#friends",
      icon: <Person />,
    },
    {
      id: 6,
      name: "Settings",
      primary: "Settings",
      link: "#settings",
      icon: <Settings />,
    },
    {
      id: 7,
      name: "Profile",
      primary: "Profile",
      link: "#profile",
      icon: <AccountBox />,
    },
    {
      id: 8,
      name: (
        <Switch
          onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
        />
      ),
      primary: "switch",
      link: "#",
      icon: <ModeNight />,
    },
  ];

  
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"}>
        <List>
          {sidebar.map((item, index) => {
            return (
              <ListItem disablePadding key={index}>
                <ListItemButton component="a" href={item.link}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
