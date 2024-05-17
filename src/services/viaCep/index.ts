/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export interface correios {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export const getCep = async (value: string): Promise<correios> => {
  try {
    const newValue: string = value.replace(/\D/g, '');
    const res = await axios.get<correios | { error: 'true' }>(
      `https://viacep.com.br/ws/${newValue}/json`,
      {
        timeout: 5000,
      }
    );
    const cep = res.data;

    const isCorrerios = (object: any): object is correios => {
      return 'cep' in object;
    };

    if (!isCorrerios(cep)) {
      throw new Error('Cep Invalido');
    }
    return cep;
  } catch (error) {
    return {
      cep: '',
      logradouro: '',
      complemento: '',
      bairro: '',
      localidade: '',
      uf: '',
      ibge: '',
      gia: '',
      ddd: '',
      siafi: '',
    };
  }
};
