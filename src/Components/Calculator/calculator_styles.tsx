import styled from 'styled-components';

export const NumberCard = styled.span`
    padding: 5px 15px;
    background-color: green;
    margin: 10px 5px;
    text-align: center;
`;

export const DevelopmentDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    overflow: scroll;
`;

export const Main = styled.main`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
    min-height: 1000px;
`;

export const Result = styled.div`
    border-radius: 15%;
    width: 400px;
    min-height: 120px;
    max-height: 100px;
    text-align: center;
    color: black;
    font-weight: bold;
    word-break: break-word;
    overflow-wrap: wrap;
    overflow-y: scroll;

    padding: 50px;
`;
