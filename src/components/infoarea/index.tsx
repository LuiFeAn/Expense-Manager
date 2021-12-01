import * as C from './style';
import {formatCurrentMonth} from '../../helpers/datefilter'
import ResumeItem from '../../components/resumeitem'

type Props = {
    currentmonth: String,
    onmonthchange: (newMonth: string)=> void,
    receita: number,
    expanse: number,
}

const InfoArea = ({currentmonth,onmonthchange,receita,expanse}: Props) => {

    const HandlePrevMonth = ()=>{
        let [year,month] = currentmonth.split('-');
        let currentDate = new Date(parseInt(year),parseInt(month) - 1,1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onmonthchange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    const HandleNextMonth = ()=>{
        let [year,month] = currentmonth.split('-');
        let currentDate = new Date(parseInt(year),parseInt(month) - 1,1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onmonthchange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    return(
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick = {HandlePrevMonth}>Esq</C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentmonth.toString())}</C.MonthTitle>
                <C.MonthArrow onClick={HandleNextMonth}>Dir</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem value = {receita} title = "Receita"></ResumeItem>
                <ResumeItem value = {expanse} title = "Despesas"></ResumeItem>
                <ResumeItem value = {receita - expanse} title = "Balanço"></ResumeItem>
            </C.ResumeArea>
        </C.Container>
    )
}
export default InfoArea;