import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import FormTextField from './FormTextField';

const DadosUsuario = ({ aoEnviar }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ email, senha });
      }}
    >
      <FormTextField id="email" label="Email" type="email" onChange={(event) => { setEmail(event.target.value); }} />
      <FormTextField id="senha" label="Senha" type="password" onChange={(event) => { setSenha(event.target.value); }} />
      <Button type="submit" variant="contained" color="primary">Próximo</Button>
    </form>
  );
}

export default DadosUsuario;
