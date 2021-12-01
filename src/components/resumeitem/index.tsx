import * as S from './style';

type Props = {
    value: number,
    title: string,
    color?: string,
}

const ResumeItem = ({value,title}: Props) => {
    return(
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.Value color = {value <= 0 ? 'red' : 'green'}> R$ {value}</S.Value>
        </S.Container>
    );
}
export default ResumeItem;