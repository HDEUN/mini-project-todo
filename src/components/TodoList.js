//목록을 랜더링하고 CRUD 작업을 처리하기 위한 상태 포함
import React, {useState} from 'react';
import Modal from 'react-modal';

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Task 1', completed: false },
        { id: 2, text: 'Task 2', completed: true },
        { id: 3, text: 'Task 3', completed: false }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Modal
    const openModal = () => { setIsModalOpen(true); };
    const closeModal = () => { setIsModalOpen(false); };

    // input
    const handleInputChange = (event) => { setInputValue(event.target.value); };

    // todo lis Add
    const handleAddTodo = () => { 
        const newTodo = { id: Date.now(), text: 'Task 1', completed: false };
        setTodos([...todos, newTodo]);
        setInputValue('');
        closeModal();
    }

    const handleToggleTodo = (id) => {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        }));
    }

    const handleEditTodo = (id, newText) => {
        setTodos(
            todos.map((todo) => {
                if(todo.id === id) {
                    return {...todo, text: newText};
                }
                return todo;
            }));
    }

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }


    return (
        <>
            <div className="header">
                <button onClick={openModal}>Add Todo</button>
                <Modal isOpen={isModalOpen}>
                    <input type="text" value={inputValue} onChange={handleInputChange} />
                    <button onClick={handleAddTodo}>Add</button>
                    <button onClick={closeModal}>Close</button>
                </Modal>
            </div>

            <ul className='TodoList'>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input 
                            type="checkbox" 
                            checked={todo.completed}
                            onChange={() => handleToggleTodo(todo.id)}
                        />
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
                        <button onClick={() => handleEditTodo(todo.id, prompt('Enter new text:'))}>Edit</button>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}


export default TodoList;