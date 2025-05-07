"use client";
import React, { useState } from "react";
import styles from "../styles/Menu.module.scss";
import Meals from "./Meals";
import Desserts from "./Desserts";
import Drinks from "./Drinks";

const Menu = () => {
  type MenuTypeItemProps = {
    id: number;
    label: string;
    activeId: number;
    onClick: (id: number) => void;
  };

  const MenuTypeItem = ({ id, label, activeId, onClick }: MenuTypeItemProps) => {
    const isActive = id === activeId;

    return (
      <li className={isActive ? 'text-[1.5rem] underline underline-offset-[5px]' : 'text-[1.5rem]'}
        onClick={() => onClick(id)}>
        {label}
      </li>
    );
  };

  const [activeId, setActiveId] = useState(0);

  let content;
  if(activeId == 0) {
    content = <Meals />
  } else if (activeId == 1) {
    content = <Desserts />
  } else if (activeId == 2) {
    content = <Drinks />
  }

  return (
    <div className="px-[1.5rem] py-[2rem]">
      <div className={`${styles.menunav} mb-[3rem]`}>
        <h1 className="text-[2.2rem] text-center mb-[3rem]">OUR MENU</h1>
        <ul className="flex flex-wrap gap-x-[3rem] gap-y-[1rem] justify-center">
          <MenuTypeItem id={0} label="MEALS" activeId={activeId} onClick={setActiveId} />
          <MenuTypeItem id={1} label="DESSERTS" activeId={activeId} onClick={setActiveId} />
          <MenuTypeItem id={2} label="DRINKS" activeId={activeId} onClick={setActiveId} />
        </ul>
      </div>
      <div className={`${styles.menucontent} mt-[8rem]`}>
       {content}
      </div>
    </div>
  );
};

export default Menu;
