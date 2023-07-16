import React from 'react';
import { useState } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({children})=> {
    const [text, setText] = useState('');
    const [search , setsearch] = useState('all');
    let [pgcount , setpage] = useState(1);
    const[dark, setDark] = useState(true);
    
    const onSearch = () => {
        if(!text.trim())
            alert("Please enter Valid search");
        else{
        setsearch(text);
        setpage(1);
        }
    }
    const clickdark = () => {
        setDark(!dark);
         (dark)? document.body.style.backgroundColor="#112D4E" : document.body.style.backgroundColor="#F9F7F7";
      };
      
    const goDefault =() =>{
        setpage(1);
        setsearch("all");

    }
    
  return (
    <AppContext.Provider value={{text,setText,onSearch,search,pgcount,setpage,goDefault,dark,clickdark}}>
        {children}
    </AppContext.Provider>
  )
}
export default AppContext;