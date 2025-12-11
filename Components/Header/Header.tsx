import Link from "next/link";
import image from "next/image";


export default function Header() {
  return (
<header className="text-black body-font max-w-3xl">
  <div className="container mx-auto flex flex-col md:flex-row items-center mt-5 p-5 md:justify-between gap-6 md:gap-0">
    
   
    <h1 className="ml-10 text-5xl font-bold">Javeria Sharif</h1>

   
    <nav className="flex flex-wrap items-center text-base gap-6 mt-4 md:mt-0">
      <Link href="#" className="hover:text-black font-medium">Home</Link>
      <Link href="#Qualifications" className="hover:text-black font-medium">About</Link>
      <Link href="#Projects" className="hover:text-black font-medium">Projects</Link>
      <Link href="#Contact" className="hover:text-black font-medium">Contact</Link>
    </nav>

  </div>
</header>
  );
}
