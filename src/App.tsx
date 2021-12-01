import React, { useState,useEffect} from 'react';
import * as C from './App.style'
import {items} from './data/items';
import {categories} from './data/categories';
import {Item} from './types/Item';
import {dataFilter,monthFilter} from './helpers/datefilter'
import { TableArea } from './components/tablearea';
import InfoArea from './components/infoarea';
import InputArea from './components/inputareaa';

const App = ()=>{

  const [list, setList] = useState(items);
  const [filterdList, setFilterdList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(dataFilter());
  const [receita,setReceita] = useState(0);
  const [expanse,setExpanse] = useState(0);

  const handleMonthChange = (newMonth: string)=>{
      setCurrentMonth(newMonth);
  }

  const HandleAddItem = (item: Item)=>{
      let newList = [...list];
      newList.push(item);
      setList(newList);
  }

  useEffect(()=>{
    setFilterdList(monthFilter(list,currentMonth));
  },[list,currentMonth])

  useEffect(()=>{
    let receita = 0;
    let expanse = 0;

    for(let i in filterdList){
      if(categories[filterdList[i].category].expense){
        expanse += filterdList[i].value;
      }
      else{
        receita += filterdList[i].value;
      }
    }
    setReceita(receita);
    setExpanse(expanse);
  },[filterdList])
  return(
    <C.Container>
      <C.Header>
       <C.HeaderText>
          Sistema Financeiro
       </C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea receita = {receita} expanse = {expanse} onmonthchange = {handleMonthChange} currentmonth = {currentMonth}/>
        <InputArea onAdd = {HandleAddItem}/>
       <TableArea list = {filterdList}/>
      </C.Body>
    </C.Container>
  );
}
export default App