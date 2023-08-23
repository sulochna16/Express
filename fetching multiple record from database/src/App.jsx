import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [userInfo, setUserInfo] = useState([]);
  const [textbox, setTextBox] = useState('');

  const handleEvent = (event) => {
    setTextBox(event.target.value);
  };

  const button_click = () => {
    axios.get(`http://localhost:3002/students/${textbox}`)
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <input type="text" value={textbox} onChange={handleEvent} />
      <button onClick={button_click}>Click Here</button>

      <table>
        <thead>
          <tr>
            <th>eid</th>
            <th>name</th>
            <th>salary</th>
          </tr>
        </thead>
        <tbody>
          {userInfo.map((user, index) => (
            <tr key={index}>
              <td>{user.eid}</td>
              <td>{user.name}</td>
              <td>{user.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;