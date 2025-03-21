import AddMenuItemForm from "../shared/AddMenuItemForm";
import CreateMenuForm from "../shared/CreateMenuForm";
import Modal from "./Modal";

interface Props {
  isCreateMenuModalOpen: boolean;
  setIsCreateMenuModalOpen: (open: boolean) => void;
  isAddItemModalOpen: boolean;
  setIsAddItemModalOpen: (open: boolean) => void;
  selectedMenuId: string;
  fetchMenus: () => void;
}

export default function Modals({
  isCreateMenuModalOpen,
  setIsCreateMenuModalOpen,
  isAddItemModalOpen,
  setIsAddItemModalOpen,
  selectedMenuId,
  fetchMenus,
}: Props) {
  return (
    <>
      <Modal isOpen={isCreateMenuModalOpen} onClose={() => setIsCreateMenuModalOpen(false)}>
        <CreateMenuForm onClose={() => setIsCreateMenuModalOpen(false)} onMenuCreated={fetchMenus} />
      </Modal>

      <Modal isOpen={isAddItemModalOpen} onClose={() => setIsAddItemModalOpen(false)}>
        <AddMenuItemForm menuId={selectedMenuId} onClose={() => setIsAddItemModalOpen(false)} onItemAdded={fetchMenus} />
      </Modal>
    </>
  );
}
