import './App.css';
import React, { useEffect, useState } from 'react';
import Datarow from './component/Datarow';

function App() {
  
  const [users, setUsers] = useState([]);

  const fetchUserData = async () => {
    return fetch("http://localhost:81/")
      .then((response) => response.json() )
      .then((data) => (data))
      .catch((error) => {
        console.warn("invalid: "+error);
      });
  };

  useEffect(() => {
    fetchUserData()
    .then(response => setUsers(response))
  }, []);
  
  return (
    
    <div className="App">
      <header className="App-header">
        <h1>Promise fetched api json</h1>
        {users.map((user, index) =>
        (
         <Datarow dataFieldId={user.id} dataFieldBreed={user.breed} 
          dataFieldColor={user.color}/>
        ))}
      </header>
    </div>
  );
}

export default App;

