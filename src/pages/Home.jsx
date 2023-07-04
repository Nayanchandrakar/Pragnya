import Container from "../components/container/Container"
import Button from "../components/button/Button"
import About from "../components/home/About"
import Websites from "../components/home/Websites"
import { animate, motion } from "framer-motion"

import Footer from "../components/footer/Footer"
const Home = () => {
  return (
    <>
      <div className="w-full h-full  py-12 overflow-hidden ">
        <Container>
          <div className="grid w-full h-fit grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6">
            {/* grid one starts */}
            <motion.div
              className="flex justify-center flex-col relative gap-4 z-20"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
                delay: 0.2,
              }}
            >
              <span className="w-full text-[2rem] lg:text-[3rem] uppercase font-bold font_orbitron antialiased  custom_h1">
                An AI-Based Digital Platform for People with Barriers.
              </span>
              <p className="text-para/[.5] text-lg font-semibold">
                Generate 10,000+ NFT Collection Only by uploading the layers,
                and get ready to sell you collection.
              </p>

              {/* div for button */}
              <div className="flex mt-4 flex-row gap-4 justify-start items-center">
                <Button
                  isLoading={false}
                  isColored
                  label="Get Started"
                  handleFunction={""}
                />

                <Button
                  isLoading={false}
                  label="Visit Site"
                  handleFunction={""}
                />
              </div>
            </motion.div>

            {/* grid two starts */}
            <motion.div
              className="w-full h-full relative"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
                delay: 0.2,
              }}
            >
              {/* absolute position div */}
              <div className=" flex justify-center lg:justify-end w-[60rem] right-[-10rem]  h-full items-center rotate-12 absolute top-0 z-10">
                <img
                  alt="banner_image"
                  src="/home/mesh.png"
                  className="w-full opacity-80"
                />
              </div>

              <motion.div className=" flex justify-center lg:justify-end items-center ">
                <motion.img
                  whileHover={{}}
                  animate={{
                    rotate: [0, 0, 90, 90, 0],
                    scale: [1, 1.1, 1.1, 1, 1],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                  }}
                  alt="banner_image"
                  src="/home/home.png"
                  className="w-[30rem] h-[30rem] object-contain"
                />
              </motion.div>
            </motion.div>
          </div>

          <About />
          <Websites />
        </Container>
      </div>
      <Footer />
    </>
  )
}
export default Home
