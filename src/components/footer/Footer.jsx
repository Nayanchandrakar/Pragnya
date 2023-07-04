import { AiOutlineCalendar } from "react-icons/ai"
import { HiOutlineHandRaised } from "react-icons/hi2"
import Container from "../container/Container"

const Footer = () => {
  return (
    <Container>
      <div className="relative inset-0 ">
        <div className="mt-[7rem] mb-[3rem]">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl relative z-10 lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
                Subscribe to our newsletter.
              </h2>
              <p className="mt-4 text-lg leading-8 text-para">
                Nostrud amet eu ullamco nisi aute in ad minim nostrud
                adipisicing velit quis. Duis tempor incididunt dolore.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-heading/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-heading/10 focus:ring-2 focus:ring-inset focus:ring-heading sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary/[.8] transition-all duration-400 focus-visible:outline focus-visible:outline-2 cursor-pointer focus-visible:outline-offset-2 focus-visible:outline-secondary"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2 relative z-10">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-heading p-2 ring-1 ring-white/10">
                  <AiOutlineCalendar
                    color="white"
                    size={24}
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 font-semibold text-heading">
                  Weekly articles
                </dt>
                <dd className="mt-2 leading-7 text-para">
                  Non laboris consequat cupidatat laborum magna. Eiusmod non
                  irure cupidatat duis commodo amet.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-heading p-2 ring-1 ring-heading/10">
                  <HiOutlineHandRaised
                    color="white"
                    size={24}
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 font-semibold text-heading">No spam</dt>
                <dd className="mt-2 leading-7 text-para">
                  Officia excepteur ullamco ut sint duis proident non
                  adipisicing. Voluptate incididunt anim.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div
          className="absolute w-full h-full bg-secondary/[.2] top-5 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] bg-gradient-to-tr from-[#f7227b] to-[#5044f9] opacity-30 object-contain w-full h-full"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </Container>
  )
}
export default Footer
