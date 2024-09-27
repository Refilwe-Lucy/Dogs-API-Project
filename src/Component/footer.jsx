import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return(
        <footer className="bg-gray-200 px-2 shadow-xl ring-slate-900/s">
          
       <div className="w-full mx-auto max-w-screen-xl p-10 md:flex md:items-center md:justify-between mt-10">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 This Application is powered by {' '}<a href="https://thedogapi.com" className="hover:underline">The Dog API™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="/about" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="privacy" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
       
        <li>
            <p className="hover:underline flex justify-center items-center gap-3">You can also whatsApp us<a href="https://wa.me/0606827950 
" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="h-5 w-5 "/></a>
            </p>
        </li>
    </ul>
    </div>
</footer>
    )
}
export default Footer;