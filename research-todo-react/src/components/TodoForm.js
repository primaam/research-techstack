import React, { forwardRef, useImperativeHandle } from 'react';

const TodoForm = forwardRef ((props, _ref)=>{

    const [assignedState, setAssignedState] = React.useState("")
    const [descState, setDescState] = React.useState("");

    const handleFormChange = (e)=>{
        const {value, name} = e.target
        
        switch (name) {
          case "assigned":
            setAssignedState(value)
            break;
          case "desc":
            setDescState(value)
            break;
    
          default:
            break;
        }
    }

    useImperativeHandle(_ref, ()=>({
        getAssignedState:()=>{
            return assignedState
        },
        getDescState:()=>{
            return descState
        },
        setDefaultState:()=>{
            setAssignedState("")
            setDescState("")
        }
    }))
    // const {
    //     assignedValue,
    //     descValue,
    //     handleFormChange,
    //     handleSubmit,
    // } = props

    return (
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Assigned</label>
                    <input name={"assigned"}  onChange={handleFormChange} value={assignedState} type='text' className='form-control' required></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea name={"desc"} onChange={handleFormChange} value={descState} className='form-control' required rows={3}></textarea>
                </div>
                
            </form>
        </div>
    )
})

export default TodoForm;