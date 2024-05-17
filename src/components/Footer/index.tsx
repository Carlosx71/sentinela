import React from 'react';
import { Typography, Link, Grid, Stack, Box, Paper } from '@mui/material';
import { WhatsApp, Instagram, Email, LinkedIn } from '@mui/icons-material';
import useStyles from './styles';

const Copyright = () => {
  return (
    <Typography variant="subtitle1">
      Copyright ©
      <Link color="inherit" href="">
        Todos Direitos Reservados
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
};

const Footer = () => {
  const classes = useStyles();

  const cssIcon = {
    color: '#cdaa5d',
    marginRight: '10px',
  };

  return (
    <Paper elevation={7} sx={{ marginTop: '20px' }}>
      <Grid container padding="50px" spacing={2}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Stack spacing={1} width="100%">
                <Box display="flex" alignItems="center">
                  <Typography variant="subtitle1" component="p">
                    Instalações industriais
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{ width: { md: '323px' } }}
                >
                  <Typography variant="subtitle1">
                    <Copyright />
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Stack spacing={1} width="100%">
                <Box display="flex" alignItems="center">
                  <WhatsApp sx={cssIcon} />
                  <Typography variant="subtitle1" className={classes.colorText}>
                    <Link
                      href="https://api.whatsapp.com/send?phone=5519996226991&text=Olá! Gostária de um orçamento!"
                      className={classes.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      (99) 99999-9999
                    </Link>
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Email sx={cssIcon} />
                  <Typography variant="subtitle1" component="p">
                    contato@sentinelaservicos.com
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={1} width="100%">
                <Box display="flex" alignItems="center">
                  <Instagram sx={cssIcon} />
                  <Typography variant="subtitle1" className={classes.colorText}>
                    <Link
                      href="https://www.instagram.com/sentinela/"
                      className={classes.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @sentinela
                    </Link>
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <LinkedIn sx={cssIcon} />
                  <Typography variant="subtitle1" className={classes.colorText}>
                    <Link
                      href="https://www.linkedin.com/company"
                      className={classes.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      sentinela
                    </Link>
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Footer;
