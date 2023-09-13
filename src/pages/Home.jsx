import { useState , useEffect,useContext, useRef } from 'react';
import PlayButtons from '../buttons/PlayButtons';
import PauseButtons from '../buttons/PauseButtons';
import TimerSoundFile from '../sounds/TimerSound.mp3';
import AdjustmentContext from '../component/AdjustmentContext';
import { CircularProgressbarWithChildren , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import focus from '../images/focus.png';
import freeTime from '../images/Break.png'
import useSound from 'use-sound';

const Home = ({isHovered}) => {
    
    const [timerSound] = useSound(TimerSoundFile);
    const [isHover, setIsHover] = useState(false);
    let hoverTimeout;

    // Handling the timer
    const settingInfo =  useContext(AdjustmentContext);
    
    const [isPaused , setIsPaused] = useState(true);
    const [mode , setMode] = useState('break');
    const [secLeft , setSecLeft] = useState((mode ==='Focus' ? (settingInfo.workMinutes) : (settingInfo.breakMinutes)) * 60);

    const isPausedRef = useRef(isPaused);
    const secLeftRef = useRef(secLeft);
    const modeRef = useRef(mode);

    function initTimer() {
        setSecLeft((mode ==='Focus' ? (settingInfo.workMinutes) : (settingInfo.breakMinutes)) * 60); 
    }

    function switchMode () {
        timerSound()
        const nextMode = modeRef.current === 'Focus'? 'break' : 'Focus'; 
        const nextSec = (nextMode ==='Focus' ? settingInfo.workMinutes : settingInfo.breakMinutes) * 60

        setMode(nextMode);
        modeRef.current = nextMode

        setSecLeft(nextSec);
        secLeftRef.current = nextSec
    }

    function tick() {
        secLeftRef.current--
        setSecLeft(secLeftRef.current);
    }

    useEffect(() => {
        initTimer();

        const interval = setInterval(() => {
            if(isPausedRef.current) {
                return;
            }
            if(secLeftRef.current === 0) {
                return switchMode();
            }
            tick();
        } , 1000)

        return () => clearInterval(interval);

    } , [settingInfo])

    // end here 

    const handleClick = (option) => {
        setMode(option);
        switchMode(); //here was the problem bina zero kare hi start karrahe the 
        setIsHover(false);
    }

    const handleLeave = () => {
        hoverTimeout = setTimeout(() => {
            setIsHover(false);
        }, 1500);

    }

    const handleButtonClick = () => {
        timerSound()
        setIsPaused((prevState) => {
            const nextState = !prevState;
            isPausedRef.current = nextState;
            return nextState;
        });
    };
    

    // code for spinner
    const totalSec = mode ==='Focus'
    ? (settingInfo.workMinutes * 60)
    : (settingInfo.breakMinutes * 60)

    const percent = Math.round((secLeft / totalSec) * 100);

    const min = Math.floor(secLeft / 60);
    let sec = secLeft % 60;
    if(sec < 10){ sec = '0'+sec}

    // code ends here

  return (
    <div className='grid grid-flow-row'>

        <div className='flex flex-col justify-center items-center'>
        <div>
            {/* Selecting the options here focus or break mode */}
            {mode === 'Focus' ? (
                <div className={`${isHovered ? 'opacity-50' : ''}`}>
                    <CircularProgressbarWithChildren
                    value={percent}
                    styles={buildStyles({
                        textColor: '#000',
                        pathColor: '#ffffffff'
                    })}>
                        <img style={{ width: 150, marginTop: -5 }} src={focus} alt="focus" />
                        <div className='flex flex-col items-center mt-[-10px] font-bold'>
                            <span>{`${percent}%`}</span>
                            <span>{`${min + ':' + sec}` }</span>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
            ):(
                <div className={`${isHovered ? 'opacity-50':''}`}>
                   <CircularProgressbarWithChildren 
                   value={percent} 
                   styles={buildStyles({
                        textColor: '#000',
                        pathColor: '#ffffff'
                    })}>
                        <img style={{ width: 150, marginTop: -5 }} src={freeTime} alt="Its Break Time" />
                        <div className='flex flex-col items-center mt-[-10px] font-bold'>
                            <span>{`${percent}%`}</span>
                            <span>{`${min + ':' + sec}` }</span>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
            )}
        </div>

        {/* selecting the buttons here */}

        <div className='flex mt-5'>
        {isPausedRef.current ? (<PlayButtons onClick={handleButtonClick}/>) 
        : <PauseButtons onClick={handleButtonClick}/>} 
        </div>

        {/* making selection option buttons */}
        <div className='mt-5'>
            <button
                className='bg-[#b2967d] w-40 h-10 overflow-hidden font-bold rounded-md mb-1 cursor-pointer'
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={handleLeave}
            >
                {mode}
            </button>
            {
                isHover && (
                    <div
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={handleLeave}
                        className="flex flex-col gap-1 cursor-pointer"
                    >
                        <button className='bg-[#b2967d] w-40 h-10 overflow-hidden font-bold rounded-md hover:bg-[#a98467]' onClick={() => handleClick('Focus')}>Focus</button>
                        <button className='bg-[#b2967d] w-40 h-10 overflow-hidden font-bold rounded-md hover:bg-[#a98467]' onClick={() => handleClick('break')}>Break</button>
                    </div>
                )
            }
        </div>
        
        </div>
    </div>
  )
}

export default Home
