import * as S from './styles'
import {Item} from '../../types/Item'
import TableItem from '../tableitem'

type props = {
  list: Item[],
}

export const TableArea = ({list}:props) => {
    return(
      <S.Table>
          <thead>
                <S.TableHeadColun width = {100}>Data:</S.TableHeadColun>
                <S.TableHeadColun width = {130}>Categoria:</S.TableHeadColun>
                <S.TableHeadColun>Título:</S.TableHeadColun>
                <S.TableHeadColun width = {150}>Valor:</S.TableHeadColun>
          </thead>
          <tbody>
            {list.map((ele,id)=>(
              <TableItem key = {id} data = {ele}/>
            ))}
          </tbody>
      </S.Table>
    );
}