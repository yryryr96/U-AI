import styled, { css } from "styled-components";

const TagContainer = styled.div`
  position: absolute;
  top: 15%;
  left: 35%;
  width: 30%;
  min-width: 420px;
  height: 70%;
  color: white;
  padding: 0;
  margin: auto;
  /* background-image: url('/resources/pandaform1.png');
  background-repeat: no-repeat;
  background-size: contain; */
`
const StyledStartFormContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white; opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  text-align: center;
`

const StyledServiceName = styled.h1`
  color: black;
  margin: 20px 0px 40px;
  font-size: 46px;
`

const StyledStartForm = styled.div`
  display: flex;
  width: 400px;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  border: solid 1px;
  color: black;
  margin: 20px 0px;
  border-radius: 20px;
`

const StyledStartFormName = styled.p`
  width: 150px;
  height: 100%;
  display: flex;
  margin-left: 20px;
  /* justify-content: center; */
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`

const StyledStartFormInput = styled.input`
  width: 240px;
  height: 95%;
  border: none;
  font-size: 20px;
  margin-right: 10px;
  
`

const StyledStartFormButton = styled.div`
  display: flex;
  width: 400px;
  height: 70px;
  justify-content: center;
  align-items: center;
  border: solid 1px;
  color: black;
  margin: 20px 0px;
  border-radius: 20px;
  font-size: 24px;
  font-weight: bold;
`

export { TagContainer, StyledStartFormContainer, StyledServiceName, StyledStartFormName, StyledStartForm, StyledStartFormInput, StyledStartFormButton };
