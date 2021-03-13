import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function ReactPrint(){
  return (
    <div>
      <label>Name:</label><input type='text'/><br/>
      <label>Email:</label><input type='email'/><br/>
      <label>Rating:</label>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select><br/>
      <input type='submit'/>
    </div>
  )
}

ReactDOM.render(<ReactPrint/>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
