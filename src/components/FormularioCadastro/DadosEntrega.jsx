import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import FormTextField from './FormTextField'

const DadosEntrega = ({ aoEnviar }) => {
  const [cep, setCEP] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  return (
    <form
    onSubmit={(event) => {
      event.preventDefault();
      aoEnviar({cep, endereco, numero, estado, cidade });
    }}
    >
      <FormTextField id="cep" label="CEP" type="number" onChange={(event) => { setCEP(event.target.value); }}  />
      <FormTextField id="endereco" label="Endereço" type="text" onChange={(event) => { setEndereco(event.target.value); }}  />
      <FormTextField id="numero" label="Número" type="number" noFullWidth onChange={(event) => { setNumero(event.target.value); }}  />
      <FormTextField id="estado" label="Estado" type="text" noFullWidth onChange={(event) => { setEstado(event.target.value); }}  />
      <FormTextField id="cidade" label="Cidade" type="text" onChange={(event) => { setCidade(event.target.value); }}  />
      <Button type="submit" variant="contained" color="primary">Finalizar</Button>
    </form>
  );
}

export default DadosEntrega;
