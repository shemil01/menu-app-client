"use client";
import Image from "next/image";
import { useMenu } from "../context/MenuContext";

export default function MenuList() {
  const { activeMenu, filteredItems, loading } = useMenu();

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-10">
        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div
      className="bg-black text-white py-20 px-6 md:px-16 lg:px-32 bg-center"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="absolute bottom-[250px] md:bottom-[150px] md:left-[280px] z-10  ">
        <Image src="/juice.png" alt="Overlay 1" width={100} height={100} />
      </div>
      <div className="z-0 max-w-4xl mx-auto border md:min-h-[300px] border-gray-700 p-8 relative">
        <h2 className="text-center text-3xl font-bold text-red-500 uppercase mb-6">
          <span className="border-t border-gray-500 w-10 inline-block mr-4"></span>
          {activeMenu}
          <span className="border-t border-gray-500 w-10 inline-block ml-4"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
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
      <div className="absolute md:bottom-[-120px] md:right-[300px] bottom-[120px] right-0 z-10  ">
        <Image src="/cocktail.png" alt="Overlay 1" width={100} height={100} />
      </div>
    </div>
  );
}
