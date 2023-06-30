import {useContext,createContext,useState,useCallback} from 'react'

const ContextProvider = createContext()


const Appcontext = ({
    children
}) => {

    // usestate declaration here
    const [IsOpen , setisOpen] = useState(false)


    // start from here 

    const handleProvider = useCallback(() => {
        setisOpen(prev => !prev)
    },[])


    return(
        <ContextProvider.Provider value={{handleProvider ,IsOpen}}>
            {children}
        </ContextProvider.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(ContextProvider)
}

export  {Appcontext , useGlobalContext}