import React from 'react';
import { validarCPF, validarSenha } from '../models/cadastro'

const ValidacoesCadastro = React.createContext(
  { CPF: validarCPF, senha: validarSenha }
);

export default ValidacoesCadastro;
