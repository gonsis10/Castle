"use client";

import { useState, useEffect } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { EditTodoForm } from "./EditTodoForm";
import { useAuth } from "../context/AuthContext";
import { addTodoItem } from "../firebase/initializeDatabase";

export const TodoWrapper = () => {
	const [todos, setTodos] = useState([]);
	const { user } = useAuth();

	const addTodo = (todo) => {
		const item = { task: todo, completed: false, isEditing: false };
		setTodos([...todos, item]);
		addTodoItem(user, todo);
	};

	const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

	const toggleComplete = (id) => {
		setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
	};

	const editTodo = (id) => {
		setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)));
	};

	const editTask = (task, id) => {
		setTodos(todos.map((todo) => (todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo)));
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
