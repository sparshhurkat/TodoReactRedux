import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import OutlinedInput from '@mui/material/OutlinedInput';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

    handleSubmit = e => {
    e.preventDefault();
    this.state.input && this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <FormControl variant="standard">
        <form onSubmit={this.handleSubmit} >
        <OutlinedInput
            id="input-with-icon-adornment"
            sx={{ width: 500 }}
            startAdornment={
                <InputAdornment position="start">
                    <KeyboardArrowDownIcon />
                </InputAdornment>}
            value={this.state.input}
            autoComplete="off"
            placeholder="What needs to be done?"
            onChange={e => this.updateInput(e.target.value)}
        />
        </form>
        
        {/* <button className="add-todo" onClick={this.handleSubmit}>
          Add Todo
        </button> */}
        </FormControl>
        
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
// export default AddTodo;
