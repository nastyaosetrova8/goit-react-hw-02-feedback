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
  background-color: #e7e7e7;
  transition: background-color 150ms linear;
 
  &:not(:last-child){
    margin-right: 10px;
  }

  &:hover,
&:focus {
  box-shadow: 0px 2px 47px -18px rgba(0, 0, 0, 0.75);
  background-color: #0af0e8;
}
 
 /* &--active {
    background-color: #0af0e8;
 } */
`

