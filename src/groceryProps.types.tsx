export type Item = {
  id: number;
  checked: boolean;
  item: string;
};

export type GroceryProps = {
  items: Item[];
  handleCheck: (id: number) => void;
  handleDelete: (id: number) => void;
};
