/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
  Fade,
  Grid,
  TextField,
  Button,
  Backdrop,
  CircularProgress,
  Typography,
  SxProps,
  Theme,
  MenuItem,
  Switch,
  FormGroup,
  FormControlLabel,
  Divider,
  Link,
} from '@mui/material';
import { contact } from 'interfaces/contact';
import { FormikConfig, useFormik } from 'formik';
import emailjs from 'emailjs-com';
import validationSchema from './validationSchema';
import { maskCellPhone, maskCep } from 'utils/string/maks';
import cities from 'utils/data/cities';
import { getCep } from 'services/viaCep';

const FormEmail = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [open, setOpen] = useState(false);
  const [citiesSelect, setCitiesSelect] = useState<{ cidade: string }[]>([
    { cidade: '' },
  ]);

  const [stateSelect] = useState(
    cities
      .filter((value, index, self) => {
        return (
          // eslint-disable-next-line operator-linebreak
          index ===
          self.findIndex((t) => {
            return t.estado === value.estado;
          })
        );
      })
      .map(({ estado }) => {
        return { estado };
      })
      .sort((a, b) => {
        // eslint-disable-next-line no-nested-ternary
        return a.estado < b.estado ? -1 : a.estado > b.estado ? 1 : 0;
      })
  );

  const handleBackDrop = () => {
    setOpen(!open);
  };

  const sectionValues = ['Empresa', 'Escola', 'Evento', 'Condomínio', 'Outros'];

  const initialValues: contact = {
    nome: '',
    email: '',
    telefone: '',
    obs: '',
    bairro: '',
    cep: '',
    cidade: '',
    complemento: '',
    endereco: '',
    estado: '',
    numero: '',
    quantidade: 0,
    setor: '',
    sistemaVigilancia: false,
  };

  const handleEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    let payload = {};
    const formData = new FormData(event.currentTarget);
    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
      payload = { ...payload, [pair[0]]: pair[1] };
    }
    console.log(payload);

    await emailjs.sendForm(
      'service_iqw5q0o',
      'template_lfo4hem',
      event.currentTarget,
      'JpNn_D2Xh-5ZIKaca'
    );

    formik.setValues(initialValues);
    formik.setTouched({});
    setOpen(false);
  };

  const formik = useFormik<contact>({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

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

  useEffect(() => {
    if (formik.values.estado.length === 2) {
      setCitiesSelect(
        cities
          .filter((value) => {
            return value.estado === formik.values.estado;
          })
          .map(({ cidade }) => {
            return { cidade };
          })
      );
      if (formik.values.cidade !== '') {
        formik.setFieldValue('cidade', formik.values.cidade);
      }
    }
  }, [formik.values.estado]);

  useEffect(() => {
    const fillCep = async () => {
      if (formik.values.cep.length === 8) {
        setOpen(true);
        const res = await getCep(formik.values.cep);

        const fields: { [key: string]: string } = {
          endereco: res.logradouro,
          complemento: res.complemento,
          bairro: res.bairro,
          cidade: res.localidade.toUpperCase().trim(),
          estado: res.uf,
        };

        Object.keys(fields).forEach((field) => {
          return formik.setFieldValue(`${field}`, fields[field]);
        });
        setOpen(false);
      } else if (formik.values.cep.length === 0) {
        const fields = [
          'endereco',
          'complemento',
          'bairro',
          'cidade',
          'estado',
        ];

        fields.forEach((field) => {
          return formik.setFieldValue(`${field}`, '');
        });
      }
    };
    fillCep();
  }, [formik.values.cep]);

  const ruleTextFiled: SxProps<Theme> = {
    '& .MuiFormLabel-root': {
      color: '#cdaa5d',
    },
    '& .Mui-focused .MuiFormLabel-root': {
      color: '#cdaa5d',
    },
  };

  const generateWhatsAppMessage = (
    values: FormikConfig<contact>['initialValues']
  ) => {
    let message = `Olá! Meu nome é ${values.nome}, email ${values.email}, telefone ${values.telefone}, gostaria de um orçamento! Endereço: ${values.endereco}, número: ${values.numero}`;

    if (values.complemento) {
      message += `, complemento: ${values.complemento}`;
    }

    message += `, bairro: ${values.bairro}, cidade: ${values.cidade}, estado: ${
      values.estado
    }, setor: ${values.setor}, quantidade: ${
      values.quantidade
    }, sistema de vigilância: ${values.sistemaVigilancia ? 'Sim' : 'Não'}`;

    if (values.obs) {
      message += `, observações: ${values.obs}`;
    }

    return message;
  };

  return (
    <form
      onSubmit={async (event) => {
        handleBackDrop();
        handleEmail(event);
        formik.handleSubmit(event);
      }}
    >
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <Fade
            in={scrollPosition >= 600}
            {...(scrollPosition >= 600 ? { timeout: 800 } : {})}
          >
            <Typography
              variant="h3"
              color="#cdaa5d"
              textAlign="center"
              fontWeight="500"
              sx={{ lineHeight: '1.22222' }}
            >
              Contato
            </Typography>
          </Fade>
        </Grid>
        <Grid item xs={12}>
          <Backdrop
            sx={{
              color: '#cdaa5d',
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={open}
          >
            <CircularProgress color="primary" />
          </Backdrop>
          <TextField
            sx={ruleTextFiled}
            required
            id="nome"
            name="nome"
            label="Nome"
            variant="outlined"
            fullWidth
            value={formik.values.nome}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.nome && Boolean(formik.errors.nome)}
            helperText={formik.touched.nome && formik.errors.nome}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <TextField
                sx={ruleTextFiled}
                required
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                sx={ruleTextFiled}
                required
                id="telefone"
                name="telefone"
                label="Telefone"
                variant="outlined"
                fullWidth
                inputProps={{ maxLength: 15 }}
                value={maskCellPhone(formik.values.telefone)}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.telefone && Boolean(formik.errors.telefone)
                }
                helperText={formik.touched.telefone && formik.errors.telefone}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={2}>
              <TextField
                sx={ruleTextFiled}
                required
                id="cep"
                name="cep"
                label="CEP"
                variant="outlined"
                fullWidth
                inputProps={{ maxLength: 9 }}
                value={maskCep(formik.values.cep)}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.cep && Boolean(formik.errors.cep)}
                helperText={formik.touched.cep && formik.errors.cep}
              />
            </Grid>

            <Grid item xs={12} lg={4}>
              <TextField
                sx={ruleTextFiled}
                required
                id="endereco"
                name="endereco"
                label="Endereço"
                variant="outlined"
                fullWidth
                value={formik.values.endereco}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.endereco && Boolean(formik.errors.endereco)
                }
                helperText={formik.touched.endereco && formik.errors.endereco}
              />
            </Grid>

            <Grid item xs={12} lg={2}>
              <TextField
                sx={ruleTextFiled}
                required
                id="numero"
                name="numero"
                label="Número"
                variant="outlined"
                fullWidth
                value={formik.values.numero}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.numero && Boolean(formik.errors.numero)}
                helperText={formik.touched.numero && formik.errors.numero}
              />
            </Grid>

            <Grid item xs={12} lg={4}>
              <TextField
                sx={ruleTextFiled}
                required
                id="bairro"
                name="bairro"
                label="Bairro"
                variant="outlined"
                fullWidth
                value={formik.values.bairro}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.bairro && Boolean(formik.errors.bairro)}
                helperText={formik.touched.bairro && formik.errors.bairro}
              />
            </Grid>

            <Grid item xs={12} lg={4}>
              <TextField
                sx={ruleTextFiled}
                id="complemento"
                name="complemento"
                label="Complemento"
                variant="outlined"
                fullWidth
                value={formik.values.complemento}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.complemento &&
                  Boolean(formik.errors.complemento)
                }
                helperText={
                  formik.touched.complemento && formik.errors.complemento
                }
              />
            </Grid>

            <Grid item xs={12} lg={4}>
              <TextField
                sx={ruleTextFiled}
                required
                id="estado"
                name="estado"
                label="Estado"
                variant="outlined"
                fullWidth
                select
                value={formik.values.estado}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.estado && Boolean(formik.errors.estado)}
                helperText={formik.touched.estado && formik.errors.estado}
              >
                {stateSelect.map(({ estado }) => (
                  <MenuItem
                    key={estado}
                    value={estado}
                    sx={{ color: '#cdaa5d' }}
                  >
                    {estado}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} lg={4}>
              <TextField
                sx={ruleTextFiled}
                required
                id="cidade"
                name="cidade"
                label="Cidade"
                variant="outlined"
                fullWidth
                select
                value={formik.values.cidade}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.cidade && Boolean(formik.errors.cidade)}
                helperText={formik.touched.cidade && formik.errors.cidade}
              >
                {citiesSelect.map(({ cidade }, index) => {
                  return (
                    // eslint-disable-next-line react/no-array-index-key
                    <MenuItem
                      key={index}
                      value={cidade}
                      sx={{ color: '#cdaa5d' }}
                    >
                      {cidade}
                    </MenuItem>
                  );
                })}
              </TextField>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <TextField
                sx={ruleTextFiled}
                required
                id="setor"
                name="setor"
                label="Setor"
                variant="outlined"
                fullWidth
                select
                value={formik.values.setor}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.setor && Boolean(formik.errors.setor)}
                helperText={formik.touched.setor && formik.errors.setor}
              >
                {sectionValues.map((value, index) => {
                  return (
                    // eslint-disable-next-line react/no-array-index-key
                    <MenuItem
                      key={index}
                      value={value}
                      sx={{ color: '#cdaa5d' }}
                    >
                      {value}
                    </MenuItem>
                  );
                })}
              </TextField>
            </Grid>
            <Grid item xs={12} lg={2}>
              <TextField
                sx={ruleTextFiled}
                required
                id="quantidade"
                name="quantidade"
                label="Quantidade"
                variant="outlined"
                fullWidth
                type="number"
                value={formik.values.quantidade}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.quantidade && Boolean(formik.errors.quantidade)
                }
                helperText={
                  formik.touched.quantidade && formik.errors.quantidade
                }
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FormGroup>
                <FormControlLabel
                  labelPlacement="start"
                  value={formik.values.sistemaVigilancia}
                  onChange={formik.handleChange}
                  name="sistemaVigilancia"
                  control={
                    <Switch
                      inputProps={{ 'aria-label': 'vigilancia' }}
                      color="warning"
                    />
                  }
                  label="Controlar sistema de câmeras/vigilância?"
                />
              </FormGroup>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={ruleTextFiled}
            id="obs"
            name="obs"
            label="Observação"
            multiline
            rows={10}
            variant="outlined"
            fullWidth
            value={formik.values.obs}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.obs && Boolean(formik.errors.obs)}
            helperText={formik.touched.obs && formik.errors.obs}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Button
                variant="contained"
                disabled={!formik.isValid}
                type="submit"
                sx={{ backgroundColor: '#cdaa5d' }}
                fullWidth
              >
                Email
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Divider>OU</Divider>
            </Grid>
            <Grid item xs={5}>
              <Button
                variant="contained"
                disabled={!formik.isValid}
                component={Link}
                target="_blank"
                rel="noreferrer"
                href={`https://api.whatsapp.com/send?phone=5519996226991&text=${encodeURIComponent(
                  generateWhatsAppMessage(formik.values)
                )}`}
                sx={{ backgroundColor: '#cdaa5d' }}
                fullWidth
              >
                WhatsApp
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
    // </Paper>
  );
};

export default FormEmail;
