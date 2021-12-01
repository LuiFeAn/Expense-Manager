import style from 'styled-components';

export const Container = style.div`
    flex: 1;
    font-weight: bold;
`;
export const Title = style.div`
    text-align: center;
    color: black;
    margin-bottom: 5px;
`;
export const Value = style.div<{color?: string}>`
    text-align: center;
    color: ${props=>props.color ?? 'black'}
`;