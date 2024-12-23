import React, { useEffect, useState } from 'react'
import Modal from './Modal';
import { initializePomodoroTimes,getPomodoroTimes } from './data/timer-updates';
import { count } from 'console';
const Timer = () => {
    const tabsclassname = "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=inactive]:text-text-primary  data-[state=active]:bg-foreground bg-opacity-0 duration-500 data-[state=active]:bg-opacity-100  data-[state=active]:text-text-accent data-[state=active]:shadow py-2";
    
    const [audio] = useState(()=>new Audio('/sounds/notif.mp3'));
    const [currentmode, setCurrentMode] = useState("") // this var is for tracking the current moe
    const [mode, setMode] = useState("work");
    const [worktime,setWorkTime] = useState((getPomodoroTimes().workTime)*60) // this is for updating the work timer 
    const [breaktime,setBreakTime] = useState((getPomodoroTimes().breakTime)*60) // this is for updating the break timer
    const [displayTime,setDisplayTime] = useState(currentmode == 'work'?worktime:breaktime) // this is only for showing the default timer value of the respective mode
    const [thetime,setTime] = useState(mode == 'work'?worktime:breaktime) // this is for storing the currently executing time
    const [isRunning,startTimer] = useState(false)
    const [showReset,setReset] = useState(false)
    const [reset,resetPomo] = useState(false)
    const [showModal,setShowModal] = useState(false)
    const [hydrated, setHydrated] = useState(false);
    // shouldnt have added these many vars
    
    
    useEffect(() => {
        setDisplayTime(mode === 'work' ? worktime : breaktime)
    },[mode,worktime,breaktime])
    
    
    useEffect(() =>{
        if (typeof window !== 'undefined') {    
            setHydrated(true);
            const obj = getPomodoroTimes();
            setWorkTime(obj.workTime*60);
            setBreakTime(obj.breakTime*60);
            setDisplayTime(mode === "work"?worktime:breaktime);       
        }
    },[getPomodoroTimes()])
    
    useEffect(() => {
        // if (!hydrated) return;
        setDisplayTime(mode === "work" ? worktime : breaktime);
    }, [mode, worktime, breaktime]);

    const startPomodoro = () => {
        // Toggle the timer's running state without resetting the time
        if (!isRunning){
            setCurrentMode(mode);
            if (currentmode !== mode)
                setTime(mode === "work"?worktime:breaktime);
        }
        setReset(true)
        startTimer((prev) => !prev);
    };
    const getTime = () =>{
        if (currentmode === mode)
            return thetime
        else{
            return displayTime
            // return mode === 'work' ? worktime : breaktime;
        }
    }
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };


    // if (document)
        // document.title = `${formatTime(mode === 'work' ? worktime : breaktime)}`;
    useEffect(() => {
        let timer;
        // if (isRunning)
        document.title = `${formatTime(thetime)}`;
        // else document.title = `${formatTime(mode === 'work' ? worktime : breaktime)}`;
        
        if (isRunning) {
          timer = setInterval(() => {
            
            setTime((prevTime) => {
                if (prevTime <= 0) {
                    toggleMode(); // Switch modes when time is up
                    startTimer(false);
                    // return mode === 'work' ? breaktime : worktime; // 5 mins break or 25 mins work
                    audio.play();
                    resetTimer()
                    return mode ==='work' ? worktime : breaktime;
                }
                return prevTime - 1; // Countdown by 1 second
            });
          }, 1000);
        }
        return () => clearInterval(timer); // Cleanup timer on unmount or pause
      }, [isRunning, thetime,currentmode,worktime,breaktime]);
    
    
    
    const toggleMode = () => {
        setMode((prevMode) => {
            const newMode = prevMode === "work" ? "break" : "work";
            return newMode;
        });
    };
    

    const resetTimer = () =>{
        resetPomo(true);
        startTimer(false);
        // setMode(mode);
        setReset(false);
        setTime(currentmode === "work"?worktime:breaktime);
        // resetPomo(false)
    }

    return (
        <div className='w-[80%] mb-16 mx-auto md:w-full h-full flex justify-center items-center'>
            <div className='md:w-[60%] w-full flex flex-col gap-y-10'>
                <div id='modetabs' className='z-30 grid grid-cols-2  items-center justify-center mb-6'>
                    <button className={tabsclassname} onClick={() => {setMode("work");}} data-state={mode === "work" ? "active" : "inactive"} >Deep Work</button>
                    <button className={tabsclassname} onClick={() => {setMode("break");}} data-state={mode === "break" ? "active" : "inactive"}>Break Time</button>
                </div>
                
                <div className='flex z-40 w-full justify-center items-center flex-col mb-6'><div className="text-8xl flex w-full tabular-nums justify-center font-bold  text-center md:text-[9rem]">{formatTime(getTime())}</div></div>
                
                <div id='playpause' className='flex justify-center transition-all z-30 flex-row gap-4'>
                    
                    <button className='flex px-4 flex-grow active:bg-opacity-75 transition items-center justify-center py-2 dark:bg-slate-100 bg-black rounded-md text-text-accent' onClick={startPomodoro}>
                        {(currentmode == mode) && isRunning ? 
                            (
                                <div className='flex flex-row  gap-6'>
                                    <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="w-8 h-8 text-text-accent"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5"></path></svg>                                
                                </div>
                            )
                            :
                            (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="w-8 h-8 text-text-primary dark:text-text-accent" ><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"></path></svg>)}
                    </button>
                    {(showReset)
                        &&
                        <button onClick={resetTimer} className='flex transition justify-center py-2 active:bg-text-primary px-1 rounded-md text-text-accent' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="w-8 h-8 text-text-primary active:text-text-accent"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg></button>
                        
                    }
                    
                    <Modal  opened={showModal}/>
                </div>
            </div>

        </div>
    )
}

export default Timer