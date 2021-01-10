import { StepLabel, Stepper, Step } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import FimCadastro from "./FimCadastro";

const FormularioCadastro = ({ aoEnviar }) => {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (formStep > 2) {
      aoEnviar(formData)
    }
  }, [formStep])

  const next = (data) => {
    setFormData({ ...formData, ...data })
    setFormStep(formStep + 1)
  }

  const getFormAtual = () => {
    const components = [
      <DadosUsuario aoEnviar={next} />,
      <DadosPessoais aoEnviar={next} />,
      <DadosEntrega aoEnviar={next} />,
      <FimCadastro/>
    ]
    return components[formStep]
  }

  return (
    <>
      <Stepper activeStep={formStep}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {getFormAtual()}
    </>
  );
}

export default FormularioCadastro;
