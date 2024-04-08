import { FaTrashAlt } from 'react-icons/fa';
import { Item } from './groceryProps.types';

type LineItemProps = {
  item: Item;
  handleCheck: (id: number) => void;
  handleDelete: (id: number) => void;
};

const LineItem = ({ item, handleCheck, handleDelete }: LineItemProps) => {
  return (
    <li className="item" onChange={() => handleCheck(item.id)}>
      <input
        onChange={() => handleCheck(item.id)}
        type="checkbox"
        checked={item.checked}
      />
      <label
        style={item.checked ? { textDecoration: 'line-through' } : {}}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex={0}
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default LineItem;
