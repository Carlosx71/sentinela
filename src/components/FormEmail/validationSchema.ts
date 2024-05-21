import * as Yup from 'yup';
import { contact } from 'interfaces/contact';

const requiredMessage = 'Campo obrigatório';

const validationSchema: Yup.SchemaOf<Partial<contact>> = Yup.object({
  nome: Yup.string().trim().required(requiredMessage),
  email: Yup.string()
    .email('Por favor, insira um email válido')
    .trim()
    .required(requiredMessage),
  telefone: Yup.string()
    .trim()
    .min(14, 'O telefone deve ter no mínimo 14 caracteres.')
    .max(15, 'O telefone deve ter no máximo 15 caracteres.')
    .required(requiredMessage),
  bairro: Yup.string().trim().required(requiredMessage),
  cep: Yup.string().trim().required(requiredMessage),
  cidade: Yup.string().trim().required(requiredMessage),
  complemento: Yup.string().trim(),
  endereco: Yup.string().trim().required(requiredMessage),
  estado: Yup.string().trim().required(requiredMessage),
  numero: Yup.string().trim().required(requiredMessage),
  obs: Yup.string().trim(),
  quantidade: Yup.number().required(requiredMessage),
  setor: Yup.string().trim().required(requiredMessage),
  sistemaVigilancia: Yup.boolean(),
});

export default validationSchema;
