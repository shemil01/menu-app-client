'use client'
import { useMenu } from "../context/MenuContext";

export default function MenuTabs() {
  const { menus, activeMenu, setActiveMenu } = useMenu();

  return (
    <div className="flex justify-center space-x-4 bg-cover bg-center py-5"
      style={{ backgroundImage: "url('/buttons-bg.png')" }}
    >
      {menus.map((menu) => (
        <button
          key={menu._id}
          onClick={() => setActiveMenu(menu.name)}
          className={`px-6 py-2 border ${activeMenu === menu.name ? "bg-blue-500 text-white" : "bg-black border-white text-white hover:bg-gray-600"}`}
        >
          {menu.name.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
