import React, { useState } from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from "react-redux"
import { addTodo, clearTodo} from '../../store/todo/todoSlice'
import TodoList from './TodoList'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import { v4 } from 'uuid'
import { logout } from '../../store/auth/authSlice'

const Todo = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [todoList, setTodoList] = useState("")
  const { todo } = useSelector((state)=> state) 


const onChangeHandler =(e)=>{
  setTodoList(e.target.value)
}

const addHandler =(e)=>{
  e.preventDefault();
const newTodo = {
  title: todoList,
  id: v4(), 
  completed: false
}
dispatch(addTodo(newTodo))
setTodoList("")


}

const deleteAllHandler =(e)=>{
    dispatch(clearTodo())
     e.preventDefault();
}

const logoutHandler =(e)=>{
  e.preventDefault();
  dispatch(logout() && clearTodo());
   navigate("/login")
}
  return (
    <>
   <Logout>
   <Button  color="#032750" text="Logout" onClick={logoutHandler}></Button>
   </Logout>
      <Container>
      
        <Input 
              type="text"
              value={todoList}
              onChange={onChangeHandler} />
       <ContainerBtn>
       <Button onClick={addHandler} bgColor="violet" text="Add" ></Button>
        <Button bgColor="violet" text="Delete - All" onClick={deleteAllHandler}></Button>
       </ContainerBtn>
      </Container>
      <ItemList>
      {todo.todo.map((item)=>(
        <TodoList  
                  key={item.id} item={item}/>))}
        
      </ItemList>
      
      </>
      )
}

export default Todo;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top:1rem;
` 

const Container = styled.header`
  display: flex;  
  justify-content: center;
  align-items: center;
  gap:1rem;
  width: 900px;
  height: 80px;
  margin-left:5rem ;
  margin-top: 8.5rem;
  border-radius: 9px;
  background-color: #05834e;
  border: 2px solid #046d27;


`
const Input= styled.input`
  height: 36px;
  width: 460px;
  border-radius: 9px;
  border: 2px solid #7d8194;
`
const Logout = styled.div`
  position: fixed;
  top: 0%;
  padding-top:24px;
  background-color: #7c0e00;
  width: 100%;
  height:12vh;
`
const ContainerBtn = styled.div`
  display: flex;
  gap: 1rem;
  margin-left:7rem;

`