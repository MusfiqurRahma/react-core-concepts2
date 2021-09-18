import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
// import { buildQueries } from '@testing-library/dom';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
       <ExternalUsers></ExternalUsers>
    </div>
  );
}
function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data =>setUsers(data))
  },[])

  return (
    <div>
      <h3>External Users</h3>
      {
        users.map(user=><Users name={user.name} email ={user.email}></Users>)
      }
    </div>
     )
}
function Users(props) {
  return (
    <div className='product'>
      <h2>name: {props.name}</h2>
      <h3>email: {props.email}</h3>
    </div>
    )
}

function Counter() {
  const [count,setCount] = useState(0)
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count :{count}</h1>
      <button onClick={handleDecrease}>Decrease</button>
       <button onClick={handleIncrease}>increase</button>
    </div>
  )
}


function Product(props) {
  const productStyle = {
    border: '3px solid blue',
    borderRadius:'15px'
    }
  return (
    <div className='product' style={productStyle}>
      <h2>Name:{props.name}</h2>
      <h4>Name:{props.price}</h4>
    </div>
  )
}


// const products = [
//   { name: 'Mobile', price:10000 },
//   { name: 'Laptop', price:100000 },
//   { name: 'Webcam', price:12000 },
//   { name: 'Shoe', price:500 }
// ];

// {
//   products.map(product => <Product name={product.name}price={product.price}></Product>)
// }


/*{ <Product name='Mobile'price='10000'></Product>
<Product name='Laptop'price='100000'></Product>
<Product name='Webcam'price='12000'></Product>
<Product name='Shoe'price='500'></Product> }*/

export default App;
