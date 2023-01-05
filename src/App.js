import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';// for creating routes through different pages
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';//imported from pre made components

import {Navbar,Footer,Sidebar,ThemeSettings} from './components';
import {Ecommerce,Orders,Calendar,Employees,Stacked,Pyramid,Kanban,
Customers,Area,Bar,Pie,Financial,ColorPicker,ColorMapping,Editor,Line} from './Pages';

//Now that app.js is wrapped inside context provider we can access all the dynamic states present in context by importing below command
import { useStateContext } from './contexts/ContextProvider';

import './App.css'
const App = () => {
  const {activeMenu,themeSettings,setThemeSettings,currentColor,currentMode}=useStateContext(); //dynamic variable activemenu created through use state hook and present is statecontext
  return (
    <div className={currentMode==='Dark'? 'dark' : '' }>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed bottom-4 right-4" style={{zIndex:'1000'}}>
            {/* Premade component imported */}
            <TooltipComponent content="Settings" position="Top"> 
              <button type='button' 
              className='text-3xl p-3
              hover:drop-shadow-xl
              hover:bg-light-gray text-white'
              onClick={()=>setThemeSettings(true)}
              style={{borderRadius:'50%',background: currentColor}}> 
                <FiSettings/>
              </button>
            </TooltipComponent>
          </div>
          {/* use of ternary operators:- if active menu then show sidebar otherwise dont */}
          {activeMenu ?
          (
            <div className='w-72 fixed sidebar
             dark:bg-secondary-dark-bg
             bg-white'>
             <Sidebar/>
            </div>):
          (
            <div className='w-0 dark:bg-secondary-dark-bg'>
             <Sidebar/>
            </div>
          )}
          <div className={
            //common tailwind css code is placed here after words the code using ternary code is used through $ operator
            `dark:bg-main-dark-bg bg-main-bg
            min-h-screen  w-full
            ${activeMenu ? 'md:ml-72'
            :'flex-2'}`
          }>
           <div className='fixed md:static bg-main-bg
            dark:bg-main-dark-bg navbar w-full'>
             <Navbar/>
           </div>
            {/* only show theme settings if it is true */}
            {themeSettings && <ThemeSettings/>}
          <div>
            <Routes>
              {/* Dashboard */}

              {/* element specifies the name used to render the things from the certain route it is associated to */}
              <Route path="/" element={<Ecommerce/>}/>
              <Route path="/ecommerce" element={<Ecommerce/>}/>

              {/* Pages */}

              <Route path="/orders" element={<Orders/>}/>
              <Route path="/employees" element={<Employees/>}/>
              <Route path="/customers" element={<Customers/>}/>

              {/* Apps */}

              <Route path='/kanban' element={<Kanban/>}/>
              <Route path='/editor' element={<Editor/>}/>
              <Route path='/calendar' element={<Calendar/>}/>
              <Route path='/color-picker' element={<ColorPicker/>}/>

              {/* Charts */}
              
              <Route path='/line' element={<Line/>}/>
              <Route path='/area' element={<Area/>}/>
              <Route path='/bar' element={<Bar/>}/>
              <Route path='/pie' element={<Pie/>}/>
              <Route path='/financial' element={<Financial/>}/>
              <Route path='/color-mapping' element={<ColorMapping/>}/>
              <Route path='/pyramid' element={<Pyramid/>}/>
              <Route path='/stacked' element={<Stacked/>}/>

            </Routes>
          </div>
        </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App

