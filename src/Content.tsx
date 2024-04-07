import ItemList from './ItemList';
import { GroceryProps } from './groceryProps.types';

const Content = ({ items, handleCheck, handleDelete }: GroceryProps) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: '2rem' }}>Your list is empty</p>
      )}
    </main>
  );
};

export default Content;
