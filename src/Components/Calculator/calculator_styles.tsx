import styled from 'styled-components';

export const NumberCard = styled.span`
    padding: 5px 15px;
    background-color: green;
    margin: 10px 5px;
    text-align: center;
    color: white;
`;

export const DevelopmentDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    overflow: scroll;
    color: white;
`;

export const Main = styled.main`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
    min-height: 1000px;
    background: #000000b0;
    color: white;

    input {
        background: none;
        border: none;
        padding: 20px;
        border-bottom: 2px solid white;
        color: white;
    }
`;

export const Result = styled.div`
    width: 100%;
    min-height: 120px;
    max-height: 400px;
    height: 700px;
    overflow-y: scroll;

    text-align: center;
    color: yellow;
    font-weight: bold;
    word-break: break-word;
    overflow-wrap: wrap;
    padding: 50px;
`;
