import * as S from './style';
import {Item} from '../../types/Item'
import {FormatDate} from '../../helpers/datefilter'
import {categories} from '../../data/categories'

type Props = {
    data: Item
}

const TableItem = ({data}: Props)=>{
    return(
        <S.TableLine>
            <S.TableColumn>{FormatDate(data.date)}</S.TableColumn>
            <S.TableColumn>
                <S.Category color = {categories[data.category].color}>
                    {categories[data.category].title}
                </S.Category>
            </S.TableColumn>
            <S.TableColumn>{data.title.toString()}</S.TableColumn>
            <S.TableColumn>
                <S.Value color = {categories[data.category].expense ? 'red' : 'green'}>R$ {data.value.toString()}</S.Value>
            </S.TableColumn>
        </S.TableLine>
    )
}
export default TableItem;