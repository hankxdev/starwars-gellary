import styled from 'styled-components';

export const theme = {
  colors: {
    yellow: '#feda4a',
    lightWhite: '#f0f0f0',
    black: '#000',
    red: '#a00'
  },
}

export const ItemHeader = styled.div`
  background-color: ${(props) => props.theme.colors.yellow};
  display: inline-block;
  width: 130px;
  padding: 10px;
  margin-right: 10px;
  
  strong{
    text-transform: capitalize;
    color: ${(props) => props.theme.fontColor};;
  }
`
