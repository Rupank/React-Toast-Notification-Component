import { useContext, useState } from 'react';
import Toast from './components/Toast';
import { ToastContext } from './context/toastContext';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
function App() {
  const [position, setPosition] = useState('top-left');
  const { state, dispatch } = useContext(ToastContext);
  const handleButtonSelect = (type) => {
    switch (type) {
      case 'SUCCESS':
        return dispatch({
          type: "ADD_NOTIFICATION",
          payload: {
            id: uuidv4(),
            type,
            title: "Success",
            message: "Rupank Success Message"
          }
        });
      case 'INFO':
        return dispatch({
          type: "ADD_NOTIFICATION",
          payload: {
            id: uuidv4(),
            type,
            title: "Info",
            message: "Rupank Info Message"
          }
        });
      case 'WARNING':
        return dispatch({
          type: "ADD_NOTIFICATION",
          payload: {
            id: uuidv4(),
            type,
            title: "WARNING",
            message: "Rupank WARNING Message"
          }
        });
      case 'ERROR':
        return dispatch({
          type: "ADD_NOTIFICATION",
          payload: {
            id: uuidv4(),
            type,
            title: "ERROR",
            message: "Rupank ERROR Message"
          }
        });

      default:
        return;
    }
  }
  return (
    <div>
      <div className="main-content">
        <button className="button button-success" onClick={() => handleButtonSelect("SUCCESS")}>
          SUCCESS
        </button>
        <button className="button button-info" onClick={() => handleButtonSelect("INFO")}>
          INFO
        </button>
        <button className="button button-warning" onClick={() => handleButtonSelect("WARNING")}>
          WARNING
        </button>
        <button className="button button-error" onClick={() => handleButtonSelect("ERROR")}>
          ERROR
        </button>
        <select
          value={position}
          onChange={(e) => {
            setPosition(e.target.value);
          }}
          name=""
          id=""
          className="position-select"
        >
          <option value="top-left">Top Left</option>
          <option value="bottom-left">Bottom Left</option>
          <option value="top-right">Top Right</option>
          <option value="bottom-right">Bottom Right</option>
        </select>
      </div>
      <Toast position={position} autoDeleteInterval={4000} />
    </div>
  );
}

export default App;
