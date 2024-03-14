import styled, { css } from "styled-components";

export const imgHeaderBot = styled.img`
  width: 100px;
  height: 80px;
  flex: 1;
  margin: 0 10px;
  @media (max-width: 920px) {
    display: none;
    flex: 0;
  }
`;
export const containHeaderBot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: black;
`;

export const center = styled.div`
  flex: 3;
  @media (max-width: 920px) {
    display: none;
  }
  & ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & li {
      list-style: none;
      text-transform: uppercase;
      font-size: 14px;
      padding: 35px 16px;
      text-align: center;
      font-weight: 500;
      &:hover {
        background-color: #3c3c3c;
      }
    }
  }
`;

export const right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
  @media (max-width: 920px) {
    width: 100%;
  }
  & div {
    display: flex;
    align-items: center;
    font-size: 25px;
    & a {
      color: white;
      margin: 5px 20px 0px 0px;
    }
    & > div {
      display: none;
      margin-right: 20px;
      @media (max-width: 920px) {
        display: inline;
      }
    }
  }
`;

export const inputHeader = styled.div`
  background-color: #e8e8e8;
  padding: 10px 5px;
  border-radius: 30px;
  margin-right: 20px;
  @media (max-width: 920px) {
    background-color: black;
    padding: 0;
    margin-right: 0px;
  }
  & svg {
    color: black;
    font-size: 30px;
    @media (max-width: 920px) {
      color: white;
      display: inline;
    }
  }
  & input {
    background-color: transparent;
    border: none;
    outline: none;
    width: 145px;
    @media (max-width: 920px) {
      display: none;
    }
  }
`;

export const imageHeaderRight = styled.img`
  width: 100px;
  height: 80px;
  display: none;
  margin: 0 10px;
  @media (max-width: 920px) {
    display: inline;
  }
`;
