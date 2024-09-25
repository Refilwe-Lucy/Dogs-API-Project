import Logo from '/images/dog.jpg'

const NavBar = () => {
    return(
   <nav className="p-5 bg-white-300 shadow md:flex md:items-center justify-between">
    <div className="">
        <img src={Logo} alt= "logo" className="w-20 h-20"/>
    </div>
    <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-8">
    <li className="mx-10 relative group">
            <a href="/home" className="text-xl text-pink-500 inline-block relative">Home</a>
            <span className="absolute left-0 bottom-0 h-[3px] w-full bg-pink-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </li>
        <li className="mx-10 relative group">
            <a href="about" className="text-xl text-pink-500 inline-block relative">About</a>
            <span className="absolute left-0 bottom-0 h-[3px] w-full bg-pink-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </li>
        <li className="mx-10 relative group">
            <a href="#" className="text-xl text-pink-500 inline-block relative">Contact Us</a>
            <span className="absolute left-0 bottom-0 h-[3px] w-full bg-pink-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </li>
    </ul>
   </nav>
    )
}
export default NavBar;