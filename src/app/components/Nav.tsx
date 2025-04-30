"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Nav.module.scss";
import logo from "../../../public/logo/logo1.png";
import woosh from "../../../public/logo/logo2.png";

const Nav = () => {

  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="sticky top-0 z-10">
      <div className="bg-[#1E1E1E] h-[16vh] flex justify-between p-[1.5rem] items-center">
        <div className="w-[60px] h-[60px]">
            <Image src={logo} alt="logo"/>
        </div>
        <div className={`${styles.spans} flex flex-col gap-[.8rem] z-10`} onClick={() => setisOpen(!isOpen)}>
            <span className={isOpen ? `${styles.span1} relative bg-[#F2C427] w-[40px] h-[3px]` : `relative bg-[#F2C427] w-[40px] h-[3px]`}></span>
            <span className={isOpen ? `${styles.span2} relative bg-[#F2C427] w-[40px] h-[3px]` : `relative bg-[#F2C427] w-[40px] h-[3px]`}></span>
        </div>
      </div>

      <div className={isOpen ? `${styles.mobilenav} ${styles.open} absolute top-0 w-[100%] h-[100vh] bg-[#1E1E1E]` : `${styles.mobilenav} absolute top-0 w-[100%] h-[100vh] bg-[#1E1E1E]`}>
        <ul className="flex flex-col text-[1.6rem] gap-[1rem] items-center mt-[30%]">
          <li className="mb-[10%]"><Image src={woosh} alt=""/></li>
          <li><Link href=''>HOME</Link></li>
          <li><Link href=''>MENU</Link></li>
          <li><Link href=''>RESERVATIONS</Link></li>
          <li><Link href=''>EVENTS</Link></li>
        </ul>
      </div>
    </div>
  )
};

export default Nav;
