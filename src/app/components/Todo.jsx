import React from "react";
import { Menu } from "lucide-react";

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
	return (
		<div className="Todo">
			<p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>
				{task.task}
			</p>
			<div>
				<Menu className="edit-icon" onClick={() => editTodo(task.id)} />
				<Menu className="delete-icon" onClick={() => deleteTodo(task.id)} />
			</div>
		</div>
	);
};
