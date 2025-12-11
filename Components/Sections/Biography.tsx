"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center gap-1">
        
        {/* IMAGE SECTION */}
        <div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center 
          opacity-0 translate-x-[-30px] transition-all duration-[900ms] ease-out
          animate-[fadeInLeft_0.9s_ease-out_forwards]"
        >
          <div className="relative w-[330px] h-[480px]">
            <Image
              src="/myphoto.jpeg"
              alt="Hero image"
              fill
              className="object-cover rounded"
              sizes="(max-width: 768px) 90vw, 330px"
            />
          </div>
        </div>

        {/* TEXT SECTION */}
        <div
          className="lg:flex-grow md:w-1/2 lg:pl-12 flex flex-col md:items-start md:text-left 
          items-center text-center opacity-0 translate-x-[30px] transition-all 
          duration-[900ms] ease-out delay-200 
          animate-[fadeInRight_0.9s_ease-out_forwards]"
        >
          
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-black">
            Full Stack Website Developer
          </h1>

          <p className="mt-6 mb-8 leading-relaxed tracking-wide text-justify">
            Hi! I am Javeria Sharif, a passionate Full Stack Website Developer with expertise in creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I specialized in building seamless user experiences and robust server-side functionalities. My skills include HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I am dedicated to deliver high-quality code and innovative solutions to meet clients' needs. Let's collaborate to bring your web projects to life!
          </p>

        </div>

      </div>
    </section>
  );
}
