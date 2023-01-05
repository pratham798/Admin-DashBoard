import React from 'react'
import {Link,NavLink} from 'react-router-dom';
import {SiShopware} from 'react-icons/si';
import {MdOutlineCancel} from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';

import {links} from '../data/dummy';

const Sidebar = () => {
  const {activeMenu,setActiveMenu,screenSize,currentColor}=useStateContext();// these values are acutally declared as hooks in state context so we are taking it from there

  const handleCloseSideBar=()=>{
    if(activeMenu && screenSize<=900)
    {
      setActiveMenu(false);
    }
  }
  //premade tailwind classes used below in ternary operations
  const activeLink='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  return (
    <div className='ml-3 h-screen md:overflow-hidden
    overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
    <>
          <div className='flex justify-between items-center'>
             <Link to="/" onClick={handleCloseSideBar}
             className='items-center gap-3 ml-3 mt-4 flex text-xl tracking-tight font-extrabold dark:text-white text-slate-900'>
                <SiShopware/> <span>Shoppy</span>
             </Link>
             <TooltipComponent content="Menu" position="BottomCenter">
              <button type="button" onClick={(prevActiveMenu)=>setActiveMenu(!prevActiveMenu)}
              className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
                <MdOutlineCancel/>
              </button>
             </TooltipComponent>          
          </div>
          <div className='mt-10'>
             {links.map((item)=>{
              return(
                <div key={item.title}>
                 <p className='text-gray-400 m-3 mt-4 uppercase'>
                  {item.title}
                 </p>
                 {item.links.map((Link)=>(
                  //nav link is an inbuilt tag in react router
                  //it is diff rfrom route path as route path is used to specify a url to a certain name while navlink/link works like an anchor tag in html which allows us to access that route
                  <NavLink 
                  to={`/${Link.name}`}
                  key={Link.name}
                  onClick={handleCloseSideBar}
                  style={({isActive}) =>({
                    backgroundColor:isActive ? currentColor : ''
                  })}
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {Link.icon}
                    <span className='capitalize'>
                      {Link.name}
                    </span>
                  </NavLink>
                ))}
                </div>
              );
             })}
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar
