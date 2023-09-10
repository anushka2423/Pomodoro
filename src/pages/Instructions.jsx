import React, { useContext } from 'react'
import BackButton from '../buttons/BackButton'
import MainContext from '../component/MainContext'

const Instructions = () => {
  const mainInfo = useContext(MainContext);
  return (
    <div className='max-w-[800px] m-auto bg-slate-50 bg-opacity-50 px-10 py-5 font-serif font-normal rounded-xl'>
        <p className='text-xl'><b className=' font-extrabold'>Hover on the Focus Button:</b> Hover your cursor over the "Focus" button.</p>
        <br />
        <h3 className='text-xl'>Choose Break Duration:</h3>
        <p>To take a Short Break, simply click on it.</p>
        <p>To take a Long Break, click on it.</p>
        <br />
        <h4>After 25 minutes, which marks the completion of your task the timer will automatically gets completed.</h4>
        <br />
        <h3 className='font-bold'>Task Repetition:</h3>
        <p>To repeat the task, increase the number of times you want to perform it.</p>
        <br />
        <h3 className='font-bold'>Scheduled Breaks:</h3>
        <p>Enjoy a 5-minute break in between each task.</p>
        <br />
        <h3 className='font-bold'>Add Tasks:</h3>
        <p>Add the tasks you want to perform in your session.</p>
        <br />
        <p><i>Now, you're all set to make the most of your focused work sessions!</i></p>

        <div className='item-center flex justify-end'>
          <BackButton onClick={() => mainInfo.setShowInstructions(false)}/>
        </div>
    </div>
  )
}

export default Instructions
