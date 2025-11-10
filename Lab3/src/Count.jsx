import {useState} from 'react';

function Count () {

const [count, setCount] = useState(0);

const handleClick = () => {
    setCount(count+1);
    return count;
}

  return (
  <div>
  <h1>Count: {count}</h1>
  <button onClick={handleClick}>Increment</button>
  </div>
  );
  }
  
  export default Count;