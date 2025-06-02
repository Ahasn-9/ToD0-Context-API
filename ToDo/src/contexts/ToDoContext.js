import { createContext, useContext} from "react";


export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "To Do 1",
            completed: false,
        },
        

    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleComplete: (id) => {},
}); 


export const useTodo = () => {
    return useContext(ToDoContext);

}

export const ToDoProvider = ToDoContext.Provider;
