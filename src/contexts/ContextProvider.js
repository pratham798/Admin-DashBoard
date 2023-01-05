// Context provides a way to pass data through the component tree without having to pass props down manually at every level.
//the data passed through context can be considered global as it can be used in any component
import { createContext, useContext , useState } from "react";
 
const StateContext=createContext();

const initialState={
    chat:false,
    cart:false,
    notification:false,
    userProfile:false,
}

//context provider is an inbuilt command in state context which takes an object as children
export const ContextProvider = ({children})=>{
    //these are all the states which are decalred to be used in multiple pages or components
    const [activeMenu,setActiveMenu]=useState(true);
    const [isClicked,setIsClicked]=useState('initialState');
    const [screenSize,setScreenSize]=useState(undefined);
    const [currentColor,setCurrentColor]=useState('#03C9D7');
    const [currentMode,setCurrentMode]=useState('Light');
    const [themeSettings,setThemeSettings]=useState(false);

    const setMode=(e)=>{
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode',e.target.value);
    }
    const setColor=(color)=>{
        setCurrentColor(color);
        localStorage.setItem('colorMode',color);
        setThemeSettings(false);
    }

    const handleClick=(clicked)=>(
        // all the initial state values are accessed using ...initialState and then the one which is clicked is marked as true
        setIsClicked({...initialState,[clicked]:true})
      )
    return(
        //the tag below is a part of syntax which has a value associated to it.
        //any thing placed in that value is accesible to all the pages or components
        <StateContext.Provider value={{activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,screenSize,setScreenSize,currentColor,currentMode,themeSettings,setThemeSettings,setMode,setColor}}>
        {/* children helps us to return or display whatever is wrapped in the context */}
           {children}
        </StateContext.Provider>
    )
}

export const useStateContext=()=>useContext(StateContext);