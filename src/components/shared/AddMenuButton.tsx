interface Props {
    onClick: () => void;
  }
  
  export default function AddMenuButton({ onClick }: Props) {
    return (
      <button
        onClick={onClick}
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Menu
      </button>
    );
  }
  