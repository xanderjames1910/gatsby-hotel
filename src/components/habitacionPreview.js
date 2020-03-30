import React from "react";
import Image from "gatsby-image";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, 0.85);
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  border-radius: 5px;
`;

const HabitacionPreview = ({ habitacion }) => {
  const { contenido, imagen, titulo, slug } = habitacion;

  return (
    <div
      css={css`
        border: 1px solid #e1e1e1;
        border-radius: 5px;
        margin-bottom: 2rem;
      `}
    >
      <Image
        css={css`
          border-radius: 5px 5px 0 0;
        `}
        fluid={imagen.fluid}
      />
      <div
        css={css`
          padding: 3rem;
        `}
      >
        <h3
          css={css`
            font-size: 3rem;
          `}
        >
          {titulo}
        </h3>
        <p>{contenido}</p>

        <Boton to={slug}>Ver Habitación</Boton>
      </div>
    </div>
  );
};

export default HabitacionPreview;
