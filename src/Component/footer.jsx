
const Footer = () => {
    return(
        <footer class="bg-gray-200 px-2 shadow-xl ring-slate-900/s">
          
       <div class="w-full mx-auto max-w-screen-xl p-10 md:flex md:items-center md:justify-between mt-10">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 This Application is powered by {' '}<a href="https://thedogapi.com" class="hover:underline">The Dog API™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
       
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>
    )
}
export default Footer;