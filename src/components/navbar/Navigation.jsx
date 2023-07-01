import {NavLink} from 'react-router-dom'
import {NavigationContent} from '../../contants/index.js'


const Navigation = () => {
    return(
        <div className="text-white lg:inline-block hidden ">
            <li className="flex justify-between gap-3 flex-row ">
                {NavigationContent?.map(menu => {
                    return(
                        <NavLink to={menu?.redirect} className="font_orbitron text-base font-semibold transition-all duration-400 hover:text-zinc-200">{menu?.label}</NavLink>
                    )
                })}
            </li>
        </div>
    )
}
export default Navigation