import Button from "../button/Button"
import {useGlobalContext} from '../../Context/Appcontext'

const Auth = () => {
    const { handleProvider} = useGlobalContext()


    return(
        <div className="">
            <Button
                isLoading={false}
                isColored
                label='Sign up'
                handleFunction={handleProvider}
            />
        </div>
    )
}
export default Auth