import styled from "styled-components";
import { Theme } from "../../constants/Constants";

export const HomePageBanner = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    position: relative;
    padding-block: 50px;
    overflow: hidden;
    & .title {
        color: var(--bs-emphasis-color);
    }

    & .description {
        font-size: 1.2rem;
    }

    &::before {
        content: '';
        position: absolute;
        display: block;
        background-color: ${({theme}) => theme === Theme.DARK ? '#415a77' : '#bde0fe'};
        width: 150%;
        height: 70%;
        top: 30px;
        left: -30px;
        z-index: -10;
        transform: rotate(-2deg);
    }
`;
