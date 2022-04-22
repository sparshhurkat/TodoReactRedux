import './App.css';
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import VisibilityFilters from "./components/VisibilityFilters"
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Typography variant="h1">
      todos
    </Typography>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}

export default App;
