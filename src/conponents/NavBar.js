import React,{useState} from 'react'
import{AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
export default function NavBar() {
    const [nav, setNav]=useState(false)
     
    const handelNav=()=>{
        setNav(!nav)
    }
 
    return (
        <>
            <div className= 'text-white flex justify-between items-center h-24 max-w-[1240px]  mx-auto px-4'>
                <h1 className='w-full text-3xl font-bold text-[#00fd9a] '>Tailwind CSS</h1>
                <ul className='hidden md:flex'>
                    <li className='p-4'>
                        Home
                    </li>
                    <li className='p-4'>
                        AboutUs
                    </li>
                    <li className='p-4'>
                        Contact
                    </li>
                    <li className='p-4'>
                        company
                    </li>
                    <li className='p-4'>
                        Rate
                    </li>
                </ul>
                <div size={20} onClick={handelNav} className='block md:hidden'>
                    { !nav ? <AiOutlineClose size={20}/>: <AiOutlineMenu/>
                   } 
                </div>
                <div className={!nav ?  "fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" :'fixed left-[-100%]'}>
                <h1 className='w-full m-4 text-3xl font-bold text-[#00fd9a] '>Tailwind CSS</h1>
                    <ul className=' uppercase p-4'>
                    
                    <li className='p-4 border-b border-gray-600'>
                        Home
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        About Us
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        Contact
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        company
                    </li>
                    <li className='p-4'>
                        Rate
                    </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
