import { useEffect ,useState } from "react"
import {useGlobalContext} from '../../Context/Appcontext'
import {AiOutlineCloseCircle} from 'react-icons/ai'

const Provider = ({
    children,
    label,
}) => {

    // useState defintion here
    const [OpenProvider , setOpenProvider] = useState(false)

    const {
        IsOpen,
        handleProvider
    } = useGlobalContext()


   useEffect(() => {
    IsOpen && setTimeout(() => {
        setOpenProvider(prev => !prev)
    },400)
   },[IsOpen])

   const handleClose = () => {
       setOpenProvider(prev => !prev),
        handleProvider()
   }
       

    return(
        <div className={`fixed overflow-hidden z-40 bg-black/[.7]  transition-all duration-200  ${IsOpen ? 'visible w-full h-full ':'invisible h-[50%] w-[50%] rounded-full'} flex justify-center items-center inset-0 `}>
            <div 
                className={`bg-white p-6 rounded-xl shadow-2xl shadow-black/[.4] w-[30rem] ${OpenProvider ? 'translate-y-0 visible' : 'translate-y-full invisible'} transition-all duration-400 `}
            >
                <div className="flex justify-between items-center m-4 mb-10">
                    <span/>
                    <span className="text-lg relative left-3 antialiased font-bold font_orbitron ">{label}</span>

                    <AiOutlineCloseCircle
                        size={25}
                        onClick={handleClose}
                        className="cursor-pointer  w-fit h-fit p-2 rounded-full hover:bg-zinc-100 transition-all duration-300"
                    />
                </div>
                
                {children}
            </div>
        </div>
    )
}
export default Provider