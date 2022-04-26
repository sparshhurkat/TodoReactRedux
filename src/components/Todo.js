import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../redux/actions";
import { removeTodo } from "../redux/actions";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import CloseIcon from '@mui/icons-material/Close';

const Todo = ({ todo, toggleTodo, removeTodo }) => (

    
  <ListItem alignItems="flex-start" className="todo-item" >
      <ListItemIcon sx={{minWidth:"10", margin:"0"}} onClick={() => toggleTodo(todo.id)}>
    {todo && todo.completed ?  <CheckCircleOutlineRoundedIcon fontSize="large" /> : <RadioButtonUncheckedRoundedIcon fontSize="large" /> }{" "}
    </ListItemIcon >
      <ListItemText primary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline', verticalAlign:'middle' }}
                component="span"
                variant="body1"
                color="text.primary"
              >
                {todo.content}
              </Typography>
            </React.Fragment>
          } />
           <ListItemIcon onClick={() => removeTodo(todo.id)} ><CloseIcon  /></ListItemIcon>
  </ListItem>
);

// export default Todo;
export default connect(
  null,
  { toggleTodo,removeTodo }
)(Todo);
