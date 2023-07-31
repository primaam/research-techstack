import React from "react"

const TodoRowItem = React.forwardRef((props, _ref)=>{
    const [todosState, setTodosState] = React.useState([])
    
    React.useImperativeHandle(_ref, ()=>({
        getTodosList: ()=>{
            return todosState
        },
        setTodoLists:(arr)=>{
            return setTodosState(arr)
        }
    }))

    const deleteTodoRow = (id)=>{
        const filterId = todosState.filter((item)=> item.rowNumber !== id)
        
        if(todosState.length >1 ){
          const filterBeforeJoin = filterId.filter((item)=> item.rowNumber < id)
          const filterUpdated = filterId.filter((item)=> item.rowNumber >= id).map((item)=> {
            return {
              ...item,
              rowNumber: item.rowNumber -1,
            }
          })
    
          id === 1 ? setTodosState(filterUpdated) : setTodosState(filterBeforeJoin.concat(filterUpdated))
        }else{
          setTodosState(filterId)
        }
    
    }
    console.log("test re-render")
    return (
        <tbody>
            {todosState.map((item)=>{
                return (
                    <tr key={item.rowNumber}>
                        <th scope='row'>{item.rowNumber}</th>
                        <td>{item.rowDescription}</td>
                        <td>{item.rowAssigned}</td>
                        <td>
                            <button onClick={() => deleteTodoRow(item.rowNumber)} name="delete" type='button' className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                )
            })}
           
        </tbody>
    )
})

export default TodoRowItem