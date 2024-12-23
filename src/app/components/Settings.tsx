import React, { useEffect, useState } from 'react'
import { getPomodoroTimes, updatePomodoroTimes } from './data/timer-updates'
const Settings = ({closeSettings}) => {
    // let open = isOpen
    // ;
    const obj = getPomodoroTimes()
    // const [open,setOpen] = useState(isOpen)
    const [worktime,setWorktime] = useState(obj.workTime)
    const [breaktime,setBreaktime] = useState(obj.breakTime)
    const [disableChange,setDisabled] = useState(false)
    const saveChanges = ()=>{
        updatePomodoroTimes(worktime,breaktime);
        closeSettings();
    }
    const resetTimers = ()=>{
        updatePomodoroTimes(25,5);
        closeSettings();
    }

    

    useEffect(()=>{
        if (worktime <= 0 || worktime > 240 || breaktime <= 0 || breaktime > 60) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    },[worktime,breaktime])
    const btnclass = 'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none disabled:cursor-not-allowed hover:border-opacity-100 bg-[$404040] text-opacity-100  disabled:opacity-50  py-2  border border-neutral-400 border-opacity-60'
    return (
        // <div className='fixed transition inset-0 z-40 bg-black/50 '>
        //     <div  role='dialog' className='flex flex-col fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50  w-[90%] rounded-lg bg-background  max-w-4xl  gap-4 p-6 shadow-lg duration-200   sm:rounded-lg sm:max-w-[425px]'>
             
        <div className='fixed inset-0 z-50 flex flex-col justify-center items-center backdrop-blur-sm transition  top-0 left-0 right-0 bottom-0 bg-black/65 animate-fadeIn'>
            <div role='dialog' className='flex flex-col relative w-[80%] sm:w-[40%]  rounded-lg bg-background  gap-4 p-6  shadow-lg duration-200'>
                <div className=' absolute right-2 top-1 mt-2 mr-1  active:border transition  rounded-lg justify-end'>
                    <button onClick={closeSettings} className='p-1'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
                </div>

                <div className='flex flex-col px-8 pt-5'>
                    <div className='font-bold'>Settings</div>
                    <hr className='h-px bg-[#404040] opacity-40  border-0 my-2'></hr>
                </div>
                {/* <div className='h-[1px] border w-full'></div> */}
                <div className='flex sm:flex-row flex-col mt-2 my-4 pl-8 gap-8 justify-between'>
                    <div className='flex flex-col gap-2 text-sm font-normal'>
                        <div className='font-medium opacity-70'>
                            Deep Work Session
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <input  type="text" pattern='^(?:[1-9]?[0-9]|1[0-9]{2}|2[0-3][0-9]|240)$' onChange={(e)=>setWorktime(Number(e.target.value))} defaultValue={obj.workTime} className='appearance-none sm:w-[30%] outline-none p-2 w-[20%] h-8 bg-[#404040] rounded-md  transition duration-200 border border-opacity-0 border-blue-800 focus-within:border-opacity-100 invalid:border-red-500 ' />
                            <div className='opacity-60'> minutes</div>

                        </div>
                        
                    </div>
                    <div className='flex flex-col gap-2 text-sm justify-between font-normal'>
                        <div className='font-medium opacity-70'>
                            Break Time

                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <input type="text" pattern='^(?:[1-5]?[0-9]?|60)$' onChange={(e)=>setBreaktime(Number(e.target.value))} defaultValue={obj.breakTime}  className='appearance-none sm:w-[30%] outline-none p-2 w-[20%] h-8 bg-[#404040] rounded-md  transition duration-200 border border-opacity-0 invalid:border-red-500 invalid:border-opacity-100  border-blue-800 ' />
                            <div className='opacity-60'> minutes</div>
                        </div>
                    </div>
                </div>
                <div className="flex mt-2 flex-row gap-4 mb-6 px-8">
                    {/* {/* <button className={btnclass+'bg-white text-text-accent'}>Yes</button> */}
                    <button disabled={disableChange} onClick={saveChanges} className={btnclass+'  gap-2'}>
                    <p className=''>Save</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" >
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                        
                    </button> 
                    <button onClick={resetTimers} className={btnclass + ' gap-1'}>
                    <p className="">Reset</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" >
                        <path xmlns="http://www.w3.org/2000/svg" d="M510.77-368.46v-35.39h138.46v35.39H510.77ZM578.46-160v-57.69h-67.69v-35.39h67.69v-57.69h35.39V-160h-35.39Zm83.08-57.69v-35.39H800v35.39H661.54Zm35.38-93.08v-150.77h35.39v57.69H800v35.39h-67.69v57.69h-35.39Zm87.93-264.61h-41.47q-29.07-81.08-100.15-132.85Q572.15-760 480-760q-117 0-198.5 81.5T200-480q0 84.31 44.42 151.62 44.43 67.3 115.58 100.69V-360h40v200H200v-40h132.46q-76.61-40-124.54-114.04Q160-388.08 160-480q0-66.6 25.04-124.76 25.04-58.16 68.54-101.66 43.5-43.5 101.66-68.54Q413.4-800 480-800q108.23 0 191.12 63.35Q754-673.31 784.85-575.38Z"/>
                        </svg>
                        
                    </button> 
                </div>


            </div>

        </div>
    )
}

export default Settings