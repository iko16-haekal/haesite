import React from "react"

function Footer() {
  return (
    <>
      <section className="  bg-green-500 h-20 flex items-center justify-center">
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n        @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");\n        .list-footer-2-2 li a {\n          color: #c7c7c7;\n        }\n        .list-footer-2-2 li a:hover {\n          color: #555252;\n          cursor: pointer;\n        }\n        .border-color-footer-2-2 {\n          color: #c7c7c7;\n        }\n        .footer-link-footer-2-2:hover {\n          color: #555252;\n          cursor: pointer;\n        }\n        .social-media-c-footer-2-2:hover circle,\n        .social-media-p-footer-2-2:hover path {\n          fill: #555252;\n          cursor: pointer;\n        }\n      ',
          }}
        />
        <p className="text-white text-center">&copy; iko bagas haekal</p>
      </section>
    </>
  )
}

export default Footer
