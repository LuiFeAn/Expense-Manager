import style from 'styled-components';

export const Container = style.div`
    background-color: white;
    box-shadow: 0px 0px 5px black;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    gap: 20px;
    
    input{
        border-radius: 10px;
        height: 30px;
    }

    button{
        margin-left: 10px;
        weight: 20px;
    }
`;