import { useState } from 'react';

const Content = () => {
  const [name, setName] = useState('Kate');
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ['Tom', 'Brandon', 'Bruce', 'Dave', 'Mike'];
    const random = Math.floor(Math.random() * names.length);
    setName(names[random]);
  };

  const handleClick = () => {
    setCount((prevState) => prevState + 2);
    setCount((prevState) => prevState + 2);
    console.log(count);
  };

  return (
    <main>
      <p>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click</button>
    </main>
  );
};

export default Content;
