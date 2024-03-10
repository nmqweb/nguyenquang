import styled from "styled-components";

export const imgHeaderTop = styled.img`
  width: 100px;
  height: 40px;
  overflow: hidden;
`;
export const HeaderTopContain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 10px;
  @media (max-width: 920px) {
    justify-content: center;
  }
  & div:last-child {
    @media (max-width: 920px) {
      display: none;
    }
  }
  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      list-style: none;
      & li {
        padding: 17px 10px;
        display: flex;
        align-items: center;
        font-size: 16px;
        &:hover {
          background-color: #f0f0f0;
        }
      }
    }
  }
`;

export const ConatainerRight = styled.div`
  @media (max-width: 920px) {
    display: none;
  }
`;
