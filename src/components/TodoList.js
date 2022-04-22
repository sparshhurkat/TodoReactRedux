import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
// import { getTodos } from "../redux/selectors";
import { getTodosByVisibilityFilter } from "../redux/selectors";
import { VISIBILITY_FILTERS } from "../constants";
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import store from '../redux/store';

const TodoList = ({ todos }) => (
    
    <Box sx={{ margin:"auto",maxWidth: 500, bgcolor: 'background.paper' }}>
    <List disablePadding sx={{border:'1px solid lightGrey'}}>
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo todo={todo} />;
        })
      : ""}
      </List>
      {store.getState().todos.allIds.length} items left
      </Box>
);

// const mapStateToProps = state => {
//   const { byIds, allIds } = state.todos || {};
//   const todos =
//     allIds && state.todos.allIds.length
//       ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
//       : null;
//   return { todos };
// };

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};
// export default TodoList;
export default connect(mapStateToProps)(TodoList);
