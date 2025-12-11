import Image from "next/image";

export default function Footer() {
  return (
    <footer id="Contact" className="bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row md:justify-between gap-10">
        
        <div className="flex items-center md:items-start gap-4 md:gap-6">
          <div className="relative w-20 h-20 rounded-full overflow-hidden">
            <Image
              src="/myphoto.jpeg"
              alt="Javeria Sharif"
              fill
              className="object-cover"
              sizes="80px"
              priority
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Javeria Sharif</h2>
            <p className="mt-1 max-w-xs leading-relaxed">
              Full Stack Website Developer, passionate about creating beautiful and functional web applications.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          
          <div>
            <h3 className="uppercase text-medium font-bold tracking-widest mb-3">Contact</h3>
            <ul className="space-y-1 text-sm">
              <li>📞 Phone: <a href="tel:+923054563175" className="hover:text-indigo-600">+92 305 4563175</a></li>
              <li>💬 WhatsApp: <a href="https://wa.me/923054563175" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">+92 305 4563175</a></li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-medium font-bold tracking-widest mb-3">Social</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="https://instagram.com/javeriasharif456" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
                  Instagram: @javeriasharif456
                </a>
              </li>
              <li>
                <a href="https://snapchat.com/add/javeria_shari20" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
                  Snapchat: @javeria_shari20
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div className="border-t border-gray-200 text-center py-6 text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Javeria Sharif. All rights reserved.
      </div>
    </footer>
  );
}
