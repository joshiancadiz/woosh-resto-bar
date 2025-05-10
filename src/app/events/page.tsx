"use client"
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Events.module.scss";
import { Parallax } from "react-scroll-parallax";
import eventcont from "../../../public/events/event-content-mobile.png";
import moreevents from "../../../public/events/coming-events-mobile.png";

const Events = () => {

   useEffect(() => {

    setTimeout(() => {
        Aos.init();
    }, 10)

   })
  return (
    <div className="overflow-hidden">
      <div className="absolute top-0 w-[100%] z-[-1] overflow-hidden">
        <Parallax translateY={[-30, 30]} speed={-10}>
            <div className={styles.eventsbg}></div>
        </Parallax>
      </div>

      <div className={`${styles.eventshero} w-[100%] h-[90vh]`}>
        <div className="ml-auto w-[90%] h-[100%] flex flex-col justify-center">
            <h1 className="text-[#FDE07D] text-[3rem] mb-[1rem]">KARAOKE<br/> NIGHT</h1>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="w-[100%]">
                <Image src={eventcont} alt="" className="w-[100%]"/>
            </div>
        </div>
      </div>

      <div className={`${styles.eventscontent} bg-[#fff] px-[1.5rem]`}>
        <div className="flex flex-col gap-[.7rem] mb-[2rem]">
            <h2 className="text-[2.2rem]">KARAOKE<br/> WEDNESDAY</h2>
            <p>Join us every Wednesday at Woosh Resto Bar for a night full of music, fun, and good vibes! Sing your favorite songs, enjoy delicious food, sip on your favorite drinks, and relax in our beautiful garden setting.</p>
            <p>Meet new people, make great memories, and have a blast with friends!</p>
            <p>Karaoke starts at 5 PM – Don’t miss it!</p>
            <h3 className="text-[1.1rem]"><Link href="">JOIN US</Link></h3>
        </div>
      </div>

      <div className="ml-auto w-[90%] h-[70vh] flex items-center">
        <div data-aos="fade-left" data-aos-duration="500" className="w-[100%]">
            <Image src={moreevents} alt="" className="w-[100%]"/>
        </div>
      </div>
    </div>
  )
};

export default Events;
