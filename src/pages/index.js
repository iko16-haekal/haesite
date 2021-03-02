import React from "react"
import { Link } from "gatsby"
import Lottie from "react-lottie"
import Hero from "../assets/animations/hero.json"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
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
    <SEO title="Home" />
    <section className="h-full w-full border-box transition-all duration-500 linear bg-white">
      {/* Hero-header-2-2 */}
      <div>
        <div className="mx-auto flex pt-12 pb-16 lg:pb-20 lg:px-24 md:px-16 sm:px-8 px-8 lg:flex-row flex-col">
          {/* Left Column */}
          <div className="lg:flex-grow lg:w-1/2 flex flex-col lg:items-start lg:text-left mb-3 md:mb-12 lg:mb-0 items-center text-center">
            <h1
              className="lg:block hidden title-font sm:text-5xl lg:text-6xl text-4xl mb-8 font-semibold sm:leading-tight"
              style={{ color: "#272e35", lineHeight: "1.2" }}
            >
              Tingkatkan
              <br />
              brandmu dengan website modern
            </h1>
            <h1
              className="lg:hidden block title-font sm:text-5xl lg:text-6xl text-4xl mb-8 lg::px-10 md:px-10 sm:px-6 px-0 font-semibold sm:leading-tight"
              style={{ color: "#272e35", lineHeight: "1.2" }}
            >
              Tingkatkan brand mu dengan website modern
            </h1>
            <div className="inline-block items-center mx-auto lg:mx-0 lg:flex justify-center lg:space-x-8 md:space-x-2 sm:space-x-3 space-x-0">
              <button
                className="btn-fill-header-2-2 inline-flex font-semibold text-white text-base py-4 px-6 rounded-xl mb-4 lg:mb-0 md:mb-0 focus:outline-none hover:shadow-lg"
                style={{
                  background: "#27c499",
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                Pesan Sekarang
              </button>
              <button
                className="btn-outline-header-2-2 font-normal text-black text-base py-4 px-6 focus:outline-none bg-transparent rounded hover:border-transparent"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                <div className="flex items-center">
                  <svg
                    className="mr-2.5"
                    width={13}
                    height={12}
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9293 7.99988L6.66668 5.15788V10.8419L10.9293 7.99988ZM12.9173 8.27722L5.85134 12.9879C5.80115 13.0213 5.74283 13.0404 5.6826 13.0433C5.62238 13.0462 5.5625 13.0327 5.50934 13.0042C5.45619 12.9758 5.41175 12.9334 5.38075 12.8817C5.34976 12.83 5.33337 12.7708 5.33334 12.7105V3.28922C5.33337 3.22892 5.34976 3.16976 5.38075 3.11804C5.41175 3.06633 5.45619 3.02398 5.50934 2.99552C5.5625 2.96706 5.62238 2.95355 5.6826 2.95644C5.74283 2.95932 5.80115 2.97848 5.85134 3.01188L12.9173 7.72255C12.963 7.75299 13.0004 7.79423 13.0263 7.84261C13.0522 7.89099 13.0658 7.94501 13.0658 7.99988C13.0658 8.05475 13.0522 8.10878 13.0263 8.15716C13.0004 8.20553 12.963 8.24678 12.9173 8.27722Z"
                      fill="#555B61"
                    />
                  </svg>
                  Lihat harga
                </div>
              </button>
            </div>
          </div>
          {/* Right Column */}
          <div className="w-full lg:w-1/2 text-center justify-center flex pr-0">
            <Lottie options={hero} height={400} width={400}></Lottie>
          </div>
        </div>
      </div>
    </section>

    <section className="h-full w-full border-box bg-white">
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n        @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");\n        .btn-outline-content-2-2 {\n          border: 1px solid #979797;\n          color: #979797;\n        }\n        .btn-outline-content-2-2:hover {\n          border: 1px solid #27c499;\n          color: #27c499;\n        }\n        .btn-fill-content-2-2 {\n          border: 1px solid #27c499;\n        }\n        .card-header-content-2-2 {\n          background-color: #eef6f4;\n          border: 1px solid #27c499;\n        }\n        @media (min-width: 1024px) {\n          .lg-show-content-2-2 {\n            display: block;\n          }\n          .lg-hide-content-2-2 {\n            display: none;\n          }\n        }\n        @media (max-width: 1024px) {\n          .lg-show-content-2-2 {\n            display: none;\n          }\n          .lg-hide-content-2-2 {\n            display: block;\n          }\n        }\n      ',
        }}
      />
      <div style={{ fontFamily: '"Poppins", sans-serif' }}>
        <div className="container lg:px-32 md:px-8 sm:px-12 px-5 pt-20 pb-12 mx-auto">
          {/* Title Text */}
          <div className="flex flex-col text-center w-full mb-12">
            <h1
              className="text-4xl font-semibold title-font mb-2.5"
              style={{ color: "#121212" }}
            >
              3 Benefit Utama
            </h1>
            <h2
              className="text-base font-light title-font mx-12 lg:w-full md:w-full sm:w-3/6 sm:mx-auto"
              style={{ color: "#121212" }}
            >
              {/* You can easily manage your business with a powerful tools */}
              Kamu bisa membangun website untuk bisnismu dengan fitur melimpah
            </h2>
          </div>
          {/* 3-Column */}
          <div className="flex lg:flex-row flex-col -m-4">
            <div className="px-14 md:px-0 lg:px-4 lg:w-1/3 md:w-1/3 sm:w-4/6 mx-auto">
              <div className="flex rounded-lg h-full lg:pt-8 lg:pb-8 md:pt-8 md:pb-8 pt-4 pb-12 flex-col">
                <div className="items-center text-center">
                  <div className="inline-flex items-center justify-center rounded-full mb-6">
                    <img
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-5.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <h4
                    className="font-medium text-center text-2xl mb-2.5"
                    style={{ color: "#121212" }}
                  >
                    SEO Optimization
                  </h4>
                  <p
                    className="lg-show-content-2-2 leading-relaxed text-base text-center tracking-wide"
                    style={{ color: "#565656" }}
                  >
                    SEO untuk maksimalkan pencarian website Anda pada mesin
                    pencari.
                  </p>
                  <p
                    className="lg-hide-content-2-2 block leading-relaxed text-base text-center tracking-wide"
                    style={{ color: "#565656" }}
                  >
                    SEO untuk maksimalkan pencarian website Anda pada mesin
                    pencari.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-14 md:px-0 lg:px-4 lg:w-1/3 md:w-1/3 sm:w-4/6 mx-auto">
              <div className="flex rounded-lg h-full lg:pt-8 lg:pb-8 md:pt-8 md:pb-8 pt-12 pb-12 flex-col">
                <div className="items-center text-center">
                  <div className="inline-flex items-center justify-center rounded-full mb-6">
                    <img
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-6.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <h4
                    className="font-medium text-center text-2xl mb-2.5"
                    style={{ color: "#121212" }}
                  >
                    Chat Online
                  </h4>
                  <p
                    className="lg-show-content-2-2 leading-relaxed text-base text-center tracking-wide"
                    style={{ color: "#565656" }}
                  >
                    layanan untuk berkomunikasi langsung dengan pelanggan.
                  </p>
                  <p
                    className="lg-hide-content-2-2 leading-relaxed text-base text-center tracking-wide"
                    style={{ color: "#565656" }}
                  >
                    layanan untuk berkomunikasi langsung dengan pelanggan.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-14 md:px-0 lg:px-4 lg:w-1/3 md:w-1/3 sm:w-4/6 mx-auto">
              <div className="flex rounded-lg h-full lg:pt-8 lg:pb-8 md:pt-8 md:pb-8 pt-12 pb-6 flex-col">
                <div className="items-center text-center">
                  <div className="inline-flex items-center justify-center rounded-full mb-6">
                    <img
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-7.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <h4
                    className="font-medium text-center text-2xl mb-2.5"
                    style={{ color: "#121212" }}
                  >
                    Security SSL
                  </h4>
                  <p
                    className="lg-show-content-2-2 leading-relaxed text-base text-center tracking-wide"
                    style={{ color: "#565656" }}
                  >
                    meningkatkan keamanan pada website Anda dari serangan hacker
                  </p>
                  <p
                    className="lg-hide-content-2-2 leading-relaxed text-base text-center tracking-wide"
                    style={{ color: "#565656" }}
                  >
                    meningkatkan keamanan pada website Anda dari serangan hacker
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:px-24 md:px-16 sm:px-8 px-4 pb-20 pt-12 mx-auto">
          <div className="flex lg:flex-row flex-col -m-4">
            <div className="p-4 w-full">
              <div className="card-header-content-2-2 h-full flex lg:flex-row flex-col p-7 rounded-xl lg:space-x-3.5 md:space-x-3.5 space-x-0">
                <div className="text-center mx-auto">
                  <img
                    src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-1%20(1).png"
                    alt=""
                  />
                </div>
                <div className="flex-grow my-auto lg:text-left lg:w-3/4 w-full lg:text-left text-center lg:my-auto md:my-auto py-6">
                  <h4 className="text-2xl font-semibold mb-2.5">
                    Onlinekan websitemu dalam 1 minggu
                  </h4>
                  <p
                    className="lg-show-content-2-2 text-base font-light tracking-wide w-full"
                    style={{ color: "#565656" }}
                  >
                    Onlinekan websitemu agar customermu tertarik
                    <br />
                    dengan produk anda
                  </p>
                  <p
                    className="lg-hide-content-2-2 text-base font-light tracking-wide w-full"
                    style={{ color: "#565656" }}
                  >
                    Onlinekan websitemu agar customermu tertarik dengan produk
                    anda
                  </p>
                </div>
                <a className="inline-block items-center my-auto text-center">
                  <button
                    className="btn-fill-content-2-2 font-bold text-white text-base py-4 lg:w-full md:w-full sm:w-2/3 w-full rounded-xl mb-4 md:mb-5 lg:mb-5 focus:outline-none hover:shadow-lg"
                    style={{
                      background: "#27c499",
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    Pesan Sekarang
                  </button>
                  <button
                    className="btn-outline-content-2-2 font-normal text-black text-base py-4 lg:w-full md:w-full sm:w-2/3 w-full px-6 rounded-xl focus:outline-none bg-transparent rounded hover:border-transparent"
                    style={{ fontFamily: '"Poppins", sans-serif' }}
                  >
                    Lihat Harga
                  </button>
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
