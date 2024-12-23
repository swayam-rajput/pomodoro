import React from 'react'

const Modal = () => {
    // const [isOpen, setIsOpen] = useState(open);
    
    const btnclass = 'inline-flex items-center justify-center whitespace-nowrap rounded-md  text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  disabled:cursor-not-allowed disabled:opacity-50 px-4 py-2 shadow-sm '
    
    return (
        
        <div className='fixed transition inset-0 z-40 bg-black/50 data-[state=open]:animate-fadeOut data-[state=closed]:animate-fadeIn'>
            <div  role='dialog' className='flex flex-col fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50  w-[90%] rounded-lg bg-background  max-w-4xl  gap-4 p-6 shadow-lg duration-200 sm:rounded-lg sm:max-w-[425px]'>
                {/* {children} */}
                <div className='flex fixed right-0 top-0 mt-2 mr-2  active:border transition  rounded-lg justify-end'>
                    <button  className='p-1'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
                </div>
                <div className='flex mt-2 gap-2 flex-col'>
                    <div className='flex flex-col gap-1 font-bold'>
                        {'End Session'}
                        <div className='font-medium text-sm opacity-80'>Are you sure you want to end this session?</div>
                    </div>
                    <div className="flex mt-2 flex-row gap-2">
                        <button className={btnclass+'bg-white text-text-accent'}>Yes</button>
                        <button className={btnclass+' border border-[#e4e4e7] border-opacity-40  '}>No</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Modal

// const Modal = ({open=true,onClose=null, children}) => {
//     return (
//         <div onClick={onClose} className={` fixed inset-0 z-50 flex items-center transition-opacity justify-center rounded-md  ${open ? ' opacity-100 visible backdrop-blur-sm ':' opacity-0 invisible '} `}>
//             <div className={`p-8 w-80 text-center bg-slate-400 rounded-lg flex gap-6 flex-col justify-between `} >
//                 {children}
//             </div>

//         </div>
//     )
// }