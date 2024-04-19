import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import Description from 'components/Description';

const AboutCompany = () => {
  return (
    <Box
      id="aboutCompany"
      sx={{
        marginTop: '30px',
        '@media (min-width: 2000px)': {
          marginTop: '80px',
        },
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={6}
      >
        <Grid item xs={12}>
          <Typography
            variant="h5"
            color="#2e5da1"
            textAlign="center"
            fontWeight="700"
            sx={{
              fontSize: { xs: '2rem', lg: '3.25rem' },
              lineHeight: '1.22222',
            }}
          >
            QUEM SOMOS
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Description>
            A Sentinela que oferece soluções inovadoras para proteger seu
            patrimônio e garantir sua tranquilidade. Nossa equipe qualificada e
            comprometida está sempre pronta para atender às suas necessidades
            com eficiência. Priorizamos a segurança dos nossos clientes,
            utilizando tecnologias avançadas e seguindo rigorosos padrões de
            segurança.
          </Description>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutCompany;
