/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { IconeTema } from "./UI";

import alimentacao from "../assets/images/alimentacao.svg";
import utilidades from "../assets/images/utilidades.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import outros from "../assets/images/outros.svg";

export default (type) => {
  const Images = {
    Restaurante: <IconeTema src={alimentacao} alt="Restaurante" />,
    Utilidades: <IconeTema src={utilidades} alt="Utilidades" />,
    Saude: <IconeTema src={saude} alt="Saude" />,
    Transporte: <IconeTema src={transporte} alt="Transport" />,
    default: <IconeTema src={outros} alt="Outro" />,
  };

  return Images[type] || Images.default;
};
