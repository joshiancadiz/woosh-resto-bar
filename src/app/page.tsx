"use client"
import Link from 'next/link';
import styles from './styles/Home.module.scss';
import { Parallax } from 'react-scroll-parallax';

export default function Home() {
  return (
    <div>
      <div className='absolute top-0 w-[100%] z-[-1] overflow-hidden'>
      <Parallax translateY={[-30, 30]} speed={-10}>
        <div className={styles.homebg}></div>
      </Parallax>
      </div>

      <div>
      <div className={`${styles.hero} z-1 w-[100%] flex flex-col justify-center gap-[2rem]`}>
        <div className='text-center'>
          <h1 className='text-[4rem]'>WOOSH</h1>
          <h2 className='text-[1.2rem] leading-0 mt-[-10px]'>Resto Bar</h2>
        </div>
        <div className='text-center'>
          <h3 className='text-[1.2rem]'>Eat Well, Keep Well</h3>
        </div>
        <div className='flex gap-[1.3rem] text-[#fff] text-[1rem] mx-auto mb-[30%] lg:mb-[10%]'>
        <Link href=''><button className='bg-[#F2C427]'>Book a Table</button></Link>
        <Link href='/menu'><button className={`${styles.shmenu}`}>Show Menu</button></Link>
        </div>
      </div>

      <div className={`${styles.homecontent}`}>
        <div className='px-[1.5rem] flex flex-col gap-[.7rem] my-[2rem] md:px-[2.5rem] md:my-[4rem] md:gap-[1rem] md:flex-row lg:px-[4rem] lg:gap-[3rem] lg:my-[5rem] lg:justify-center lg:h-[200px]'>
          <h2 className='text-[2.2rem] md:text-[3.5rem] lg:text-[5rem] lg:w-[500px]'>OUR MENU</h2>
          <div className='flex flex-col gap-[.7rem] lg:gap-[1.5rem]'>
            <p className='md:w-[350px] xl:w-[550px]'>Experience the joy of delicious food crafted to nourish your body, uplift your mood, and create unforgettable moments with every meal. Join us and savor the goodness you deserve.</p>
            <h3 className='text-[1.1rem]'><Link href='/menu'>EXPLORE MENU</Link></h3>
          </div>
        </div>

        <div className='flex flex-col gap-[6px] md:flex-row'>
          <div className={styles.menuimage1}></div>
          <div className={styles.menuimage2}></div>
        </div>
      </div>

      <div className={`${styles.homecontent}`}>
        <div className='px-[1.5rem] flex flex-col gap-[.7rem] my-[2rem] md:px-[2.5rem] md:my-[4rem] md:gap-[1rem] md:flex-row lg:px-[4rem] lg:gap-[3rem] lg:my-[5rem] lg:justify-center lg:h-[200px]'>
          <h2 className='text-[2.2rem] md:text-[3.5rem] lg:w-[500px] lg:text-[5rem]'>PURE<br/> MOMENTS</h2>
          <div className='flex flex-col gap-[.7rem] lg:gap-[1.5rem]'>
            <p className='md:w-[350px] xl:w-[550px]'>Gather your friends and family and savor pure moments of laughter, great food, and unforgettable memories because the best times are meant to be shared.</p>
            <h3 className='text-[1.1rem]'><Link href=''>RESERVE NOW</Link></h3>
          </div>
        </div>

        <div className='flex flex-col gap-[6px] md:flex-row'>
          <div className={styles.momentsimage1}></div>
          <div className={styles.momentsimage2}></div>
        </div>
      </div>
      </div>
    </div>
  );
}
