import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { EditTodoForm } from "./EditTodoForm";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "../context/AuthContext";
import { addTodoItem, deleteTodoItem } from "../firebase/initializeDatabase";

export const TodoWrapper = () => {
	const [todos, setTodos] = useState([]);
	const { user } = useAuth();

	const addTodo = (todo) => {
		const todoId = new Date().getTime().toString();
		const item = { id: todoId, task: todo, completed: false };
		setTodos([...todos, item]);
		addTodoItem(user, todoId, item);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
		console.log(id);
		deleteTodoItem(user, id);
	};

	const toggleComplete = (id) => {
		setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
	};

	const editTodo = (id) => {
		setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)));
	};

	return (
		<div className="TodoWrapper">
			<h1>
				Build Your <strong>Castle</strong>!!
			</h1>
			<TodoForm addTodo={addTodo} />
			{todos.map((todo) => (
				<Todo key={todo.id} task={todo} deleteTodo={deleteTodo} editTodo={editTodo} toggleComplete={toggleComplete} />
			))}
		</div>
	);
};
