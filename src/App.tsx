import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material/styles';
import { Avatar, Container, Grid, Paper, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import theme from 'styles/theme/dark';
import Layout from 'components/Layout';
import ImgHeader from 'components/ImgHeader';
import Footer from 'components/Footer';
import Identify from 'components/MissionAndVision';
import Contact from 'components/Contact';
import seguranca from 'assets/images/cliente-de-protecao-de-seguranca2.jpg';
import segurancaPessoal from 'assets/images/cliente-de-protecao-do-homem-de-seguranca.jpg';
import escoltaArmada from 'assets/images/equipe-de-seguranca-de-vista-frontal-trabalhando.jpg';
import homemVigia from 'assets/images/homem-vendo-video.jpg';
import escolta from 'assets/images/mulher-de-seguranca-na-frente-do-carro.jpg';
import ServiceCard from 'components/ServicesCards';

const App = () => {
  const spacing = 5;

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale={dayjs.locale('pt-br')}
    >
      <ThemeProvider theme={theme}>
        <Layout />
        <ImgHeader />
        <Grid container spacing={spacing}>
          <Grid item xs={12} id="aboutCompany" sx={{ margin: '42px 0 10px 0' }}>
            <Container maxWidth="xl">
              <Grid container spacing={spacing}>
                <Grid item xs={12} md={6}>
                  <Identify />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Avatar
                    src={seguranca}
                    variant="rounded"
                    sx={{
                      width: '100%',
                      height: '100%',
                      padding: '30px',
                    }}
                  />
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={12} id="services">
            <Container maxWidth="xl">
              <Grid container spacing={spacing}>
                <Grid item xs={12}>
                  <Paper
                    sx={{
                      maxWidth: '180px',
                      padding: '8px',
                      borderLeft: '4px solid #2e5da1',
                    }}
                  >
                    <Typography
                      variant="h3"
                      color="#2e5da1"
                      textAlign="center"
                      fontWeight="500"
                      sx={{
                        fontSize: '2rem',
                        lineHeight: '1.22222',
                      }}
                    >
                      Serviços
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                  <ServiceCard
                    title="Vigilância"
                    description="A Sentinela oferece serviços de vigilância com profissionais treinados e equipamentos de alta tecnologia para garantir a segurança de empresas e residências, visando proporcionar tranquilidade e proteção aos clientes de forma preventiva."
                    image={escoltaArmada}
                    scrollYPosition={1030}
                    timeout={0}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <ServiceCard
                    title="Escolta Armada"
                    description="A Sentinela oferece serviços de Escolta Armada com profissionais treinados e equipados para proteger cargas e valores durante o transporte, garantindo a segurança e integridade dos clientes."
                    image={escolta}
                    scrollYPosition={1030}
                    timeout={1000}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <ServiceCard
                    title="Segurança Pessoal"
                    description="A Sentinela oferece segurança pessoal com profissionais treinados e capacitados, usando técnicas avançadas e equipamentos de alta tecnologia para proteger os clientes, garantindo tranquilidade e bem-estar em diversas situações."
                    image={segurancaPessoal}
                    scrollYPosition={1030}
                    timeout={1500}
                  />
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={12} id="contact" sx={{ margin: '42px 0 10px 0' }}>
            <Container maxWidth="xl">
              <Grid container spacing={spacing}>
                <Grid item xs={12} md={6}>
                  <Avatar
                    src={homemVigia}
                    variant="rounded"
                    sx={{
                      width: '100%',
                      height: '100%',
                      padding: '30px',
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Contact />
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </ThemeProvider>
    </LocalizationProvider>
  );
};

export default App;
