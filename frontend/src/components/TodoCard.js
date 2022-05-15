import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Check } from "@material-ui/icons";

function TodoCard(props) {
  return (
    <div>
      <Card>
        <CardHeader
          action={
            <IconButton onClick={() => props.handleDelete(props.todo._id)}>
              <Check />
            </IconButton>
          }
          title={props.todo.text}
          subheader={"Time needed: " + props.todo.time}
        >
        </CardHeader>
        <CardContent>
            <Typography variant="body2">Due date: {props.todo.date}</Typography>
          </CardContent>
      </Card>
    </div>
  );
}

export default TodoCard;
