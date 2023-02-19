import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { completeTodo, deleteTodo, editTodo  } from '../../store/todo/todoSlice'
import Button from '../Button';
import styled from 'styled-components';

const TodoList = ({item}) => {

const dispatch = useDispatch();

const [editValue, setEditValue] = useState("")
const [isEditTodo, setEditTodo] = useState(false)

const onChangeHandler = (e)=>{
  setEditValue(e.target.value)
}
const saveHandler =()=>{
  dispatch(editTodo({ id: item.id, title: editValue }))
    setEditTodo(false)
}

const editHandler =()=>{
      setEditTodo(true)
      setEditValue(item.title)
}

const deleteHandler =()=>{
  dispatch(deleteTodo(item.id))
  console.log("DELETE",item);
}

const completeHandler =()=>{
    dispatch(completeTodo(item.id))
  
}

  return (
    <div>
      { isEditTodo ? (
      <>
      <StyleSave>
      <Input 
             type="text"
             value={editValue}
             onChange={onChangeHandler} />
      <Button text="Save" onClick={saveHandler}/>
      </StyleSave>
     
      </>
      ) : (
      <>
      <Container>
      
      {<p className={`${item.completed ? "uncomplete" : "complete"}`}>{item.title}</p>}
      <Button text="Complete" onClick={completeHandler}/>
      <Button text="Edit" onClick={editHandler}/>
      <Button text="Delete" onClick={deleteHandler}/>
      </Container>  
      </>
  )}
    </div>
  )
}

export default TodoList;

const Container = styled.div`
  background-color: #0ca848;
  border-radius:7px;
  width:55vw;
  padding: 12px 20px;
  margin:  0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 22px;
  gap:1rem;
  color: #eef5c6;
  
  .uncomplete{
    text-decoration:line-through;
    color: #0b055e;
  }
  .complete {
    color: #eef5c6;
  }
`
const Input = styled.input`
  height: 35px;
  width: 460px;
  border-radius: 9px;
  border: 2px solid #07af1d;
  background-color: #6be705;
  font-size: 18px;

`
const StyleSave = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`