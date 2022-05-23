import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { InputCustom } from './Components';

const App = () => {
  const Submit = (e) => {
    e.preventDefault();
    let text = document.getElementById('InputValue').value;
    document.getElementById('InputValue').value =
      document.getElementById('InputValue').defaultValue;
    console.log(text);
  };

  return (
    <div className="-py-4">
      <img src={logo} className="bg-auto" />
      <InputCustom Label="Write a Number :" Submit={Submit} id="InputValue" />
    </div>
  );
};

export default App;
