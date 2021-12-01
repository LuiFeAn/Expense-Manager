import style from 'styled-components';

export const TableLine = style.tr``;
export const TableColumn = style.td`
    padding: 10px 0px;
    font-weight: bold;
`;
export const Category = style.div<{color: string}>`
    display: inline-block;
    padding: 8px;
    border-radius: 10px;
    color: #FFF;
    background-color: ${prop=>prop.color}

`;
export const Value = style.div<{color: string}>`
    color: ${props => props.color}
`;