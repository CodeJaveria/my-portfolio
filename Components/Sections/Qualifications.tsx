// components/BlogCards.jsx
import React from "react";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "BS English Literature",
    description: "2019-2023",
    image: "/unnni.png",
  },
  {
    id: 2,
    title: "FSc Pre-Medical",
    description: "2016-2018",
    image: "/clg.jpg",
  },
  {
    id: 3,
    title: "Matriculation (Science)",
    description: "2014-2016",
    image: "/school.png",
  },
];

const BlogCards = () => {
  return (
    <section id="Qualifications" className="text-black font-bold body-font">
      <h1 className="text-center text-4xl">Qualifications</h1>
      <br />
      <h2 className="ml-10 font-bold text-3xl">Education:</h2>

      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">

          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className="
                p-4 md:w-1/3 
                opacity-0 
                animate-cardAppear 
                [animation-delay:calc(0.2s_*_var(--i))] 
              "
              style={{ "--i": `${index + 1}` }}   // FIXED ✔
            >
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={720}
                  height={400}
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                />

                <div className="p-6">
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
                    {blog.title}
                  </h1>
                  <p className="leading-relaxed">{blog.description}</p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default BlogCards;
