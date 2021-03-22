import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

const AddForm = () => {
  const refContainer = useRef(null)
  const dispatch = useDispatch()

  const addToDo = (content) => {
    dispatch({type: 'NEW_TO_DO', payload:content})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    addToDo({content: refContainer.current.value})

    refContainer.current.value = ""
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add new todo:</label>
        <input type='text' ref={refContainer} />
      </form>
    </div>
  )
}

export default AddForm
