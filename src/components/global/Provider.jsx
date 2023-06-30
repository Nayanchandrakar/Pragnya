import { useEffect ,useState } from "react"
import {useGlobalContext} from '../../Context/Appcontext'
import {AiOutlineCloseCircle} from 'react-icons/ai'

const Provider = () => {

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
        <div className={`fixed overflow-hidden bg-black/[.6] z-[1] transition-all duration-200  ${IsOpen ? 'visible w-full h-full ':'invisible h-[50%] w-[50%] rounded-full'} flex justify-center items-center inset-0 `}>
            <div 
                className={`bg-white p-8 rounded-xl shadow-2xl shadow-black/[.4] w-[30rem] ${OpenProvider ? 'translate-y-0 visible' : 'translate-y-full invisible'} transition-all duration-400 `}
            >
                <div className="flex justify-between items-center m-4 mb-10">
                    <span/>
                    <span className="text-lg antialiased font-bold font_orbitron ">SignUp</span>
                    <AiOutlineCloseCircle
                        size={30}
                        onClick={handleClose}
                        className="cursor-pointer"
                    />
                </div>
                hello world div
            </div>
        </div>
    )
}
export default Provider