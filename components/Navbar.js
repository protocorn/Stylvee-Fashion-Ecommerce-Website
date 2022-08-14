/* eslint-disable @next/next/no-img-element */
import {
  Button,
  Popover,
  Box,
  Grid,
  ListItemText,
  List,
  ListItem,
  ListItemButton,
} from '@mui/material';
import React from 'react';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const id = open ? 'simple-popover' : undefined;
  const id2 = open ? 'simple-popover' : undefined;
  const id3 = open ? 'simple-popover' : undefined;

  return (
    <nav className="bg-white shadow-lg flex-wrap">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                alt="Workflow"
              />
            </div>
            <div className="hidden sm:block sm:ml-6 items-center">
              <div className="flex space-x-4">
                <div>
                  <Button
                    aria-describedby={id}
                    variant="text"
                    color="primary"
                    size="large"
                    onClick={handleClick}
                  >
                    MEN
                  </Button>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                  >
                    <Box sx={{ flexGrow: 1, margin: 2 }}>
                      <Grid container spacing={2} wrap="wrap">
                        <Grid item xs={4}>
                          <font color="#F66D0A" size="2">
                            <b>TOPWEAR</b>
                          </font>
                          <nav aria-label="secondary mailbox folders">
                            <List dense={true}>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="T-Shirts" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Formal Shirts" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Casual Shirts" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="SweatShirts" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Jackets" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Blazers & Coats" />
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </nav>
                        </Grid>
                        <Grid item xs={4}>
                          <font color="#F66D0A" size="2">
                            <b>ETHNIC WEAR</b>
                          </font>
                          <nav aria-label="secondary mailbox folders">
                            <List dense={true}>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Kurtas" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Sherwanis" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Nehru Jackets" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Kurta Sets" />
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </nav>
                        </Grid>
                        <Grid item xs={4}>
                          <font color="#F66D0A" size="2">
                            <b>FASHION ACCESSORIES</b>
                          </font>
                          <nav aria-label="secondary mailbox folders">
                            <List dense={true}>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Sunglasses" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Wallets" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Belts" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Perfumes & Deodrants" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Caps & Hats" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Wristbands & Rings" />
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </nav>
                        </Grid>
                        <Grid item xs={4}>
                          <font color="#F66D0A" size="2">
                            <b>BOTTOM WEAR</b>
                          </font>
                          <nav aria-label="secondary mailbox folders">
                            <List dense={true}>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Jeans" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Formal Trousers" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Casual Trousers" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Shorts" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Joggers & Track Pants" />
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </nav>
                        </Grid>
                        <Grid item xs={4}>
                          <font color="#F66D0A" size="2">
                            <b>INNER WEAR</b>
                          </font>
                          <nav aria-label="secondary mailbox folders">
                            <List dense={true}>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Briefs" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Boxers" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Thermal Underwear" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Trunks" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Vests" />
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </nav>
                        </Grid>
                        <Grid item xs={4}>
                          <font color="#F66D0A" size="2">
                            <b>SPORTS WEAR</b>
                          </font>
                          <nav aria-label="secondary mailbox folders">
                            <List dense={true}>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Sports Shoes & Sandals" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Tracksuits" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Active T-shirts" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Swimwear" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Sports Accessories" />
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </nav>
                        </Grid>
                      </Grid>
                    </Box>
                  </Popover>
                </div>
                <div>
                  <Button
                    aria-describedby={id2}
                    variant="text"
                    color="primary"
                    size="large"
                    onClick={handleClick2}
                  >
                    WOMEN
                  </Button>
                  <Popover
                    id={id2}
                    open={open2}
                    anchorEl={anchorEl2}
                    onClose={handleClose2}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                  >
                    <Box sx={{ flexGrow: 1, margin: 2 }}>
                      <Grid container spacing={2} wrap="wrap">
                        <Grid item xs={4}>
                          <font color="#F66D0A" size="2">
                            <b> WESTERN WEAR</b>
                          </font>
                          <nav aria-label="secondary mailbox folders">
                            <List dense={true}>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Tops & Dresses" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Jeans" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="T-Shirts" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Shorts & Skirts" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Trousers" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Jumpsuits" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Sweaters & Sweatshirts" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Jacket & Coats" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Blazers" />
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </nav>
                        </Grid>
                        <Grid item xs={4}>
                          <font color="#F66D0A" size="2">
                            <b>INDIAN & FUSION WEAR</b>
                          </font>
                          <nav aria-label="secondary mailbox folders">
                            <List dense={true}>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Ethnic Wear" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Sarees" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Kurtas & Suits" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Skirts & Palazzos" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Dress Materials" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Lehnga Cholis" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Dupattas & Shawls" />
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </nav>
                        </Grid>
                        <Grid item xs={4}>
                          <font color="#F66D0A" size="2">
                            <b>LINGERIE & SLEEPWEAR</b>
                          </font>
                          <nav aria-label="secondary mailbox folders">
                            <List dense={true}>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Bra" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Briefs" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Sleepwear & Loungewear" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Shorts" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Thermals" />
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </nav>
                        </Grid>
                        <Grid item xs={4}>
                          <font color="#F66D0A" size="2">
                            <b>JEWELLERY</b>
                          </font>
                          <nav aria-label="secondary mailbox folders">
                            <List dense={true}>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Fashion Jewellery" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Fine Jewellery" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Earings" />
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </nav>
                        </Grid>
                        <Grid item xs={4}>
                          <font color="#F66D0A" size="2">
                            <b>SPORTS WEAR</b>
                          </font>
                          <nav aria-label="secondary mailbox folders">
                            <List dense={true}>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Footwears" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Swimwear" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Active T-shirts" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Sports Accessories" />
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </nav>
                        </Grid>
                        <Grid item xs={4}>
                          <font color="#F66D0A" size="2">
                            <b>BEAUTY & PERSONAL CARE</b>
                          </font>
                          <nav aria-label="secondary mailbox folders">
                            <List dense={true}>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Makeup" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Skincare" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Lipsticks" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Perfumes & Deodrants" />
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </nav>
                        </Grid>
                      </Grid>
                    </Box>
                  </Popover>
                </div>
                <div>
                  <Button
                    aria-describedby={id3}
                    variant="text"
                    color="primary"
                    size="large"
                    onClick={handleClick3}
                  >
                    KIDS
                  </Button>
                  <Popover
                    id={id3}
                    open={open3}
                    anchorEl={anchorEl3}
                    onClose={handleClose3}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                  >
                    <Box sx={{ flexGrow: 1, margin: 2 }}>
                      <Grid container spacing={2} wrap="wrap">
                        <Grid item xs={4}>
                          <font color="#F66D0A" size="2">
                            <b>TOPWEAR</b>
                          </font>
                          <nav aria-label="secondary mailbox folders">
                            <List dense={true}>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="T-Shirts" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Formal Shirts" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Casual Shirts" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="SweatShirts" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Jackets" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Blazers & Coats" />
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </nav>
                        </Grid>
                        <Grid item xs={4}>
                          <font color="#F66D0A" size="2">
                            <b>ETHNIC WEAR</b>
                          </font>
                          <nav aria-label="secondary mailbox folders">
                            <List dense={true}>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Kurtas" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Sherwanis" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Nehru Jackets" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Kurta Sets" />
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </nav>
                        </Grid>
                        <Grid item xs={4}>
                          <font color="#F66D0A" size="2">
                            <b>FASHION ACCESSORIES</b>
                          </font>
                          <nav aria-label="secondary mailbox folders">
                            <List dense={true}>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Sunglasses" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Wallets" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Belts" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Perfumes & Deodrants" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Caps & Hats" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Wristbands & Rings" />
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </nav>
                        </Grid>
                        <Grid item xs={4}>
                          <font color="#F66D0A" size="2">
                            <b>BOTTOM WEAR</b>
                          </font>
                          <nav aria-label="secondary mailbox folders">
                            <List dense={true}>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Jeans" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Formal Trousers" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Casual Trousers" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Shorts" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Joggers & Track Pants" />
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </nav>
                        </Grid>
                        <Grid item xs={4}>
                          <font color="#F66D0A" size="2">
                            <b>INNER WEAR</b>
                          </font>
                          <nav aria-label="secondary mailbox folders">
                            <List dense={true}>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Briefs" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Boxers" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Thermal Underwear" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Trunks" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Vests" />
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </nav>
                        </Grid>
                        <Grid item xs={4}>
                          <font color="#F66D0A" size="2">
                            <b>SPORTS WEAR</b>
                          </font>
                          <nav aria-label="secondary mailbox folders">
                            <List dense={true}>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Sports Shoes & Sandals" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Tracksuits" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Active T-shirts" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Swimwear" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Sports Accessories" />
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </nav>
                        </Grid>
                      </Grid>
                    </Box>
                  </Popover>
                </div>
              </div>
            </div>
          </div>

          <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-80">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for Categories, Products or more..."
                required
              />
            </div>
            <button
              type="submit"
              className="p-2.5  ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>

          <div className="pl-10">
            <button
              type="button"
              className="inline-flex relative items-center p-0.5 text-sm font-medium text-center text-white bg-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <img src="https://img.icons8.com/sf-regular/48/000000/shopping-cart.png" />
              <span className="sr-only">Notifications</span>
              <div className="p-1 inline-flex absolute -top-0 -right-1 justify-center items-center w-wrap h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">
                20
              </div>
            </button>
          </div>

          <div className=" absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://img.icons8.com/material/24/000000/user-male-circle--v1.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
            MEN
          </a>

          <a
            href="#"
            className="text-gray-900 hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            WOMEN
          </a>

          <a
            href="#"
            className="text-gray-900 hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            KIDS
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
