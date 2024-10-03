"use client";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import Link from "next/link";

export default function Header() {
  return (
    <AppBar position="static" sx={{ mb: "20px" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
          >
            Recipes
          </Typography>
          <List>
            <ListItem>
              <ListItemButton component={Link} href="/recipe/new">
                <ListItemText sx={{ textDecoration: "none", color: "inherit" }}>
                  Add recipe
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
