import React, { useContext, useState } from 'react'
import BackButton from '../buttons/BackButton'
import AdjustmentContext from '../component/AdjustmentContext';

const MySignup = () => {
    const settingInfo = useContext(AdjustmentContext);
  return (
    <div className='max-w-[800px] w-max m-auto'>
        <div className='bg-slate-50 bg-opacity-90 px-20 py-20 font-serif font-normal rounded-xl shadow-2xl'>
            <form className='flex flex-col gap-4 items-center relative'>
                <span className=' flex gap-3'>
                    <input type="text" placeholder='LastName'  className='w-[240px] bg-gray-300 rounded-md py-1 px-2'/>
                    <input type="text" placeholder='FirstName' className='w-[240px] bg-gray-300 rounded-md py-1 px-2'/>
                </span>
                <span className='grid gap-4'>
                <input type="email" placeholder='Email' className='w-[500px] bg-gray-300 rounded-md py-1 px-2'/>
                <input type="password" placeholder='Password' className='bg-gray-300 rounded-md py-1 px-2'/>
                <input type="password" placeholder='Confirm Password' className='bg-gray-300 rounded-md py-1 px-2'/>

                <input type="submit" value="SIGN UP" className='bg-[#b2967d] hover:bg-[#a98467] rounded-md py-1 px-2'/>
                </span>
            </form>
        </div>
      
      <div className='flex items-center justify-center'>
        <BackButton onClick={() => settingInfo.setShowSignup(false)}/>
      </div>
    </div>
  )
}

export default MySignup
