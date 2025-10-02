import './style.css';

document.querySelector('#app').innerHTML = `
  <div>
    
  </div>
`;

const response = await fetch("http://localhost:5000/api/hello");
const result = await response.json();
console.log(result);