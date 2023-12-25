import styled  from 'styled-components'

export const AppRoot = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    header, footer {
        flex: 0 0 auto;
    }
    main {
        flex: 1 0 auto;
    }
`;