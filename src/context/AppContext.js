import React from 'react';
import { useState } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({children})=> {
    const [text, setText] = useState('');
    const [search , setsearch] = useState('all');
    let [pgcount , setpage] = useState(1);
    
    const onSearch = () => {
        if(!text.trim())
            alert("aa");
        else{
        setsearch(text);
        setpage(1);
        }
    }
    const goDefault =() =>{
        setpage(1);
        setsearch("all");

    }
    
  return (
    <AppContext.Provider value={{text,setText,onSearch,search,pgcount,setpage,goDefault}}>
        {children}
    </AppContext.Provider>
  )
}
export default AppContext;