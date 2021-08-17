import React from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core'
const TodoDisplay = (props) => {
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <h3>Todo Liste Here</h3>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.todos.length > 0 &&
              props.todos.map((list, index) => (
                <TableRow key={index}>
                  <TableCell align="inherit">{list && index + 1}</TableCell>
                  <TableCell align="left">{list && list}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default TodoDisplay
