
import React, { useState } from 'react'
import Settings from './Settings'

const Navbar = () => {
    const [isDark,setDark] = useState(true)
    const toggleMode = ()=>{
        document.documentElement.style.colorScheme =    isDark ? 'dark':'light'
        // document.body.style.backgroundColor =  isDark ? '#020617':'#f8fafc';
        // document.body.style.color =  isDark ? 'white' : 'black'
        document.documentElement.classList.replace(!isDark ? 'dark':'light',isDark ? 'dark':'light')
        // document.body.classList.replace(!isDark ? 'dark':'light',isDark ? 'dark':'light')
		// document.documentElement.style.transition= 'all .4s'
		// document.body.style.transition= 'all .2s'
        
        console.log(document.documentElement.style.colorScheme)    
        console.log(document.documentElement.style.backgroundColor)  ;
        console.log(document.documentElement.style.color)   
		setDark(!isDark);
	}
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [zenMode,activateZen] = useState(true);

    const zenActivate = () =>{
        // if (zenMode){
        console.log('zen fun')
        let list = ['logo','btnSettings','modetabs','playpause']
        let element;
        list.forEach(el => {
            element = document.getElementById(el);
            if (element)
                  element.style.opacity = zenMode ? "0" : '1';

        });
        let zen = document.getElementById('zen')
        if (zen){
            zen.style.opacity = zenMode ? "0.05" :'1';

        }
            // }else{
                
            // }
        activateZen(!zenMode);
    }
    const toggleSettings = () => {
        setIsSettingsOpen((prev) => !prev);
    };
    return (
        <header className="inline-flex sticky top-0 py-6 z-50 ">
            <nav  className="flex flex-row sm:px-16 px-8 gap-10 w-full items-center justify-between">
            <a href="">
                <svg id='logo' width="28" className='dark:stroke-white stroke-black' height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12L9.0423 14.9289C6.11981 17.823 4.65857 19.27 5.06765 20.5185C5.10282 20.6258 5.14649 20.7302 5.19825 20.8307C5.80046 22 7.86697 22 12 22C16.133 22 18.1995 22 18.8017 20.8307C18.8535 20.7302 18.8972 20.6258 18.9323 20.5185C19.3414 19.27 17.8802 17.823 14.9577 14.9289L12 12ZM12 12L14.9577 9.07107C17.8802 6.177 19.3414 4.72997 18.9323 3.48149C18.8972 3.37417 18.8535 3.26977 18.8017 3.16926C18.1995 2 16.133 2 12 2C7.86697 2 5.80046 2 5.19825 3.16926C5.14649 3.26977 5.10282 3.37417 5.06765 3.48149C4.65857 4.72997 6.11981 6.177 9.0423 9.07107L12 12Z" stroke='white' className='stroke-white ' strokeWidth="1.5"></path> </g></svg>

            </a>
            <div className='flex flex-row gap-4'>
                
                {/* fix this theme shit */}

                {/* <button onClick={toggleMode}  className='font-medium hover:border-opacity-100 border border-gray-600 border-opacity-0 flex items-center transition duration-200  active:scale-75 scale-100 gap-x-1 p-2 cursor-pointer rounded-lg hover:underline'>
                    {!isDark 
                        ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                    }
                </button> */}

                <button id='btnSettings' onClick={toggleSettings} className='font-medium flex hover:opacity-70 items-center transition duration-100  active:scale-75 scale-100 gap-x-1 p-2 cursor-pointer rounded-lg hover:underline'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                </button>
                {
                    isSettingsOpen&&
                    <Settings closeSettings={toggleSettings}/>
                }


                <button id='zen' onClick={zenActivate} className='z-50  font-medium flex items-center hover:opacity-70 transition duration-75  active:scale-75 scale-100 gap-x-1 p-2 cursor-pointer rounded-lg hover:underline'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
                </button>

            </div>
            </nav>
            
        </header>
    )
}

export default Navbar