"use client"
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/Home.module.scss';
import f1 from '../../public/home-images/f1.jpg';
import f2 from '../../public/home-images/f2.jpg';
import m1 from '../../public/home-images/m1.jpg';
import m2 from '../../public/home-images/m2.jpg';
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
      <div className={`${styles.hero} z-1 w-[100%] flex flex-col justify-center gap-[2rem] pb-[2rem]`}>
        <div className='text-center'>
          <h1 className='text-[4rem]'>WOOSH</h1>
          <h2 className='text-[1.2rem] leading-0 mt-[-10px]'>Resto Bar</h2>
        </div>
        <div className='text-center'>
          <h3 className='text-[1.2rem]'>Eat Well, Keep Well</h3>
        </div>
        <div className='flex gap-[1.3rem] text-[#fff] text-[1rem] mx-auto'>
        <Link href=''><button className='bg-[#F2C427]'>Book a Table</button></Link>
        <Link href='/menu'><button className={`${styles.shmenu}`}>Show Menu</button></Link>
        </div>
      </div>

      <div className={`${styles.homecontent}`}>
        <div className='px-[1.5rem] flex flex-col gap-[.7rem] mb-[2rem]'>
          <h2 className='text-[2.2rem]'>OUR MENU</h2>
          <p>Experience the joy of delicious food crafted to nourish your body, uplift your mood, and create unforgettable moments with every meal. Join us and savor the goodness you deserve.</p>
          <h3 className='text-[1.1rem]'><Link href='/menu'>EXPLORE MENU</Link></h3>
        </div>

        <div className='flex flex-col gap-[6px]'>
          <div>
            <Image src={f1} alt=''/>
          </div>
          <div>
            <Image src={f2} alt=''/>
          </div>
        </div>
      </div>

      <div className={`${styles.homecontent}`}>
        <div className='px-[1.5rem] flex flex-col gap-[.7rem] mb-[2rem]'>
          <h2 className='text-[2.2rem]'>PURE MOMENTS</h2>
          <p>Gather your friends and family and savor pure moments of laughter, great food, and unforgettable memories because the best times are meant to be shared.</p>
          <h3 className='text-[1.1rem]'><Link href=''>RESERVE NOW</Link></h3>
        </div>

        <div className='flex flex-col gap-[6px]'>
          <div>
            <Image src={m1} alt=''/>
          </div>
          <div>
            <Image src={m2} alt=''/>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
