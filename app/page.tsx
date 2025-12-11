import HeroSection from "@/Components/Sections/Biography";
import CategoryCards from "@/Components/Sections/Projects";
import BlogCards from "@/Components/Sections/Qualifications";
import SkillsCards from "@/Components/Sections/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BlogCards/>
      <SkillsCards/>
      <CategoryCards />
      
    </div>
  );
}
