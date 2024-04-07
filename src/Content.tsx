import { MouseEventHandler, useState } from 'react';

const Content = () => {
  const [name, setName] = useState('');
  const handleNameChange = () => {
    const names = ['Tom', 'Brandon', 'Bruce', 'Dave', 'Mike'];
    const random = Math.floor(Math.random() * names.length);
    setName(names[random]);
  };

  return (
    <main>
      <p onDoubleClick={handleNameChange}>Hello {name}</p>
    </main>
  );
};

export default Content;
