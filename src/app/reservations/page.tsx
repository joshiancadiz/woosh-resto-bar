"use client"
import React, { useEffect, useState } from 'react'
import styles from "../styles/Reservations.module.scss"
import formStyles from "../styles/FormComponents.module.scss"
import {Button, Label, ListBox, ListBoxItem, Popover, Select, SelectValue, Calendar, CalendarCell, CalendarGrid, DateInput, DatePicker, DateSegment, Dialog, Group, Heading, Text, DateValue, FieldError} from 'react-aria-components';
import { today } from "@internationalized/date";
import Image from 'next/image';
import { set, useForm } from 'react-hook-form';
import selectArrow from '../../../public/icons/select-arow.png';
import calendarIcon from '../../../public/icons/calendar.png';
import calendarNext from "../../../public/icons/calendar-next.png";

export default function Reservation() {

  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true)
  }, [])

  const time = ([
    {id: 1, time: '11:00 AM', value: '11:00'},
    {id: 2, time: '11:30 AM', value: '11:30'},
    {id: 3, time: '12:00 PM', value: '12:00'},
    {id: 4, time: '12:30 PM', value: '12:30'},
    {id: 5, time: '1:00 PM', value: '13:00'},
    {id: 6, time: '1:30 PM', value: '13:30'},
    {id: 7, time: '2:00 PM', value: '14:00'},
    {id: 8, time: '2:30 PM', value: '14:30'},
    {id: 9, time: '3:00 PM', value: '15:00'},
    {id: 10, time: '3:30 PM', value: '15:30'},
    {id: 11, time: '4:00 PM', value: '16:00'},
    {id: 12, time: '4:30 PM', value: '16:30'},
    {id: 13, time: '5:00 PM', value: '17:00'},
    {id: 14, time: '5:30 PM', value: '17:30'},
    {id: 15, time: '6:00 PM', value: '18:00'},
    {id: 16, time: '6:30 PM', value: '18:30'},
    {id: 17, time: '7:00 PM', value: '19:00'},
    {id: 18, time: '7:30 PM', value: '19:30'},
    {id: 19, time: '8:00 PM', value: '20:00'},
    {id: 20, time: '8:30 PM', value: '20:30'},
    {id: 21, time: '9:00 PM', value: '21:00'},
    {id: 22, time: '9:30 PM', value: '21:30'},
    {id: 23, time: '10:00 PM', value: '22:00'},
    {id: 24, time: '10:30 PM', value: '22:30'},
  ])

  const guests = ([
    {id: 1, val: 1},
    {id: 2, val: 2},
    {id: 3, val: 3},
    {id: 4, val: 4},
    {id: 5, val: 5},
    {id: 6, val: 6},
    {id: 7, val: 7},
    {id: 8, val: 8},
    {id: 9, val: 9},
    {id: 10, val: 10}
  ])

  type FormValues = {
    party: number | undefined;
    date: DateValue | undefined;
    time: string | undefined;
  }

  const { register, handleSubmit, setValue, watch, formState: { errors }} = useForm<FormValues>({
    defaultValues: {
      party: undefined,
      date: today('UTC'),
      time: undefined
    }
  })

  const selectedParty = watch('party');
  const selectedDate = watch('date')
  const selectedTime = watch('time');

  const onSubmit = (data: FormValues) => {
      console.log("Party Size:", data.party === undefined ? data.party : `${data.party === 1 ? " guest" : " guests" }`)
      console.log("Date:", `${data.date?.month}/${data.date?.day}/${data.date?.year}`)
      console.log("Scheduled Time:", data.time)
  }

  const ReservationForm = () => {
    return(
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form1}>
          <Select 
          name='party' 
          id='party' 
          className={formStyles.select} 
          aria-label='Select number of guests'
          isRequired
          onSelectionChange={(value) => {
            const partyValue = value ? parseInt(value.toString()) : undefined;
            setValue('party', partyValue);
          }}
          >
                <Label htmlFor='party'>Party Size</Label>
                  <Button aria-label='label'>
                    <SelectValue>
                    {!selectedParty ? <>Number of guests</> : `${selectedParty} ${selectedParty === 1 ? " guest" : "guests"}`}
                    </SelectValue>
                    <span aria-hidden="true"><Image src={selectArrow} alt=''/></span>
                  </Button>
                  <FieldError/>
                  <Popover className={formStyles.popover} trigger='Select' offset={0}>
                    <ListBox className={formStyles.listbox}>
                    {guests.map((item) => (
                        <ListBoxItem key={item.id} id={item.val} className={formStyles.listboxitems}>
                          {item.val === 1 ? item.val + ' guest' : item.val + ' guests'}
                        </ListBoxItem>
                      ))}
                    </ListBox>
                  </Popover>
            </Select>
            <DatePicker 
              name='date' 
              id='date' 
              className={formStyles.datepicker} 
              aria-label='Pick a date'
              value={selectedDate}
              onChange={(date) => setValue('date', date || undefined)}
              minValue={today('UTC')}
              defaultValue={today('UTC')}
              isDateUnavailable={(date) => {
                return date.toDate('Asia/Manila').getDay() === 1;
              }}
            >
              <Label htmlFor='date'>Date</Label>
              <Group className={formStyles.datepickergroup}>
                <DateInput className={formStyles.dateinput}>
                  {(segment) => <DateSegment segment={segment}/>}
                </DateInput>
                <Button><span aria-hidden="true"><Image src={calendarIcon} alt=''/></span></Button>
              </Group>
              <Text slot="description" className='italic'>Closed during Mondays</Text>
              <Popover className={formStyles.datepopover}>
                <Dialog>
                  <Calendar className={formStyles.calendar}>
                    <header className='flex justify-between'>
                      <Button slot="previous"><Image src={calendarNext} className='rotate-90' alt=''/></Button>
                      <Heading className={formStyles.heading} />
                      <Button slot="next"><Image src={calendarNext} className='rotate-270' alt=''/></Button>
                    </header>
                    <CalendarGrid className={formStyles.calendargrid}>
                      {(date) => <CalendarCell date={date} className={formStyles.calendarcell} />}
                    </CalendarGrid>
                  </Calendar>
                </Dialog>
              </Popover>
            </DatePicker>  
              <Select 
                name='time' 
                id='time' 
                className={formStyles.select} 
                aria-label='Select time'
                onSelectionChange={(value) => {
                  setValue('time', value?.toString() || undefined)
                }}
              >
                 <Label htmlFor='time'>Time</Label>
                <Button>
                  <SelectValue>
                    {!selectedTime ? <>Select a time</> : time.find(t => t.value === selectedTime)?.time}
                  </SelectValue>
                  <span aria-hidden="true"><Image src={selectArrow} alt=''/></span>
                </Button>
                <Popover className={formStyles.popover} offset={0}>
                  <ListBox>
                    {time.map((item) => (
                      <ListBoxItem key={item.id} id={item.value} className={formStyles.listboxitems}>
                        {item.time}
                      </ListBoxItem>
                    ))}
                  </ListBox>
                </Popover>
              </Select>
            <button type='submit'>Find a Table</button>
        </form>
    )
  }
  return (
    <div className={`${styles.reserveS1} py-[3rem] px-[1.5rem] overflow-hidden`}>
      <h1 className='text-[1.8rem] mb-[1rem]'>BOOK A TABLE</h1>
        {isClient && <ReservationForm />}
    </div>
  )
}
