import React from "react";
import { Edit, Trash } from "lucide-react";

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
	return (
		<div className="Todo">
			<p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>
				{task.task}
			</p>
			<div className="flex gap-4">
				<Edit className="edit-icon" onClick={() => editTodo(task.id)} />
				<Trash className="delete-icon" onClick={() => deleteTodo(task.id)} />
			</div>
		</div>
	);
};
