import React from 'react'
import {Card, CardHeader, IconButton} from "@material-ui/core";
import {Check} from "@material-ui/icons";

function TodoCard(props) {
    return (
        <div>
            <Card>
                <CardHeader
                action={
                    <IconButton onClick={() => props.handleDelete(props.todo._id)}>
                        <Check />
                    </IconButton>}
                title={props.todo.text}
                subheader={"3"}>
                </CardHeader>
            </Card>
        </div>
    )
}

export default TodoCard;