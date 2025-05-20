"use client"
import React, { useEffect, useState } from 'react'
import styles from "../styles/Reservations.module.scss"

export default function Reservation() {

  const [isClient, setClient]=  useState(false);

  useEffect(() => {
    setClient(true)
  }, [])

  const ReservationForm = () => {
    return(
        <form action="" className={styles.form1}>
            <div>
                <label htmlFor="guests">Party Size</label>
                <select id='guests' name='guests' required>
                    <option value="1">1 guest</option> 
                    <option value="2">2 guests</option>
                    <option value="3">3 guests</option>
                    <option value="4">4 guests</option>
                    <option value="5">5 guests</option>
                    <option value="6">6 guests</option>
                    <option value="7">7 guests</option>
                    <option value="8">8 guests</option>
                    <option value="9">9 guests</option>
                    <option value="10">10 guests</option>
                </select>
            </div>
            <div>
                <label htmlFor="date">Date</label>
                <input type="date" id='date' name='date' required />
            </div>
            <div>
                <label htmlFor="time">Time</label>
                <select name="time" id="time" required>
                    <option value="">Select a time</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="13:30">1:30 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="14:30">2:30 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="15:30">3:30 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="16:30">4:30 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="21:30">9:30 PM</option>
                    <option value="22:00">10:00 PM</option>
                </select>
            </div>
            <button type='submit'>Find a Table</button>
        </form>
    )
  }
  return (
    <div className={`${styles.reserveS1} py-[3rem] px-[1.5rem]`}>
      <h1 className='text-[1.8rem] mb-[1rem]'>BOOK A TABLE</h1>
        {isClient && <ReservationForm/>}
    </div>
  )
}
