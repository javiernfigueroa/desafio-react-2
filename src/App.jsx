import { useState } from 'react';
import { Registration } from "./components/Registration";
import './App.css';

function App() {
  const [alertMessage, setAlertMessage] = useState('');
  const [alertColor, setAlertColor] = useState('');
  return (
    <>
      <Registration
        alertMessage={alertMessage}
        setAlertMessage={setAlertMessage}
        alertColor={alertColor}
        setAlertColor={setAlertColor}
      />
    </>
  );
}

export default App;
