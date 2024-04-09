import { useState } from 'react';
import Content from './components/Content';
import Header from './components/Header';

const App = () => {
  const [data, setData] = useState([]);

  const handleUpdateData = (newData: any[]) => {
    setData(newData);
    console.log(data);
  };

  return (
    <>
      <Header handleUpdateData={handleUpdateData} />
      <Content data={data} />
    </>
  );
};

export default App;
