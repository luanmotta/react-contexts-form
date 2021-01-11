import React from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import Dashboard from './components/Dashboard/Dashboard'
import 'fontsource-roboto';
import { Container, Typography } from "@material-ui/core"
import ValidacoesCadastro from './contexts/ValidacoesCadastro'
import { validarCPF, validarSenha } from './models/cadastro'

const App = () => {
  return (
    <Container component="article" maxWidth="sm">
      <Dashboard />
      <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
      <ValidacoesCadastro.Provider value={{ CPF: validarCPF, senha: validarSenha }}>
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

const aoEnviarForm = (dados) => {
  console.log(dados);
}

export default App;
