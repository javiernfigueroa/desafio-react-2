import { useState } from 'react';
import { Registration } from "./components/Registration";
import './App.css';

function App() {
  const [alertMessage, setAlertMessage] = useState('');
  const [alertColorClass, setAlertColorClass] = useState('');

  const setAlertColor = (result) => {
    if(result === 'ok') {
      setAlertColorClass('alert-success');
    } else {
      setAlertColorClass('alert-danger');
    }
  }

  return (
    <>
      <Registration
        alertMessage={alertMessage}
        setAlertMessage={setAlertMessage}
        alertColor={alertColorClass}
        setAlertColor={setAlertColor}
      />
    </>
  );
}

export default App;
