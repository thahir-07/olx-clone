import { createContext, useState } from "react"
export const postContext=createContext(null)
export default function Post({children}){
    const [postDetatils,setPostDetails]=useState(null)
    return (
        
        <postContext.Provider value={{postDetatils,setPostDetails}}>
        {children}
        </postContext.Provider>

    )
}