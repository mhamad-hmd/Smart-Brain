import React from 'react';
import useStore from '../store/store';


const Navigation = ({onRouteChange}) => {
    const route = useStore((state) => state.route)

   if(route === "home") return(
    <nav className=' flex justify-end '>
     <p onClick={() => onRouteChange('signin')} className='py-1 px-5 mr-2  bg-white/0 shadow-xl text-md font-sans focus:outline-none  rounded-full hover:scale-105 border border-black mt-1 cursor-pointer'> Sign Out </p>
     </nav>
    )
    else if(route === "register"){
        return(
            <nav className=' flex justify-end '>
                <p onClick={() => onRouteChange('signin')} className=' py-1  px-5 mr-2  bg-white/0 shadow-xl text-md font-sans focus:outline-none  rounded-full hover:scale-105 border border-black mt-1 cursor-pointer  '> Sign In </p>
            </nav>
        )
    }
    else{
        <nav className=' flex justify-end '>
     </nav>
    }
}

export default Navigation