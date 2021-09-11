import react, { useContext, useReducer, createContext } from "react";
import { v4 as uuidv4 } from 'uuid';

export const ToastContext = createContext();
export const ToastContextProvider = (props) => {
    const notifications = [{
        id: uuidv4(),
        type: "SUCCESS",
        title: "Sucess",
        message: "Successfully completed all the posts"
    },
    {
        id: uuidv4(),
        type: "INFO",
        title: "Informational title",
        message: "Informational message"
    },
    {
        id: uuidv4(),
        type: "WARNING",
        title: "Warning title",
        message: "Warning message"
    }, {
        id: uuidv4(),
        type: "ERROR",
        title: "Error title",
        message: "Error message"
    }
    ];
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "ADD_NOTIFICATION":
                return [...state, action.payload];
            case "DELETE_NOTIFICATION":
                return state.filter(notification => notification.id !== action.payload)
            default:
                return state;
        }
    }, notifications)


    return (
        <ToastContext.Provider value={{ state, dispatch }} >
            {props.children}
        </ToastContext.Provider>
    )
}