
interface Props {
  onClick: () => void;
}

export default function AddMenuItemButton({ onClick }: Props) {

  return (
    <button
      onClick={onClick}
      className="fixed bottom-16 right-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
    >
      Add Item
    </button>
  );
}
