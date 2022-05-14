import { useState, useEffect } from "react";
import {Container, Grid} from "@material-ui/core";
import TodoCard from "../components/TodoCard";

function AllTodosPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/goals")
      .then((res) => res.json())
      .then(data => setTodos(data))
  });

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/api/goals/" + id, {
      method: 'DELETE'
    })

    const newTodos = todos.filter(todo => todo._id !== id)
    setTodos(newTodos)
  }

  return (
    <Container>
      <Grid container spacing={3}>
      {todos.map(todo => (
        <Grid item key={todo._id} xs={12} md={6} lg={4}>
          <TodoCard todo={todo} handleDelete ={handleDelete}/>
        </Grid>  
      ))}
      </Grid>
    </Container>
  );
}

export default AllTodosPage;
