import styled from 'styled-components';

export const Container = styled.div`
    & {
        background-color: white;
        width: 90%;
        margin: auto;
        margin-top: 20px;
        border-radius: 10px;
    }
`;

export const Title = styled.h1`
    text-align: center;
    padding: 20px;
`;

export const Logs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h1 {
        text-align: center;
        font-size: 18px;
        padding: 20px;
    }
`;

export const UserBox = styled.div`
    transition: 300ms;
    cursor: pointer;
    border: 1px solid #232422;
    padding-block-start: 10px;
    padding-block-end: 10px;
    padding-left: 20px;
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    align-items: center;

    &:hover {
        background-color: red;
    }

    img {
        border-radius: 50%;
        width: 45px;
    }
    p {
        padding: 20px;
        padding-left: 8px;
        word-break: break-all;
    }

    svg {
        width: 45px;
    }
`;