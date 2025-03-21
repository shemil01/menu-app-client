"use client";
import { useState } from "react";
import { useMenu } from "../context/MenuContext";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import MenuTabs from "../components/MenuTabs";
import MenuList from "../components/MenuList";
import AddMenuButton from "@/components/shared/AddMenuButton";
import AddMenuItemButton from "@/components/shared/AddMenuItemButton";
import Modals from "@/components/modal/Modals";
import Footer from "@/components/Footer";

export default function Home() {
  const { fetchMenus, menus, activeMenu } = useMenu();
  const [isCreateMenuModalOpen, setIsCreateMenuModalOpen] = useState(false);
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [selectedMenuId, setSelectedMenuId] = useState<string>("");


  const handleAddItemClick = () => {
    const selectedMenu = menus.find((menu) => menu.name === activeMenu)

    if (selectedMenu){
      setSelectedMenuId(selectedMenu._id)
setIsAddItemModalOpen(true)
    }
  }
  return (
    <div className="bg-black text-white">
      <Header />
      <HeroSection />
      <MenuTabs />
      <MenuList />

      
      <AddMenuButton onClick={() => setIsCreateMenuModalOpen(true)} />
      <AddMenuItemButton onClick={handleAddItemClick} />
      <Modals
        isCreateMenuModalOpen={isCreateMenuModalOpen}
        setIsCreateMenuModalOpen={setIsCreateMenuModalOpen}
        isAddItemModalOpen={isAddItemModalOpen}
        setIsAddItemModalOpen={setIsAddItemModalOpen}
        selectedMenuId={selectedMenuId}
        fetchMenus={fetchMenus}
      />

      <Footer/>
    </div>
  );
}
