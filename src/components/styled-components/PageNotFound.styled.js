import styled from "styled-components";

export const PageNotFoundLayout = styled.div`
  width: 450px;
  text-align: center;
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-family: montserrat, sans-serif;
    font-size: 250px;
    font-weight: 900;
    line-height: 200px;
    letter-spacing: -40px;
    
    & span {
      text-shadow: -8px 2px 0 var(--bs-body-bg);
    }
  }
`;
