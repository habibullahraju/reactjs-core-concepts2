import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUser></ExternalUser>

      
    </div>
  );
}


function ExternalUser() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
 
  return (
    <div>
      <h2>External Users</h2>
      <h3>{users.length}</h3>
      {
    users.map(user => <User name={user.name} email={user.email}></User>)
  }
    </div>
  )
}
function User(props) {
  return (
    <div style={{border:'2px solid orange', margin:'10px'}}>
        <h2>Name: {props.name}</h2>
        <p>Email: {props.email}</p>
    </div>
  )
}







function Counter() {
    const [count,setCount]= useState(55);
    const IncreaseCount = () =>(setCount(count +1));
    const DecreaseCount = () => setCount(count -1);

 return (
    <div className='products-container'>
      <h2>Count: {count}</h2>
      <button onClick={IncreaseCount}>Inrease</button>
      <button onClick={DecreaseCount}>Decrease</button>
      
    </div>
  )
}

export default App;
