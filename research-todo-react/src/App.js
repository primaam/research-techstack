import './App.css';
import TodoForm from './components/TodoForm';
import TodoRowItem from './components/TodoRowItem';
import React, { useRef } from 'react';

function App() {
  const [todosState, setTodosState] = React.useState([])

  const formRef = useRef();
  const rowItemRef = useRef();

  const addTodo = ()=>{
    const getAssigned =  formRef.current.getAssignedState()
    const getDesc = formRef.current.getDescState()

    try{
      if(getAssigned.length > 0 && getDesc.length > 0){
        const newTodo = {
          rowNumber: todosState.length+1,
          rowDescription: getDesc,
          rowAssigned: getAssigned
        }
        setTodosState([...todosState, newTodo])
      }
    }catch(e){
      console.error(e)
    }finally{
      formRef.current.setDefaultState()
    }
  }

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
        <button onClick={addTodo} type='button' className='btn btn-primary mt-3'>Add Todo</button>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Decription</th>
                <th scope='col'>Assigned</th>
              </tr>
            </thead>
            <tbody>
              {todosState?.map((item, i)=>{
                return(
                  <TodoRowItem
                    key={i}
                    rowDescription={item.rowDescription}
                    rowNumber={item.rowNumber}
                    rowAssigned={item.rowAssigned}
                  />
                )
              })}
            </tbody>
          </table>

        
        </div>
      </div>
    </div>
  );
}

export default App;
