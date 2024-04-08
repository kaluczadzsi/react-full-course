import { FormEvent, useRef } from 'react';
import { FaPlus } from 'react-icons/fa';

type AddItemProps = {
  newItem: string;
  setNewItem: (e: string) => void;
  handleSubmit: (e: FormEvent) => void;
};

const AddItem = ({ newItem, setNewItem, handleSubmit }: AddItemProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        type="text"
        id="addItem"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        onClick={() => inputRef.current?.focus()}
        type="submit"
        aria-label="Add Item"
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
