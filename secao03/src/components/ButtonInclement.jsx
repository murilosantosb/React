import React, { useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Usando uma função para atualizar o estado
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
};


export default MyComponent