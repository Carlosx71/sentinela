import React from 'react';
import { Button, Grid, Link } from '@mui/material';
import useStyles from './styles';
import { WhatsApp } from '@mui/icons-material';
import { Box } from '@mui/system';

const ImgHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.imgHeader}>
      <div className={classes.layer} style={{ display: 'flex' }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          justifyItems="center"
        >
          <Grid item></Grid>
          <Grid item>
            <Button
              variant="contained"
              startIcon={<WhatsApp style={{ fontSize: '30px' }} />}
              sx={{ marginTop: '50px' }}
              size="large"
              component={Link}
              target="_blank"
              rel="noreferrer"
              href="https://api.whatsapp.com/send?phone=5519996226991&text=Olá! Gostária de um orçamento!"
            >
              <Box sx={{ fontWeight: 700 }}>Entrar em contato</Box>
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ImgHeader;
