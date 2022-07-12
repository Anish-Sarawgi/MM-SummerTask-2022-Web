import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Article, Groups, Home, Person, Settings, Storefront } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <Box
      flex={1}
      p={2}
      bgcolor='pink'
    >
      <Box position='fixed'>
      <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Show all articles" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <Article/>
              </ListItemIcon>
              <ListItemText primary="Read an article" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <Groups/>
              </ListItemIcon>
              <ListItemText primary="Update an article" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <Storefront/>
              </ListItemIcon>
              <ListItemText primary="Delete an article" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <Person/>
              </ListItemIcon>
              <ListItemText primary="Post an article" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <Settings/>
              </ListItemIcon>
              <ListItemText primary="See the trending articles" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}
