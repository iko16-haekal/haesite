import React from "react"
import Image from "./image"

function Card({ image, title, description = "", link = "#" }) {
  return (
    <>
      <a href={link}>
        <div class="bg-white w-full  m-auto border-1  border-dashed border-gray-100 shadow-md rounded-lg overflow-hidden ">
          <div className="h-1/2">
            <Image
              filename={image}
              alt=""
              classname="w-full h-full object-cover object-center"
            />
          </div>
          <div class="p-4">
            <p class="mb-1 text-gray-900 font-semibold">{title}</p>
            <span class="text-gray-700">{description}</span>
          </div>
        </div>
      </a>
    </>
  )
}

export default Card
