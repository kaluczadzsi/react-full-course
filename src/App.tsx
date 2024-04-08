import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import { FormEvent, useEffect, useState } from 'react';
import { Item } from './groceryProps.types';

const API_URL = 'http://localhost:3500/items';

const App = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Did not receive expected data');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setFetchError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  const handleCheck = (id: number) => {
    const listItems = items.map((item: Item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id: number) => {
    const listItems = items.filter((item: Item) => item.id !== id);
    setItems(listItems);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };

  const addItem = (item: string) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  return (
    <div className="App">
      <Header title="Groceries List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && (
          <Content
            items={items.filter((item: Item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer length={items.length} />
    </div>
  );
};

export default App;
