import style from 'styled-components';
export const Container = style.div`
    background-color: white;
    box-shadow: 0px 0px 5px black;
    border-radius: 10px;
    padding: 20px;
    margin-top: -40px;
    display: flex;
    align-items: center;
    user-select: none;
`;
export const MonthArea = style.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
export const MonthArrow = style.div`
    width: 40px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
`;
export const MonthTitle = style.div`
    flex: 1;
    text-align: center;
`;
export const ResumeArea = style.div`
    flex: 2;
    display: flex;
`;