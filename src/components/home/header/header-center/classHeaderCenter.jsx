import styled from "styled-components";

export const HeaderCenterContainer = styled.div`
  background: linear-gradient(
    271.1deg,
    #ffffff -53.05%,
    #0085ed 11.67%,
    #273ccd 58.27%,
    #000000 119.54%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  & a {
    color: white;
    padding: 10px 0;
    text-decoration: none;
    text-align: center;
    & span {
      text-decoration: underline;
    }
  }
`;
