import { useState, useEffect } from "react";
import {Grid, Paper} from "@material-ui/core";

function AllTodosPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/goals")
      .then((res) => res.json())
      .then(data => setTodos(data))
  });

  return (
    <div>
      <Grid container>
        <Grid item>
          <Paper>
            1
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            2
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            3
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            4
          </Paper>
        </Grid>

      </Grid>
      {todos.map((todo) => {
        return(
        <div>
          <h3>{todo.text}</h3>
          <h2>{todo.createdAt} </h2>
        </div>);
      })}
    </div>
  );
}

export default AllTodosPage;
