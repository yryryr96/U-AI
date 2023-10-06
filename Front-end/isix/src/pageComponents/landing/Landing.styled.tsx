import styled, { css } from "styled-components";

const TagContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 420px;
  height: auto;
  padding: 0;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url('/resources/assets/pandaform.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position:center;
`

const StyledStartFormContainer = styled.div`
  /* background-color: gray; */
  
  position: absolute;
  width: 355px;
  height: 350px;
  padding: 0;
  margin-top: 170px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  text-align: center;
`

const StyledServiceName = styled.h1`
  color: black;
  margin: 20px 0px 10px;
  font-size: 2.6rem;
`

const StyledStartForm = styled.div`
  display: flex;
  width: 95%;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  border: solid 2px gray;
  color: black;
  margin: 10px 0px;
  border-radius: 15px;
`

const StyledStartFormName = styled.p`
  width: 30%;
  height: 100%;
  display: flex;
  margin-left: 20px;
  text-align: center;
  /* justify-content: center; */
  align-items: center;
  font-size: 26px;
  font-weight: bold;
`

const StyledStartFormInput = styled.input`
  width: 70%;
  height: 95%;
  border: none;
  font-size: 26px;
  margin-right: 10px;
  text-align: center;
  font-family: "SDChild";

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-transform: scale(1.8);
    -moz-transform: scale(1.8);
    -ms-transform: scale(1.8); 
 }
`

const StyledStartFormButton = styled.div`
  display: flex;
  width: 337px;
  height: 70px;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: rgb(226, 226, 226);
  margin: 10px 0px;
  border-radius: 15px;
  font-size: 30px;
  font-weight: bold;

  &:hover {
    background-color: rgb(84, 85, 87);
    color: white;
  }
`

export { TagContainer, StyledStartFormContainer, StyledServiceName, StyledStartFormName, StyledStartForm, StyledStartFormInput, StyledStartFormButton };
