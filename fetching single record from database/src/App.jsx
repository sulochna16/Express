import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [userinfo, setuserinfo] = useState({});
  const [textbox, settextbox] = useState('');

  const handleExchange = (event) => {
    settextbox(event.target.value);
  };

  const clickButton = () => {
    // Make the API request with the updated URL.
    axios.get(`http://localhost:3002/student/${textbox}`)
      .then((response) => {
        setuserinfo(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <input type='text' value={textbox} onChange={handleExchange}></input>
      <button onClick={clickButton}>Click Here</button>
      <table>
        <thead>
          <tr>
            <th>Eid</th>
            <th>Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{userinfo.eid}</td>
            <td>{userinfo.name}</td>
            <td>{userinfo.salary}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;