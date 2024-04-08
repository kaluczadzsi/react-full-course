import { FormEvent } from 'react';
import { FaPlus } from 'react-icons/fa';

type AddItemProps = {
  newItem: string;
  setNewItem: (e: string) => void;
  handleSubmit: (e: FormEvent) => void;
};

const AddItem = ({ newItem, setNewItem, handleSubmit }: AddItemProps) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        type="text"
        id="addItem"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit" aria-label="Add Item">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
