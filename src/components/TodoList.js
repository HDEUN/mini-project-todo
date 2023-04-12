//목록을 랜더링하고 CRUD 작업을 처리하기 위한 상태 포함
import React, {useState} from 'react';
import Modal from 'react-modal';
import "./TodoList.css";
import { AppTitle } from "../pages/styled";


Modal.setAppElement('#root');

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Mornimg Run', completed: false },
        { id: 2, text: 'Call Grandma', completed: true },
        { id: 3, text: 'Go to the gym', completed: false }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState('');
    const [editingTodoId, setEditingTodoId] = useState(null);
    const [deleteTodoId, setDeleteTodoId] = useState(null);

    // Modal
    const openModal = (type) => { 
        setModalType(type);
        setIsModalOpen(true);
     };
    const closeModal = () => { 
        setModalType('');
        setIsModalOpen(false); 
    };
    const handleModalAction = () => {
        if(modalType === 'add') {
            handleAddTodo();
        } else if (modalType === 'edit') {
            handleEditTodo();
        } else if (modalType === 'delete') {
            handleDeleteTodo();
        }
    }

    // input
    const handleInputChange = (event) => { setInputValue(event.target.value); };

    //  Add
    const handleAddTodo = () => { 
        const newTodo = { id: Date.now(), text: inputValue, completed: false };
        setTodos([...todos, newTodo]);
        setInputValue('');
        closeModal();
    }

    // toggle
    const handleToggleTodo = (id) => {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        }));
    }

    // edit
    const handleEditTodo = () => {
        setTodos(
            todos.map((todo) => {
                if(todo.id === editingTodoId) {
                    return {...todo, text: inputValue};
                }
                return todo;
            })
        );
        setInputValue('');
        closeModal();
    }

    const handleEditButtonClick = (id, text) => {
        setEditingTodoId(id);
        setInputValue(text);
        openModal('edit');
    }
    
    // delete
    const handleDeleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== deleteTodoId));
        setDeleteTodoId(null);
        closeModal();
    };

    
    return (
        <div className="inner-wrapper">
            <div className='list-wrapper'>
                <div className="header">
                    <AppTitle fs24>ToDoList</AppTitle>
                    <h5>This week</h5>
                    <button onClick={() => openModal('add')}>Add Todo</button>
                    <Modal isOpen={isModalOpen} className="custom-modal">
                        {modalType === 'add' && (
                            <>
                                <input type="text" value={inputValue} onChange={handleInputChange} />
                                <button onClick={handleModalAction}>Add</button>
                            </>
                        )}
                        {modalType === 'delete' && (
                            <>
                                <p>Are you sure you want to delete this todo?</p>
                                <button onClick={handleModalAction}>Yes</button>
                            </>
                        )}
                        {modalType === 'edit' && (
                            <>
                                <input type='text' value={inputValue} onChange={handleInputChange} />
                                <button onClick={handleModalAction}>Save</button>
                            </>
                        )}
                        <button onClick={closeModal}>Cancle</button>
                    </Modal>
                </div>

                <ul className='TodoList'>
                    {todos.map((todo) => (
                        <li 
                            key={todo.id} 
                            className={todo.completed ? "complete" : ""}
                            onClick={() =>handleToggleTodo(todo.id)}
                        >
                            <input 
                                type="checkbox" 
                                checked={todo.completed}
                                onChange={() => handleToggleTodo(todo.id)}
                                id={`${todo.id}`}
                            />
                            <label htmlFor={`${todo.id}`} className={todo.completed ? "complete" : ""}>{todo.text}</label>
                            <button onClick={() => { setDeleteTodoId(todo.id); openModal('delete'); }}
                             className={todo.completed ? "complete" : ""}>
                                Delete
                            </button>
                            <button onClick={() => handleEditButtonClick(todo.id, todo.text)}
                             className={todo.completed ? "complete" : ""}>
                                Edit
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


export default TodoList;