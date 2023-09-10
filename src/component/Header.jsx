import React, { useState } from 'react'
import rabbit from '../images/Rabbit.png'
import { useContext } from 'react'
import MainContext from './MainContext'
import InstructionsButton from '../buttons/InstructionsButton'
import Adjustments from '../buttons/Adjustments'
import ClickMe from '../buttons/ClickMe'

const Header = ({isHovered , setIsHovered}) => {
  const mainInfo = useContext(MainContext);
  return (
    <div>
      <div className="max-w-[1180px] m-auto flex justify-between pt-5">
        <span className="flex gap-1 items-center"> 
          <img src={rabbit} alt="image" width='50px'/> 
          <p className="font-bold cursor-pointer" 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          >Pomodoro</p> 
          {
            isHovered && (
                <div className='absolute bg-slate-100 bg-opacity-50 translate-y-[100px] rounded-md py-3 px-3 w-[1000px] m-auto transition ease-in-out delay-150 z-[500]'>
                    <h1 className='font-bold text-xl'>What is Pomodoro Technique? 🍅</h1>
                    <p className=' font-semibold text-lg font-serif'>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. It is named after the Italian word for "tomato" because Cirillo initially used a tomato-shaped kitchen timer to track his work intervals. The technique is designed to improve productivity and time management by breaking work into focused, timed intervals separated by short breaks.</p>
                </div>
            )
          }
        </span>

        <span className="flex gap-8 font-serif justify-end">
          <Adjustments onClick={() => mainInfo.setShowAdjustment(true)}/>
          <InstructionsButton onClick={() => mainInfo.setShowInstructions(true)}/>
          <ClickMe onClick={() => mainInfo.setShowLogIn(true)}/>
        </span>
      </div>

    </div>
  )
}

export default Header