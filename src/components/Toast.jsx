import React, { useContext } from 'react'
import { ToastContext } from '../context/toastContext'
import './Toast.css'
import { FaCheck, FaExclamationCircle, FaExclamationTriangle, FaInfoCircle, FaRegWindowClose } from 'react-icons/fa';

const Toast = ({ position,autoDeleteInterval }) => {
    const { state, dispatch } = useContext(ToastContext)
    const generateIcon = (type) => {
        switch (type) {
            case "SUCCESS":
                return <FaCheck />
            case "INFO":
                return <FaInfoCircle />
            case "WARNING":
                return <FaExclamationTriangle />
            case "ERROR":
                return <FaExclamationCircle />
            default:
                return;
        }
    }

    const generateColor = (type) => {
        switch (type) {
            case "SUCCESS":
                return '#5cb85c'
            case "INFO":
                return '#5bc0de'
            case "WARNING":
                return '#50ad4e'
            case "ERROR":
                return '#d9534f'
            default:
                return;
        }
    }
    return (
        <div className={`notification-container ${position}`}>
            {state.map((notification, i) => {
                if(autoDeleteInterval){
                    setInterval(() => {
                        dispatch({type: 'DELETE_NOTIFICATION', payload: notification.id}) 
                    }, autoDeleteInterval);
                }
                return (
                    <div
                        key={notification.id}
                        style={{ backgroundColor: generateColor(notification.type) }}
                        className={`notification toast ${position}`}>
                        <FaRegWindowClose className="close-button" 
                        onClick = {()=> {
                            dispatch({type: 'DELETE_NOTIFICATION', payload: notification.id})
                        }} />
                        <div className='notification-image'>
                            {generateIcon(notification.type)} </div>
                        <div>
                            <p className='notification-title'> {notification.title}</p>
                            <p className='notification-msg'>{notification.message}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Toast
