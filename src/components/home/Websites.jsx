import React from "react"
import HeadingShortner from "../../components/global/HeadingShortner"
import MotionWrapper from "../../Hoc/MotionWrapper"
import { PlatformContent } from "../../contants/platform.js"
import { fadeIn } from "../../utils/Motion"
import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"
import { NavLink } from "react-router-dom"
import { BsFillStarFill } from "react-icons/bs"
import { AiOutlineArrowRight } from "react-icons/ai"

const TiltComponent = ({ Heading, SubHeading, Content, index }) => {
  let delay = index * 0.5

  console.log(delay)

  return (
    <>
      <motion.div variants={fadeIn("down", "spring", delay, 0.75)}>
        <Tilt
          perspective={500}
          className="flex justify-center items-center flex-col overflow-hidden parallax-effect  "
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="w-full
                  rounded-lg
                  flex
                  bg-glass_effect2
                  flex-col
                  gap-2
                  p-6
                  h-fit
                  "
          >
            <span
              className="
              text-zinc-200
              font-extrabold
              text-left
              flex
              items-center
              flex-row
              gap-2
        "
            >
              <span className="w-fit h-fit bg-white rounded-full p-4">
                <BsFillStarFill size={20} color="black" />
              </span>

              <span className="">
                {Heading}
                <p className="text-sm text-zinc-500 font-semibold">
                  {SubHeading}
                </p>
              </span>
            </span>

            <div className="overflow-auto h-[15rem] p-2 remove_scrollbar">
              {Content &&
                Content?.map((para) => {
                  return (
                    <div className="flex flex-col gap-0 py-2">
                      <span className="text-base font-bold text-zinc-300">
                        {para?.heading}
                      </span>
                      <p className="text-zinc-400 text-base">
                        {para?.para || null}
                      </p>
                    </div>
                  )
                })}
            </div>

            <NavLink
              to={"/"}
              className="bg-black p-2 text-sm flex flex-row gap-1 justify-center text-white text-center mt-3 rounded-lg items-center transition-all duration-300 hover:bg-black/80"
            >
              Visit site
              <AiOutlineArrowRight size={15} color="white" />
            </NavLink>
          </div>
        </Tilt>
      </motion.div>
    </>
  )
}

const WebsiteRender = () => {
  return (
    <div className="mt-[6rem]">
      <HeadingShortner
        headline="Our Platforms."
        paragraph="Following are the Our own platforms these are interconnected to each other every user sign in here can be no need to login to our other cross platforms"
      />

      <div
        className=" grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-14 my-16
            "
      >
        {PlatformContent?.map((elem, index) => {
          return <TiltComponent {...elem} key={elem?.id} index={index} />
        })}
      </div>
    </div>
  )
}

export default MotionWrapper(WebsiteRender, "websites")
