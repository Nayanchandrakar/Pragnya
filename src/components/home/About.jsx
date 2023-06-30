import HeadingShortner from '../global/HeadingShortner'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import {MdSecurity} from 'react-icons/md'
import {BiWalletAlt} from 'react-icons/bi'


const About = () => {
    return(
        <section className="pt-24 flex flex-col gap-12">
            <HeadingShortner
                headline="About us"
                paragraph="
                Welcome to our revolutionary NFT platform, where art, technology, and innovation merge to create a remarkable digital experience. At [Platform Name], we are committed to empowering artists, collectors, and enthusiasts to participate in the exciting world of non-fungible tokens.
                "
            />
             
             <div className="rounded-xl bg-white/[.1] backdrop-blur-2xl w-full h-full">

                {/* first div */}
                <div className="flex flex-row justify-between items-center gap-4 sm:gap-0 px-8 sm:px-12 py-4  border-b-[3px] border-primary ">
                    <span className='flex flex-col items-center sm:items-start'>
                        <strong className='text-[5vw] xl:text-[4rem] text-white font-Poppins font-extrabold'>
                            1.5K+
                        </strong>
                        <strong className='text-zinc-400 text-sm font-bold sm:text-lg '>Collections</strong>
                    </span>
                    <span className='flex flex-col items-center sm:items-start'>
                        <strong className='text-[5vw] xl:text-[4rem] text-white font-Poppins font-extrabold'>
                            1.5K+
                        </strong>
                        <strong className='text-zinc-400 text-sm font-bold sm:text-lg '>Collections</strong>
                    </span>
                    <span className='flex flex-col items-center sm:items-start'>
                        <strong className='text-[5vw] xl:text-[4rem] text-white font-Poppins font-extrabold'>
                            1.5K+
                        </strong>
                        <strong className='text-zinc-400 text-sm font-bold sm:text-lg '>Collections</strong>
                    </span>
                </div>


                {/* second div */}
                <div className="w-full h-full px-12 md:inline-block hidden ">
                    <div className="grid grid-cols-3 gap-8">
                        <span className='flex flex-col justify-start gap-4 border-r-[3px] border-primary py-14 pr-8'>
                            <BiWalletAlt
                                size={50}
                                color='lightblue'
                            />
                            <span className="text-white">
                                <strong className='text-[3vw] sm:text-[1.5vw] text-white font-bold uppercase'>Strong security</strong>
                                <p className='text-sm text-zinc-300'>
                                    Secure transaction adn recored information wiht 2-factor authentication (2FA)
                                </p>
                            </span>
                        </span>
                        <span className='flex flex-col justify-start gap-4 border-r-[3px] border-primary py-14 pr-8'>
                            <BiWalletAlt
                                size={50}
                                color='lightblue'
                            />
                            <span className="text-white">
                                <strong className='text-[3vw] sm:text-[1.5vw] text-white font-bold uppercase'>Strong security</strong>
                                <p className='text-sm text-zinc-300'>
                                    Secure transaction adn recored information wiht 2-factor authentication (2FA)
                                </p>
                            </span>
                        </span>
                        <span className='flex flex-col justify-start gap-4 py-14'>
                            <BiWalletAlt
                                size={50}
                                color='lightblue'
                            />
                            <span className="text-white">
                                <strong className='text-[3vw] sm:text-[1.5vw] text-white font-bold uppercase'>Strong security</strong>
                                <p className='text-sm text-zinc-300'>
                                    Secure transaction adn recored information wiht 2-factor authentication (2FA)
                                </p>
                            </span>
                        </span>
                
                    </div>
                </div>

             </div>
        </section>
    )
}
export default About