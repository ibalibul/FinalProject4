import React, { useState, useEffect } from 'react';

const Button = () => {
  const [count, setCount] = useState(0);
  // const [api, setApi] = useState('');

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  // useEffect(() => {
  //   fetch('https://6340e78716ffb7e275c7134c.mockapi.io/film')
  //     .then((res) => res.json())
  //     .then((data) => console.log(data, 'ini data hasil fetch'));
  // });

  return (
    <>
      <div>
        <p>You clicked {count} times</p>
        <button className="mx-2" onClick={() => setCount(count + 1)}>
          Click Me + 1
        </button>
        <button className="mx-2" onClick={() => setCount(count - 1)}>
          Click Me - 1
        </button>
        <button className="mx-2" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Button;
