import { useState } from 'react';
import './App.css';
import { InputCustom, Output } from './Components';

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
      <InputCustom Label="Write a Number :" Submit={Submit} id="InputValue" />
      <Output />
    </div>
  );
};

export default App;
