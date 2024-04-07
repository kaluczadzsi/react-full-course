const Content = () => {
  const handleNameChange = () => {
    const names = ['Tom', 'Brandon', 'Bruce', 'Dave', 'Mike'];
    const random = Math.floor(Math.random() * names.length);
    return names[random];
  };

  return (
    <main>
      <p>Hello {handleNameChange()}</p>
    </main>
  );
};

export default Content;
