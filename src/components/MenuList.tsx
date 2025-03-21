'use client'
import { useMenu } from "../context/MenuContext";

export default function MenuList() {
  const { activeMenu, filteredItems } = useMenu();

  return (
    <div className="bg-black text-white py-16 px-6 md:px-16 lg:px-32 bg-center"         style={{ backgroundImage: "url('/bg.png')" }}
>
      <div className="max-w-4xl mx-auto border border-gray-700 p-8 relative">
        <h2 className="text-center text-3xl font-bold text-red-500 uppercase mb-6">
          <span className="border-t border-gray-500 w-10 inline-block mr-4"></span>
          {activeMenu}
          <span className="border-t border-gray-500 w-10 inline-block ml-4"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold">
                {item.name} <span className="float-right">${item.price}</span>
              </h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
