import HeadingShortner from "../global/HeadingShortner"
import { AiOutlineCopyrightCircle } from "react-icons/ai"
import { MdSecurity } from "react-icons/md"
import { BiWalletAlt } from "react-icons/bi"

const About = () => {
  return (
    <section className="pt-24 flex flex-col gap-12 relative">
      <HeadingShortner
        headline="About us"
        paragraph="
                Pragnya is an innovative AI-based digital platform designed to support individuals who face barriers in various aspects of their lives. Whether it be physical, cognitive, or emotional barriers, Pragnya aims to empower individuals and provide them with accessible resources, tools, and a supportive community. By leveraging the power of artificial intelligence, Pragnya is revolutionizing the way people with barriers can overcome challenges and enhance their overall well-being.
Than Digital platform list same as dignity of noble digital platforms,Create in card form.
                "
      />
      <div className="rounded-xl  bg-white/[.1] backdrop-blur-2xl w-full h-full">
        <div className="w-full  h-full  absolute inset-0 z-0">
          <img
            src="/home/homemesh.png"
            alt="home_mesh_gradient"
            className="w-full h-full object-cover "
          />
        </div>
        {/* first div */}
        <div className="flex z-10 relative flex-row justify-between items-center gap-4 sm:gap-0 px-8 sm:px-12 py-8  border-b-[3px] border-primary md:py-4">
          <span className="flex flex-col items-center sm:items-start">
            <strong className="text-[5vw] xl:text-[4rem] text-white font-Poppins font-extrabold">
              1.5K+
            </strong>
            <strong className="text-zinc-400 text-sm font-bold sm:text-lg ">
              Collections
            </strong>
          </span>
          <span className="flex flex-col items-center sm:items-start">
            <strong className="text-[5vw] xl:text-[4rem] text-white font-Poppins font-extrabold">
              102K+
            </strong>
            <strong className="text-zinc-400 text-sm font-bold sm:text-lg ">
              Artworks
            </strong>
          </span>
          <span className="flex flex-col items-center sm:items-start">
            <strong className="text-[5vw] xl:text-[4rem] text-white font-Poppins font-extrabold">
              3.2K+
            </strong>
            <strong className="text-zinc-400 text-sm font-bold sm:text-lg ">
              Artists
            </strong>
          </span>
        </div>

        {/* second div */}
        <div className="w-full z-10 relative h-full px-12 md:inline-block hidden ">
          <div className="grid grid-cols-3 gap-8">
            <span className="flex flex-col justify-start gap-4 border-r-[3px] border-primary py-14 pr-8">
              <MdSecurity size={50} color="#76b0bf" />
              <span className="text-white">
                <strong className="text-[3vw] sm:text-[1.5vw] text-white font-bold uppercase">
                  Strong security
                </strong>
                <p className="text-sm text-zinc-300">
                  Secure transaction adn recored information wiht 2-factor
                  authentication (2FA)
                </p>
              </span>
            </span>
            <span className="flex flex-col justify-start gap-4 border-r-[3px] border-primary py-14 pr-8">
              <BiWalletAlt size={50} color="#8c87c1" />
              <span className="text-white">
                <strong className="text-[3vw] sm:text-[1.5vw] text-white font-bold uppercase">
                  Payment Options
                </strong>
                <p className="text-sm text-zinc-300">
                  Flexible payment of methods wiht Visa,Mastercard, Paypal,bank transfer
                </p>
              </span>
            </span>
            <span className="flex flex-col justify-start gap-4 py-14">
              <AiOutlineCopyrightCircle size={50} color="#dfb4e9" />
              <span className="text-white">
                <strong className="text-[3vw] sm:text-[1.5vw] text-white font-bold uppercase">
                  Market Updated
                </strong>
                <p className="text-sm text-zinc-300">
                 The most accurate and trusted source for market cap, valuation, and cryptocurrency information
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
