import { GroceryProps } from './groceryProps.types';
import LineItem from './LineItem';

const ItemList = ({ items, handleCheck, handleDelete }: GroceryProps) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ItemList;
