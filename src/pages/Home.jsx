import Container from "../components/container/Container"
import Gradient from "../components/home/Gradinet"
import Button from "../components/button/Button"
import About from "../components/home/About"
import Websites from "../components/home/Websites"
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className="w-full h-full py-12 overflow-hidden">

      <Container>
        <div className="grid w-full h-fit grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6">
          {/* grid one starts */}
          <motion.div 
            className="flex justify-center flex-col gap-4"
            initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                    delay: 0.2,
                }}
          >
            <span className="w-full text-[3rem] lg:text-[4rem] uppercase font-bold font_orbitron text-white">
              Discover collect sell digital nft.
            </span>
            <p className="text-zinc-300 text-lg font-semibold">
              Generate 10,000+ NFT Collection Only by uploading the layers, and
              get ready to sell you collection.
            </p>

            {/* div for button */}
            <div 
              className="flex mt-4 flex-row gap-4 justify-start items-center"
            >
              <Button isLoading={false} isColored label="Get Started" handleFunction={""} />

              <Button isLoading={false}  label="Joinn Discord" handleFunction={""} />
            </div>
          </motion.div>

          {/* grid two starts */}
          <motion.div 
            className="w-full h-full"
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
            <div className=" flex justify-center lg:justify-end items-center">
            <img
                alt="banner_image"
                src="/home/home.png"
                className="w-[30rem] h-[30rem] object-contain"
            />
            </div>
          </motion.div>
        </div>

        <About/>
        <Websites/>
      </Container>
    </div>
  )
}
export default Home
