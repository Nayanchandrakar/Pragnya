import Container from "../container/Container"
import Logo from './Logo'
import Auth from './Auth'
import Navigation from './Navigation'




const Navbar = () => {



    return(
        <header className="">
        <Container>
        <nav className="flex py-4  flex-row h-fit w-full justify-between items-center">
            {/* Logo */}
            <Logo/>

            {/* menu */}
            <Navigation/>

            {/* auth */}
            <Auth/>
        </nav>
        </Container>
        </header>
    )
}
export default Navbar