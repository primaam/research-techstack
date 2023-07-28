import './App.css';
import TodoRowItem from './components/TodoRowItem';
import React from 'react';

function App() {
  const [todosState, setTodosState] = React.useState([])

  const addTodo = ()=>{
    if(todosState.length > 0){
      const newTodo = {
        rowNumber: todosState.length+1,
        rowDescription: `description ${todosState.length + 1}`,
        rowAssigned: `user ${todosState.length +1}`
      }
      setTodosState([...todosState, newTodo])
     
    }else{
      const newTodo = {
        rowNumber: 1,
        rowDescription: `description 1`,
        rowAssigned: `user 1`
      }
      setTodosState([newTodo])
      
    }
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header' style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',display: 'flex', flex:1}}>
          <div>
            Your Todo's
          </div>
          <button className='btn btn-primary' onClick={addTodo}>
            Add New Todo
          </button>
        </div>
        <div className='card-body'>
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
