import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const avatar = [
  { id: 1, alt: "Remy Sharp", image: "/src/assets/logo.jpg" },
  { id: 2, alt: "Remy Sharp", image: "/src/assets/avatar4.jpg" },
  { id: 3, alt: "Remy Sharp", image: "/src/assets/tm1.jpg" },
  { id: 4, alt: "Remy Sharp", image: "/src/assets/tm2.jpg" },
  { id: 5, alt: "Remy Sharp", image: "/src/assets/tm4.jpg" },
  { id: 6, alt: "Remy Sharp", image: "/src/assets/tm6.jpg" },
  { id: 7, alt: "Remy Sharp", image: "/src/assets/logo.jpg" },
  { id: 8, alt: "Remy Sharp", image: "/src/assets/logo.jpg" },
];

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"} width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>

        <AvatarGroup max={6}>
          {avatar.map((item, i) => {
            return <Avatar key={i} src={item.image} alt={item.alt} />;
          })}
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="/src/assets/pexels-wildlittlethingsphoto-745045.jpg"
              alt="post"
            />
          </ImageListItem>
          <ImageListItem>
            <img src="/src/assets/pexels-bobbydimas-27490120.jpg" alt="post" />
          </ImageListItem>
          <ImageListItem>
            <img
              src="/src/assets/pexels-eric-moura-859101902-27453365.jpg"
              alt="post"
            />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/src/assets/tm1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/src/assets/tm6.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
