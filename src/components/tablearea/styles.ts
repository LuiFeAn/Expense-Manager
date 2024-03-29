import style from 'styled-components';

export const Table = style.table`
    width: 100%;
    background-color: white;
    padding: 20px;
    box-shadow: 0px 0px 5px black;
    border-radius: 10px;
    margin-top: 20px;
`;
export const TableHeadColun = style.th<{width?: number}>`
    width: ${props=> props.width ? `${props.width}px` : "auto"}
    padding: 10px 0px;
    text-align: left;
`;