// components/SkillsCards.jsx
import React from "react";
import Image from "next/image";

const skills = [
  {
    id: 1,
    title: "Website Development",
    description:
      "Expert in HTML, CSS, JavaScript, React, Next, Express and MongoDB",
    image: "/web.jpeg",
    institute: "Ideoversity (Arfa Software Technology Park)",
  },
  {
    id: 2,
    title: "Computer Networking",
    description: "Experienced in Computer and Device Networks",
    image: "/networking.jpeg",
    institute: "LGITE",
  },
  {
    id: 3,
    title: "Spoken English",
    description: "Having good communication skills in English",
    image: "/eng.jpeg",
    institute: "British Council",
  },
];

const SkillsCards = () => {
  return (
    <section className="text-black font-bold body-font">
      <h1 className="text-center text-4xl">Certification and Skills</h1>

      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">

          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className="
                p-4 md:w-1/3 
                opacity-0 
                animate-cardAppear 
                [animation-delay:calc(0.2s_*_var(--i))]
              "
              style={{ "--i": `${index + 1}` }}  // animation delay fixed
            >
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

                <div className="relative w-full h-48">
                  <Image
                    src={skill.image}
                    alt={skill.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 text-center">
                  <h1 className="title-font text-lg font-bold text-black mb-1">
                    {skill.title}
                  </h1>
                  <p className="text-sm text-black font-bold mb-3">
                    {skill.institute}
                  </p>
                  <p className="font-medium">{skill.description}</p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default SkillsCards;
