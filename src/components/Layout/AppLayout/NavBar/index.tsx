import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
  Hidden,
  Link,
  Avatar,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import logotipo from 'assets/images/sentinela-logo.png';
import useStyles from './styles';

const pages = [
  { title: 'Quem Somos', anchor: 'aboutCompany' },
  { title: 'Serviços', anchor: 'services' },
  {
    title: 'Trabalhe conosco',
    anchor: undefined,
    link: 'http://sentinelaservicos.com/trabalheconosco',
  },
  { title: 'Contato', anchor: 'contact' },
];

const ResponsiveAppBar = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ padding: '20px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Hidden mdDown>
            <Avatar
              alt="Sentinela"
              src={logotipo}
              variant="square"
              sx={{
                width: { xs: '47%', sm: '30%', md: '35%', lg: 80 },

                height: '100%',
                display: 'flex',
                alignSelf: 'center',
              }}
            />
          </Hidden>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon color="secondary" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              className={classes.menu}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none', bgcolor: '#2C2C2C' },
              }}
            >
              {pages.map(({ title, anchor }) => (
                <MenuItem
                  key={title}
                  onClick={handleCloseNavMenu}
                  href={`#${title}`}
                  sx={{ bgcolor: '#2C2C2C' }}
                >
                  <Typography textAlign="center">
                    <Link
                      href={`#${anchor}`}
                      underline="none"
                      sx={{
                        my: 2,
                        display: 'block',
                        paddingLeft: 3,
                        fontWeight: 700,
                        fontSize: '1.2rem',
                      }}
                    >
                      {title}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Hidden mdUp>
            <Box sx={{ mr: 1 }}>
              <Avatar
                alt="Sentinela"
                src={logotipo}
                variant="square"
                sx={{
                  width: 50,
                  height: '100%',
                  display: 'flex',
                  alignSelf: 'center',
                }}
              />
            </Box>
          </Hidden>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'end',
            }}
          >
            {pages.map(({ anchor, title }) => (
              <Link
                key={title}
                onClick={handleCloseNavMenu}
                underline="none"
                sx={{
                  my: 2,
                  display: 'block',
                  paddingLeft: 3,
                  fontWeight: 700,
                  fontSize: '1.2rem',
                }}
                href={`#${anchor}`}
              >
                {title}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
