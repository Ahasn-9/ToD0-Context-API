import { createContext, useContext} from "react";


export const ToDoContext = createContext({
    Todos: [
        {
            id: 1,
            todo: "To Do 1",
            completed: false,
        },
        

    ],
    addToDo: (todo) => {},
    deleteToDo: (id) => {},
    updateToDo: (id, todo) => {},
    toggleComplete: (id) => {},
}); 


export const useToDo = () => {
    return useContext(ToDoContext);

}

export const ToDoProvider = ToDoContext.Provider;
