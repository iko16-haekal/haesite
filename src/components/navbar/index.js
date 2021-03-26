import React, { useState } from "react"
import Image from "../image"
function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div style={{ fontFamily: '"Poppins", sans-serif' }}>
        <header>
          <div className="mx-auto flex py-8 lg:px-24 md:px-16 sm:px-8 px-8 items-center justify-between lg:justify-start">
            <div className="flex mr-0 lg:hidden cursor-pointer">
              <svg
                className="w-6 h-6"
                onClick={() => {
                  setOpen(!open)
                  console.log("ok")
                }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <div
              className={`${
                open ? " " : " hidden"
              } bg-black fixed w-full  h-full top-0 left-0 z-30 bg-opacity-60`}
              onClick={() => setOpen(!open)}
            />
            <nav
              className={`navigation-header-2-2 lg:mr-auto   flex-col text-base justify-center z-50 fixed top-8 left-3 right-3 p-8 rounded-md shadow-md bg-white lg:flex lg:flex-row lg:relative lg:top-0 lg:shadow-none lg:bg-transparent lg:p-0 lg:items-center items-start ${
                open ? "flex" : ""
              } ${open ? " " : " hidden"} `}
            >
              <a href="#home">
                <h1 style={{ color: "#27c499" }} className="font-bold text-2xl">
                  Iko Bagas Haekal
                </h1>
              </a>

              <div className="flex items-center justify-end w-full lg:hidden mt-3">
                <a
                  href="#kontak"
                  className="text-white text-lg py-3 px-8 rounded-xl focus:outline-none hover:shadow-lg font-semibold"
                  style={{
                    background: "#27c499",
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  Hire me!
                </a>
              </div>
              <svg
                onClick={() => setOpen(!open)}
                className="w-6 h-6 absolute top-4 right-4 lg:hidden cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </nav>
            <div className="hidden lg:inline-flex">
              <a
                href="#kontak"
                className="inline-flex text-white text-lg leading-7 py-3 px-8 rounded-xl focus:outline-none hover:shadow-lg font-semibold"
                style={{
                  background: "#27c499",
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                Hire me!
              </a>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default Navbar
