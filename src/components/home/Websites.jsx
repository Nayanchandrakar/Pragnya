import React from "react"
import HeadingShortner from "../../components/global/HeadingShortner"
import  MotionWrapper  from "../../Hoc/MotionWrapper"
import { projectdetails} from "../../contants/index.js"
import { fadeIn } from "../../utils/Motion"
import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"
import {BiLogoBitcoin} from 'react-icons/bi'
import {NavLink} from 'react-router-dom'

const color = ["text-red-600", "text-blue-600", "text-green-600"]

const ProjectRender = ({
    index,
    site_url,
    image,
    title,
    paragraph,
    technologies,
}) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            key={`motionkey-${index * 31}`}
            className="flex flex-col rounded-2xl justify-center p-5 items-center gap-4 w-full h-full bg-glass_effect2"
        >
            <NavLink to={site_url} target="_blanck">
                <div className="relative w-full">
                    <img
                        src={image}
                        className="w-full object-cover rounded-lg"
                        alt="Image not available"
                    />
                    <span className="absolute w-10 bg-glass_effect rounded-full flex justify-center items-center h-10 top-2 right-2 ">
                        <BiLogoBitcoin
                            alt="not available"
                            size={32}
                            color="white"
                        />
                    </span>
                </div>

                <div className="flex flex-col gap-6">
                    <span className="text-lg text-white mt-6">{title}</span>
                    <p className="text-lg text-gray-400 w-full">{paragraph}</p>
                    <div className="flex flex-row gap-6">
                        {technologies?.map((e, index) => (
                            <span
                                key={`nerendkk${index * 6}}`}
                                className={`${color[index]}`}
                            >
                                {e}
                            </span>
                        ))}
                    </div>
                </div>
            </NavLink>
        </motion.div>
    )
}

const WebsiteRender = () => {
    return (
        <div className="mt-[6rem]">
            <HeadingShortner
                headline="Our Platforms."
                paragraph="Following are the Our own platforms these are interconnected to each other every user sign in here can be no need to login to our other cross platforms"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-12 items-center mt-[4rem]">
                {projectdetails?.map((e, index) => {
                    return (
                        <Tilt>
                            <ProjectRender
                                key={`project-render${index * 8}`}
                                index={index}
                                {...e}
                            />
                        </Tilt>
                    )
                })}
            </div>
        </div>
    )
}

export default MotionWrapper(WebsiteRender, "websites")