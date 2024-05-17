import { Grid, SxProps, Theme, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Animated } from 'react-animated-css';
import Description from 'components/Description';

const stylesTitle: SxProps<Theme> = {
  fontSize: '2.2rem',
  lineHeight: '1.22222',
};

const Identify = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const spacing = 4;

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Grid container spacing={spacing} direction="column">
      <Grid item xs={12} lg={6}>
        <Animated
          animationIn="fadeInLeft"
          animationOut="zoomOutDown"
          animationInDuration={1000}
          animationOutDuration={1000}
          isVisible={scrollPosition >= 250}
        >
          <Grid container direction="column" spacing={spacing}>
            <Grid item>
              <Typography
                variant="h3"
                color="#cdaa5d"
                textAlign="center"
                fontWeight="500"
                sx={stylesTitle}
              >
                QUEM SOMOS
              </Typography>
            </Grid>
            <Grid item>
              <Description>
                A Sentinela que oferece soluções inovadoras para proteger seu
                patrimônio e garantir sua tranquilidade. Nossa equipe
                qualificada e comprometida está sempre pronta para atender às
                suas necessidades com eficiência. Priorizamos a segurança dos
                nossos clientes, utilizando tecnologias avançadas e seguindo
                rigorosos padrões de segurança.
              </Description>
            </Grid>
          </Grid>
        </Animated>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Animated
          animationIn="fadeInLeft"
          animationOut="zoomOutDown"
          animationInDuration={1000}
          animationOutDuration={1000}
          isVisible={scrollPosition >= 500}
        >
          <Grid container direction="column" spacing={spacing}>
            <Grid item>
              <Typography
                variant="h3"
                color="#cdaa5d"
                textAlign="center"
                fontWeight="500"
                sx={stylesTitle}
              >
                VISÃO
              </Typography>
            </Grid>
            <Grid item>
              <Description>
                A Sentinela é uma empresa de segurança comprometida em proteger
                o que é mais importante para você. Com uma equipe altamente
                treinada e tecnologia de ponta, estamos sempre vigilantes para
                garantir a sua tranquilidade e segurança. Conte com a Sentinela
                para estar sempre um passo à frente e proteger o que realmente
                importa. Sua segurança é a nossa prioridade.
              </Description>
            </Grid>
          </Grid>
        </Animated>
      </Grid>

      <Grid item xs={12} lg={6}>
        <Animated
          animationIn="fadeInLeft"
          animationOut="zoomOutDown"
          animationInDuration={1000}
          animationOutDuration={1000}
          isVisible={scrollPosition >= 700}
        >
          <Grid container direction="column" spacing={spacing}>
            <Grid item>
              <Typography
                variant="h3"
                color="#cdaa5d"
                textAlign="center"
                fontWeight="500"
                sx={stylesTitle}
              >
                MISSÃO
              </Typography>
            </Grid>
            <Grid item>
              <Description>
                Nossa missão na Sentinela é proporcionar segurança e
                tranquilidade para nossos clientes, protegendo suas vidas,
                propriedades e informações com comprometimento e excelência.
                Buscamos sempre inovar e aprimorar nossos serviços, mantendo-nos
                atualizados com as últimas tecnologias e tendências do mercado
                de segurança. Estamos dedicados a ser a melhor opção em
                segurança para nossos clientes, garantindo um ambiente seguro e
                protegido em todos os momentos. Sua segurança é a nossa missão.
              </Description>
            </Grid>
          </Grid>
        </Animated>
      </Grid>
    </Grid>
  );
};

export default Identify;
