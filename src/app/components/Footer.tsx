import React from "react"
import styles from "../styles/Footer.module.scss"
import Image from "next/image";
import woosh from "../../../public/logo/logo3.png"
import fbicon from "../../../public/icons/fb.png"

const Footer = () => {
  return (
    <div className={`${styles.footer} bg-[#1E1E1E] text-[#fff] px-[1.5rem] py-[2.5rem] flex flex-col gap-[2rem] text-[1rem] md:px-[2.5rem] lg:px-[4rem]`}>

     <div className="flex flex-col gap-[2rem] lg:grid lg:grid-cols-[1fr_4fr] lg:mt-[2.5rem]">
     <div>
        <Image src={woosh} alt="" width={150}/>
      </div>

      <div className="flex flex-col gap-[2rem] md:grid md:grid-cols-2 lg:grid-cols-[1fr_2fr] lg:gap-[1rem]">
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

      <div className="flex flex-col gap-[2rem] lg:grid lg:grid-cols-2">
      <div className="flex flex-col gap-[.8rem]">
        <p>A: 5078 B-1 C1 Upper Talay Purok Makuguihon, Dumaguete City, Philippines</p>
        <p>P: 0995 354 1767</p>
      </div>

      <div className="mb-[2rem]">
        <p className="text-[1.3rem] mb-[.5rem]">Let’s Get Social</p>
        <div className="flex gap-[.5rem]">
          <Image src={fbicon} alt="" width={30}/>
          <p className="self-end">Woosh Resto Bar</p>
        </div>
      </div>
      </div>
      </div>
     </div>

      <div className="md:text-center md:mt-[10%]">
        <p className="text-[.9rem]">© 2025 Woosh Resto Bar, All Rights Reserved</p>
      </div>

    </div>
  )
};

export default Footer;
