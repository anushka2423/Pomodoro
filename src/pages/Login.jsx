import React, { useContext } from 'react'
import profile from '../images/profile.png'
import BackButton from '../buttons/BackButton'
import MainContext from '../component/MainContext'
import SignupButton from '../buttons/SignupButton'
import AdjustmentContext from '../component/AdjustmentContext'

const Login = () => {
  const mainInfo = useContext(MainContext);
  const settingInfo = useContext(AdjustmentContext);

  return (
    <div className='max-w-[800px] w-max m-auto z-50'>
      {/*username login with google*/}

      <div className='flex flex-col items-center relative'>
        <div className=' absolute bg-[#4e3d2e] border border-[#4e3d2e] w-[100px] h-[100px] rounded-full z-[20]'>
          <img src={profile} alt="" />
        </div>
        <form className='mt-[70px] z-10 bg-slate-50 bg-opacity-90 px-20 pt-20 pb-5 font-serif font-normal rounded-xl shadow-2xl'>
          <div className='flex flex-col items-center gap-8'>
            <span className='flex gap-2'>
              <label htmlFor="">User Name :</label>
              <input type="text" className='bg-gray-300 rounded-md py-1 px-2' />
            </span>
            <span className='flex gap-2'>
              <label>Password :</label>
              <input type="password" name="password" className='bg-gray-300 rounded-md py-1 px-2'/>
            </span>
            <span>
              <button>LOGIN</button>
            </span>
            <span className='flex font-mono text-[#674932]'>
              <p>Create Account 👇🏻</p>
            </span>
          </div>
        </form>
        <div className='mt-[-16px] bottom-[27%] hover:translate-y-[16px] hover:ease-in-out hover:transition-all z-0'>
          <SignupButton onClick={() => settingInfo.setShowSignup(true)}/>
        </div>
      </div>
        <div className='flex justify-end items-end mb-5 absolute top-[20%] left-[50%'>
          <BackButton onClick={() => mainInfo.setShowLogIn(false)}/>
        </div>
    </div>
  )
}

export default Login 
