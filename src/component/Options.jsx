import { useContext, useState } from 'react';
import Instructions from '../pages/Instructions';
import Login from '../pages/Login';
import Home from '../pages/Home';
import AdjustmentSettings from '../pages/AdjustmentSettings';
import AdjustmentContext from './AdjustmentContext';
import MainContext from './MainContext';
import MySignup from '../pages/MySignup';

const Options = ({isHovered}) => {

    const mainInfo = useContext(MainContext);

    const [workMinutes , setWorkMinutes] = useState(25);
    const [breakMinutes , setBreakMinutes] = useState(5);

    const [showSigup , setShowSignup] = useState(false);
    return (
        <div className={`grid font-mono max-w-[1000px] m-auto justify-center mt-8`}>
            <AdjustmentContext.Provider value={{
                workMinutes,
                breakMinutes,

                setWorkMinutes,
                setBreakMinutes,

                showSigup ,
                setShowSignup 
            }} >
            {
                mainInfo.showInstructions ? (<Instructions/>) :
                mainInfo.showAdjustment ? (<AdjustmentSettings/>):
                showSigup?(<MySignup/>):
                mainInfo.showLogIn ? (<Login/>):
                (<Home isHovered={isHovered}/>)
            }
            </AdjustmentContext.Provider>
        </div>
    )
}

export default Options;
