import React from 'react'
import ReactSlider from 'react-slider'
import { useContext} from 'react'
import AdjustmentContext from '../component/AdjustmentContext'
import BackButton from '../buttons/BackButton'
import MainContext from '../component/MainContext'

const AdjustmentSettings = () => {
  const settingInfo =  useContext(AdjustmentContext);
  const mainInfo = useContext(MainContext);
  return (
    <div className=''>

        <div>
        <label htmlFor="">Focus : {settingInfo.workMinutes} : 00</label>
        <ReactSlider
        className={`h-5 border border-b-orange-900 rounded-2xl`}
        thumbClassName='bg-orange-900 curser-pointer w-6 h-6 rounded-full'
        trackClassName=''
        onChange={newValue => settingInfo.setWorkMinutes(newValue)}
        value={settingInfo.workMinutes}
        min={1}
        max={120}
        />
        </div>

        <div className='mt-10'>
        <label>Break : {settingInfo.breakMinutes} : 00</label>
        <ReactSlider
        className={`h-5 border border-b-orange-900 rounded-2xl`}
        thumbClassName='bg-orange-900 curser-pointer w-6 h-6 rounded-full'
        trackClassName=''
        onChange={(newValue) => settingInfo.setBreakMinutes(newValue)}
        value={settingInfo.breakMinutes}
        min={1}
        max={45}
        />
        <div className='item-center flex justify-center mt-10'>
          <BackButton onClick={() => mainInfo.setShowAdjustment(false)}/>
        </div>
        </div>
        
    </div>
  )
}

export default AdjustmentSettings
