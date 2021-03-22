import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

const AddForm = () => {
  const refContainer = useRef(null)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ content: refContainer.current.value })
    refContainer.current.value = ''
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
