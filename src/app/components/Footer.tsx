import React from "react"
import styles from "../styles/Footer.module.scss"
import Image from "next/image";
import woosh from "../../../public/logo/logo2.png"
import fbicon from "../../../public/icons/fb.png"

const Footer = () => {
  return (
    <div className={`${styles.footer} bg-[#1E1E1E] text-[#fff] p-[1.5rem] flex flex-col gap-[2rem] text-[1.1rem]`}>

      <div>
        <Image src={woosh} alt=""/>
      </div>

      <div className="flex flex-col gap-[.8rem]">
        <h1>DINING HOURS</h1>
        <div>
          <p>Weekdays</p>
          <p>Tuesdays - Thursdays</p>
          <p>11 AM to 11 PM</p>
        </div>
        <div>
          <p>Weekends</p>
          <p>Saturdays & Sundays</p>
          <p>11 AM to 11 PM</p>
        </div>
        <div>
          <p>Closed</p>
          <p>Mondays</p>
        </div>
      </div>

      <div className="flex flex-col gap-[.8rem]">
        <p>5078 B-1 C1 Upper Talay Purok Makuguihon, Dumaguete City, Philippines</p>
        <p>0995 354 1767</p>
      </div>

      <div className="mb-[2rem]">
        <p className="text-[1.3rem] mb-[.5rem]">Let’s Get Social</p>
        <div className="flex gap-[.5rem]">
          <Image src={fbicon} alt=""/>
          <p className="self-end">Woosh Resto Bar</p>
        </div>
      </div>

      <div>
        <p className="text-[.9rem]">© 2025 Woosh Resto Bar, All Rights Reserved</p>
      </div>

    </div>
  )
};

export default Footer;
