"use client"
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Events.module.scss";
import { Parallax } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import eventcontmobile from "../../../public/events/event-content-mobile.png";
import moreeventsmobile from "../../../public/events/coming-events-mobile.png";
import eventconttablet from "../../../public/events/event-content-tablet.png";
import eventcontdesktop from "../../../public/events/event-content-desktop.png";
import moreeventsdesktop from "../../../public/events/coming-events-desktop.png";

const Events = () => {

   useEffect(() => {

    setTimeout(() => {
        Aos.init();
    }, 10)

   })
  return (
    <div className="overflow-hidden">
     <ParallaxProvider>
     <div className="absolute top-0 w-[100%] z-[-1] overflow-hidden">
        <Parallax translateY={[-30, 30]} speed={-10}>
            <div className={styles.eventsbg}></div>
        </Parallax>
      </div>
     </ParallaxProvider>

      <div className={`${styles.eventshero} w-[100%] h-[90vh] lg:flex lg:px-[4rem] items-center`}>
        {/* mobile */}
        <div className="ml-auto w-[90%] h-[100%] flex flex-col justify-center md:hidden">
            <h1 className="text-[#FDE07D] text-[3rem] mb-[1rem]">KARAOKE<br/> NIGHT</h1>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="w-[100%]">
                <Image src={eventcontmobile} alt="" className="w-[100%]"/>
            </div>
        </div>
        {/* Tablet */}
        <div className="hidden h-[100%] md:flex flex-col justify-center items-center lg:hidden">
            <h1 className="text-[#FDE07D] text-[4rem] mb-[1rem] text-center">KARAOKE<br/> NIGHT</h1>
            <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="w-[70%]">
                <Image src={eventconttablet} alt="" className="w-[100%]"/>
            </div>
        </div>
        {/* Desktop */}
        <div className="hidden w-[100%] flex-row justify-between items-start lg:flex">
            <h1 className="text-[#FDE07D] text-[5rem] mb-[1rem] text-left xl:text-[6.5rem]">KARAOKE<br/> NIGHT</h1>
            <div data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in-sine" className="w-[40%]">
                <Image src={eventcontdesktop} alt="" className="w-[100%]"/>
            </div>
        </div>
      </div>

      <div className={`${styles.eventscontent} bg-[#fff] px-[1.5rem] md:px-[2.5rem] lg:px-[4rem]`}>
        {/* mobile */}
        <div className="flex flex-col gap-[.7rem] mb-[2rem] md:hidden">
            <h2 className="text-[2.2rem]">KARAOKE<br/> WEDNESDAY</h2>
            <p>Join us every Wednesday at Woosh Resto Bar for a night full of music, fun, and good vibes! Sing your favorite songs, enjoy delicious food, sip on your favorite drinks, and relax in our beautiful garden setting.</p>
            <p>Meet new people, make great memories, and have a blast with friends!</p>
            <p>Karaoke starts at 5 PM – Don’t miss it!</p>
            <h3 className="text-[1.1rem]"><Link href="">JOIN US</Link></h3>
        </div>
        {/* tablet/desktop */}
        <div className="hidden md:grid md:grid-cols-2 flex-col gap-[2rem] mb-[2rem]">
            <div className="flex flex-col gap-[1rem] lg:gap-[1.5rem]">
              <h2 className="text-[2.8rem] lg:text-[4rem]">KARAOKE<br/> WEDNESDAY</h2>
              <p className="text-[1.1rem] lg:text-[1.4rem]">Karaoke starts at 5 PM – Don’t miss it!</p>
              <h3 className="text-[1.5rem] lg:text-[2rem]"><Link href="">JOIN US</Link></h3>
            </div>
            <div className="flex flex-col gap-[1rem] lg:text-[1.2rem]">
              <p>Join us every Wednesday at Woosh Resto Bar for a night full of music, fun, and good vibes! Sing your favorite songs, enjoy delicious food, sip on your favorite drinks, and relax in our beautiful garden setting.</p>
              <p>Meet new people, make great memories, and have a blast with friends!</p>
            </div>
        </div>
      </div>

      <div className="ml-auto w-[90%] h-[70vh] flex items-center justify-center lg:w-[100%] lg:h-[100vh]">
      {/* mobile/tablet */}
        <div data-aos="fade-left" data-aos-duration="500" className="w-[100%] lg:hidden">
            <Image src={moreeventsmobile} alt="" className="w-[100%]"/>
        </div>
      {/* desktop */}
        <div data-aos="fade-left" data-aos-duration="500" className="hidden lg:block w-[50%]">
            <Image src={moreeventsdesktop} alt="" className="w-[100%]"/>
        </div>
      </div>
    </div>
  )
};

export default Events;
