import styled from 'styled-components';

export const ButtonStyled = styled.button`
border-radius: 8px;
  font-size: 16px;
  padding: 12px 20px;
  text-align: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  border: none;
  color: #030360;
  background-color: #21c6f4;
  transition: background-color 150ms linear;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
transition: box-shadow 100ms linear;

  &:not(:last-child){
    margin-right: 10px;
  }

  &:hover,
  &:focus {
  box-shadow: none;
  background-color: #6bddfc;
} 
`



