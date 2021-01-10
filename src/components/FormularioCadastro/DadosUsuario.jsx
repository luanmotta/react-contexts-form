import React, { useState, useContext } from 'react';
import { Button } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import FormTextField from './FormTextField';
import useErros from '../../hooks/useErros';

const DadosUsuario = ({ aoEnviar }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <FormTextField id="email" label="Email" type="email" onChange={(event) => { setEmail(event.target.value); }} />
      <FormTextField
        id="senha"
        label="Senha"
        type="password"
        name="senha"
        onChange={(event) => {setSenha(event.target.value);}}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
      />
      <Button type="submit" variant="contained" color="primary">Próximo</Button>
    </form>
  );
}

export default DadosUsuario;
