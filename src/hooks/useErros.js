import React, { useState } from 'react';

const criarEstadoInicial = (validacoes) => {
  const estadoInicial = {}
  for (let campo in validacoes) {
    estadoInicial[campo] = { valido:true, texto:"" }
  }
  return estadoInicial
}

const useErros = (validacoes) => {
  const estadoInicial = criarEstadoInicial(validacoes)
  const [erros, setErros] = useState(estadoInicial)

  const validarCampos = (event) => {
    const { name, value } = event.target
    const ehValido = validacoes[name](value);
    const novoEstado = { ...erros, [name]: ehValido }
    setErros(novoEstado)
  }

  const possoEnviar = () => {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false
      }
    }
    return true
  }

  return [erros, validarCampos, possoEnviar]
}

export default useErros
