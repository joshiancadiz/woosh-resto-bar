"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Nav.module.scss";
import logo from "../../../public/logo/logo1.png";
import woosh from "../../../public/logo/logo3.png";

const Nav = () => {

  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="sticky top-0 z-10">
      <div className="bg-[#1E1E1E] h-[14vh] flex justify-between px-[1.5rem] items-center md:px-[2.5rem] lg:h-[19vh] lg:px-[4rem]">
        <div className="w-[60px] h-[60px] z-[10] lg:w-[80px] lg:h-[80px]">
            <Image src={logo} alt="logo"/>
        </div>
        <div className={`${styles.pcnav} h-[100%] hidden lg:block`}>
          <ul className="flex items-end h-[90%] py-[1.5rem] gap-[3rem]">
            <li><Link href='/'>HOME</Link></li>
            <li><Link href='/menu'>MENU</Link></li>
            <li><Link href='/reservations'>RESERVATIONS</Link></li>
            <li><Link href='/events'>EVENTS</Link></li>
          </ul>
        </div>
        <div className={`${styles.spans} flex flex-col gap-[.8rem] z-10`} onClick={() => setisOpen(!isOpen)}>
            <span className={isOpen ? `${styles.span1} relative bg-[#F2C427] w-[40px] h-[3px]` : `relative bg-[#F2C427] w-[40px] h-[3px]`}></span>
            <span className={isOpen ? `${styles.span2} relative bg-[#F2C427] w-[40px] h-[3px]` : `relative bg-[#F2C427] w-[40px] h-[3px]`}></span>
        </div>
      </div>

      <div className={isOpen ? `${styles.mobilenav} ${styles.open} absolute top-0 w-[100%] h-[100vh] bg-[#1E1E1E]` : `${styles.mobilenav} absolute top-0 w-[100%] h-[100vh] bg-[#1E1E1E]`}>
        <ul className="flex flex-col text-[1.6rem] gap-[2rem] items-center mt-[40%] md:mt-[20%]">
          <li className="mb-[8%]"><Image src={woosh} alt="" width={200}/></li>
          <li><Link href='/' onClick={() => {setTimeout(() => {setisOpen(false)}, 300)}}>HOME</Link></li>
          <li><Link href='/menu' onClick={() => {setTimeout(() => {setisOpen(false)}, 300)}}>MENU</Link></li>
          <li><Link href='/reservations' onClick={() => {setTimeout(() => {setisOpen(false)}, 300)}}>RESERVATIONS</Link></li>
          <li><Link href='/events' onClick={() => {setTimeout(() => {setisOpen(false)}, 300)}}>EVENTS</Link></li>
        </ul>
      </div>
    </div>
  )
};

export default Nav;
