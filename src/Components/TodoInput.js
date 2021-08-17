import React from 'react'
import { TextField, Button } from '@material-ui/core'
const TodoInput = (props) => {
  return (
    <div>
      <TextField
        label="Enter Detail"
        name="input"
        value={props.input}
        onChange={(e) => props.setInput(e.target.value)}
      ></TextField>
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginTop: 7 }}
        onClick={props.addHandler}
      >
        Add Todo
      </Button>
    </div>
  )
}

export default TodoInput
