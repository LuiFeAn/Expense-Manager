import * as S from './style'
import {Item} from '../../types/Item'
import React, { useState,useEffect} from 'react';

type Props = {
    onAdd: (item:Item) => void;
}

const InputArea = ({onAdd}:Props) => {
    const [category,setCategory] = useState('');
    const [title,setTitle] = useState('');
    const [value,setValue] = useState(0);
    const [date,setDate] = useState(new Date);

    const HandleAddEvent = ()=>{
        setTitle('');
        setValue(0);
        setTitle('');
        
        let newItem: Item = {
            date: date,
            category: category,
            title: title,
            value: value,

        }
        onAdd(newItem);
    }
    const handleDate = (e:any)=>{
        setDate(e.target.value);
    }
    const handleCategory = (e:any)=>{
        setCategory(e.target.value);
    }
    const handleTitle = (e: any)=>{
        setTitle(e.target.value);
    }
    const handleValue = (e:any)=>{
        setValue(parseInt(e.target.value));
    }
    return(
        <S.Container>
            <input placeholder="Categoria" onChange={handleCategory} type="text" />
            <input placeholder="Título" onChange={handleTitle} value = {title} type="text" />
            <input placeholder="Valor" onChange={handleValue} type="number" />
           <button onClick={HandleAddEvent}>Adicionar</button>
        </S.Container>
    )
}
export default InputArea;