import React from 'react';

const semValidacao = () => {
  return { valido: true, texto: "" };
}

const ValidacoesCadastro = React.createContext({
  CPF: semValidacao,
  senha: semValidacao
});

export default ValidacoesCadastro;
