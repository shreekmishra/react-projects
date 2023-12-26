import styled from "styled-components";
import { Theme } from "../../constants/Constants";

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  & .banner {
    align-content: center;
    text-align: center;
    position: relative;
    padding-block: 35px;
    overflow: hidden;
    background-color: ${({ theme }) => theme === Theme.DARK ? "#415a77" : "#bde0fe"};
    clip-path: polygon(0 0, 100% 0%, 100% 84%, 0% 100%);
    & .title {
      color: var(--bs-emphasis-color);
    }

    & .description {
      font-size: 1.2rem;
    }
  }
  & .details {
    padding-top: 20px;
  }
`;
