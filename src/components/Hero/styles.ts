import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  position: relative; /* PARA Ñ SAIR DO BANNER */
  height: 480px;
  display: block;
  width: 100%;

  background-repeat: no-repeat; /* PARA Ñ REPETIR A IMAGEM */
  background-position: center;
  background-size: 100%; /* PARA OCUPAR TODA PAG */

  padding-top: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    background-size: cover;
  }

  /* PARA DEIXAR A IMAGEM OPACA */
  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 56%;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  /* PARA Ñ PEGAR A OPACIDADE E ALINHAMENTO DOS ITENS*/
  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`
export const Infos = styled.div`
  padding: 16px;
  background-color: ${cores.preta};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }
  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
