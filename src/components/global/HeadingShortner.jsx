import { Slider } from "../../utils/Motion.js"
import { motion } from "framer-motion"

const HeadingShortner = ({ MainHeadline, headline, paragraph, color }) => {
  return (
    <div>
      <div className="flex flex-col gap-2 ">
        {MainHeadline && (
          <span className="uppercase text-para font-bold text-lg">
            {MainHeadline}
          </span>
        )}
        {headline && (
          <div
            className="
                     group
                     relative
                     w-fit
                     flex
                     flex-col
                    "
          >
            <span className="text-heading text-3xl font-bold ">{headline}</span>
            <span
              className={`
                        absolute
                        w-[30%]
                        group-hover:w-full
                        transition-all
                        h-[5px]
                        rounded-full
                        ${color ? color : "bg-secondary"}
                        top-[2.7rem]
                        duration-200
                        ease-in-out
                    `}
            />
          </div>
        )}
        {paragraph && (
          <p className="text-para text-lg mt-6  w-full lg:max-w-[80%] ">
            {paragraph}
          </p>
        )}
      </div>
    </div>
  )
}

export default HeadingShortner
