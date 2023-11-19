import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [testMessage, setTestMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/test", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setTestMessage(data.message);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>This was returned from the backend:</h2>
      {testMessage && <p>{testMessage}</p>}
    </div>
  )
}

export default App
