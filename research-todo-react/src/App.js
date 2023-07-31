import './App.css';
import TodoForm from './components/TodoForm';
import TodoRowItem from './components/TodoRowItem';
import React, { useRef } from 'react';

function App() {

  const formRef = useRef();
  const rowItemRef = useRef();

  const handleTodoChange = ()=>{
    const getAssigned =  formRef.current.getAssignedState()
    const getDesc = formRef.current.getDescState()
    const getTodosList = rowItemRef.current.getTodosList()
    
    try{
      if(getAssigned.length > 0 && getDesc.length > 0){
        const newTodo = {
          rowNumber: getTodosList.length+1,
          rowDescription: getDesc,
          rowAssigned: getAssigned
        }
        rowItemRef.current.setTodoLists([...getTodosList, newTodo])
        
      }
    }catch(e){
      console.error(e)
    }finally{
      formRef.current.setDefaultState()
    }
  }

  

  console.log("test render")
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header' style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',display: 'flex', flex:1}}>
          <div>
            Your Todo's
          </div>
          {/* <button className='btn btn-primary' onClick={addTodo}>
            Add New Todo
          </button> */}
        </div>
        <div className='card-body'>
        <TodoForm 
          ref={formRef}
        />
        <button name='submit' onClick={handleTodoChange} type='button' className='btn btn-primary mt-3'>Add Todo</button>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Decription</th>
                <th scope='col'>Assigned</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <TodoRowItem
              ref={rowItemRef}
            />
            
          </table>

        
        </div>
      </div>
    </div>
  );
}

export default App;
