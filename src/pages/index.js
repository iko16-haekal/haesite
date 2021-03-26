import React from "react"
import Lottie from "react-lottie"
import Hero from "../assets/animations/hero.json"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/card"
const hero = {
  loop: true,
  autoplay: true,
  animationData: Hero,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}
const IndexPage = () => (
  <Layout>
    <SEO title="iko bagas haekal | portofolio" />
    <section className="h-full w-full border-box transition-all duration-500 linear bg-white">
      {/* Hero-header-2-2 */}
      <div id="home">
        <div className="mx-auto flex pt-12 pb-16 lg:pb-20 lg:px-24 md:px-16 sm:px-8 px-8 lg:flex-row flex-col">
          {/* Left Column */}
          <div className="lg:flex-grow lg:w-1/2 flex flex-col lg:items-start lg:text-left mb-3 md:mb-12 lg:mb-0 items-center text-center">
            <h1
              className="lg:block hidden title-font sm:text-5xl lg:text-6xl text-4xl mb-8 font-semibold sm:leading-tight"
              style={{ color: "#272e35", lineHeight: "1.2" }}
            >
              Hai saya iko
              <br />
              saya seorang web devloper
            </h1>
            <h1
              className="lg:hidden block title-font sm:text-5xl lg:text-6xl text-4xl mb-8 lg::px-10 md:px-10 sm:px-6 px-0 font-semibold sm:leading-tight"
              style={{ color: "#272e35", lineHeight: "1.2" }}
            >
              Hai saya iko saya seorang web developer
            </h1>
            <div className="inline-block items-center mx-auto lg:mx-0 lg:flex justify-center lg:space-x-8 md:space-x-2 sm:space-x-3 space-x-0">
              <a
                href="#kontak"
                className="btn-fill-header-2-2 inline-flex font-semibold text-white text-base py-4 px-6 rounded-xl mb-4 lg:mb-0 md:mb-0 focus:outline-none hover:shadow-lg"
                style={{
                  background: "#27c499",
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                Hire Me!
              </a>
            </div>
          </div>
          {/* Right Column */}
          <div className="w-full lg:w-1/2 text-center justify-center flex pr-0">
            <Lottie options={hero} height={400} width={400}></Lottie>
          </div>
        </div>
      </div>

      {/* about */}
      <div
        id="tentang"
        className=" mx-auto  flex shadow-xs mb-16 mt-16  sm:mt-10 lg:mb-20 lg:mx-20 sm:mx-16   lg:flex-row flex-col"
      >
        <div className="w-screen px-10 sm:grid sm:grid-cols-2 sm:gap-4 sm:p-0">
          <div className="text">
            <h1 className="sm:text-5xl text-3xl font-bold leading-loose">
              Iko Bagas Haekal
            </h1>
            <br />
            <h6 className="text-gray-400 font-light">
              Student | Programmer | Human
            </h6>
            <p className="font-weight-light home-text">
              saya seorang yang tertarik di teknologi frontend, sangat menyukai
              javascript dan tetap belajar sesuatu yang baru.
            </p>
          </div>
          <div className="hidden sm:block">
            <Image
              className="absolute w-2/4 h-auto  "
              filename="home-img.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* end about */}
      <div
        id="skill"
        className="mx-auto pl-10 sm:pl-1  flex shadow-xs mb-16 mt-16  sm:mt-10 lg:mb-20 lg:mx-20 sm:mx-16   lg:flex-col flex-col"
      >
        <h1 className="sm:text-4xl text-3xl font-bold leading-loose block ">
          Skill saya
        </h1>
        <br />
        <div className="mt-8 sm:mt-10 grid grid-cols-3 sm:grid-cols-6 sm:gap-1 gap-12 ">
          <div className="w-2/4">
            <Image className="object-fill block" filename="react.png" />
          </div>
          <div className="w-2/4">
            <Image className="object-fill" filename="vue.png" />
          </div>
          <div className="w-2/4">
            <Image className="object-fill" filename="laravel.png" />
          </div>
          <div className="w-2/4">
            <Image className="object-fill" filename="nodejs.png" />
          </div>
          <div className="w-2/4">
            <Image className="object-fill" filename="django.png" />
          </div>
          <div className="w-2/4">
            <Image className="object-fill" filename="flutter.png" />
          </div>
        </div>
      </div>
      {/* end skill */}
      <div
        id="hasil"
        className="mx-auto pl-10 sm:pl-1  flex  mb-16 mt-28 lg:mb-20 lg:mx-20 sm:mx-16   lg:flex-col flex-col"
      >
        <h1 className="sm:text-4xl text-3xl font-bold leading-loose block ">
          Yang saya buat
        </h1>
        <br />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 gap-y-10 sm:gap-8 mt-8">
          <Card title="website untukdunia" image="untukdunia.png" />
          <Card title="website lowongan kerja" image="icojob.png" />
        </div>
      </div>
      {/* end skill */}
      <div
        id="kontak"
        className="flex   shadow-xs mb-16 mt-16  sm:mt-10 lg:mb-20 sm:mx-20 mx-8   lg:flex-col flex-col"
      >
        <h1 className="sm:text-4xl text-3xl font-bold leading-loose block ">
          Kontak Saya
        </h1>
        <div className="grid sm:grid-cols-2 grid-cols-1">
          <div className="mt-5">
            <div className="bg-white shadow w-full lg:w-1/2 h-full p-5 pt-8">
              {/* list */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/iko69-haekal/"
                  className="flex items-center hover:text-white hover:bg-green-500 p-2"
                >
                  <svg
                    fill="currentColor"
                    className="w-6 h-6 m-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Github
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=6285715904647"
                  className="flex items-center hover:text-white hover:bg-green-500 p-2"
                >
                  <svg
                    fill="currentColor"
                    className="w-6 h-6 m-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" />
                  </svg>
                  Whatsapp
                </a>
                <a
                  href="https://www.youtube.com/channel/UCBG8lrK1kKDVJ-vTdq1d4Lw"
                  className="flex items-center hover:text-white hover:bg-green-500 p-2"
                >
                  <svg
                    fill="currentColor"
                    className="w-6 h-6 m-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  Youtube
                </a>
                <a
                  href="mailto: ikobagas69@gmail.com"
                  className="flex items-center hover:text-white hover:bg-green-500 p-2"
                >
                  <svg
                    fill="currentColor"
                    className="w-6 h-6 m-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.999,4.975L16.999,4.975C16.999,4.975,16.999,4.975,16.999,4.975c-0.419-0.4-0.979-0.654-1.604-0.654H4.606c-0.584,0-1.104,0.236-1.514,0.593C3.076,4.928,3.05,4.925,3.037,4.943C3.034,4.945,3.035,4.95,3.032,4.953C2.574,5.379,2.276,5.975,2.276,6.649v6.702c0,1.285,1.045,2.329,2.33,2.329h10.79c1.285,0,2.328-1.044,2.328-2.329V6.649C17.724,5.989,17.441,5.399,16.999,4.975z M15.396,5.356c0.098,0,0.183,0.035,0.273,0.055l-5.668,4.735L4.382,5.401c0.075-0.014,0.145-0.045,0.224-0.045H15.396z M16.688,13.351c0,0.712-0.581,1.294-1.293,1.294H4.606c-0.714,0-1.294-0.582-1.294-1.294V6.649c0-0.235,0.081-0.445,0.192-0.636l6.162,5.205c0.096,0.081,0.215,0.122,0.334,0.122c0.118,0,0.235-0.041,0.333-0.12l6.189-5.171c0.099,0.181,0.168,0.38,0.168,0.6V13.351z"></path>
                  </svg>
                  Gmail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
