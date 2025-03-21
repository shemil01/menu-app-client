"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { Axios } from "../components/api/Axios";

interface MenuItem {
  name: string;
  description: string;
  price: number;
}

interface Menu {
  _id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

interface MenuContextType {
  menus: Menu[];
  activeMenu: string;
  setActiveMenu: (name: string) => void;
  filteredItems: MenuItem[];
  fetchMenus: () => void;
  loading:boolean;

}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [activeMenu, setActiveMenu] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false); 
  

  const fetchMenus = async () => {
        setLoading(true);
    try {
      const response = await Axios.get("/menus");
      setMenus(response.data);
      if (response.data.length > 0) {
        setActiveMenu(response.data[0].name);
      }
    } catch (error) {
      console.error("Error fetching menus:", error);
    } finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  useEffect(() => {
    if (menus.length > 0) {
      const selectedMenu = menus.find(
        (menu) => menu.name === activeMenu
      );
      setFilteredItems(selectedMenu ? selectedMenu.items : []);
    }
  }, [activeMenu, menus]);

  return (
    <MenuContext.Provider
      value={{
        menus,
        activeMenu,
        setActiveMenu,
        filteredItems,
        fetchMenus,
        loading
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};


export const useMenu = () => {
    const context = useContext(MenuContext)

    if (!context) {
        throw new Error("useMenu must be used within a MenuProvider");
 
    }
    return context;

}