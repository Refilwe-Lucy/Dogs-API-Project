import Logo from '/images/dog.jpg'

const NavBar = () => {
    return(
   <nav className="p-5 bg-white-300 shadow md:flex md:items-center justify-between">
    <div className="">
        <img src={Logo} alt= "logo" className="w-20 h-20"/>
    </div>
    <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-8">
    <li className="mx-10">
            <a href="/home" className="text-xl mr-10 text-pink-500 hover:text-pink-300">Home</a>
        </li>
        <li className="mx-10 bg-pink">
            <a href="https://www.purina.co.uk/find-a-pet/dog-breeds" className="text-xl mr-10 text-pink-500 hover:text-pink-300">About</a>
        </li>
        <li className="mx-10">
            <a href="#" className="text-xl mr-10 text-pink-500 hover:text-pink-300">Contact Us</a>
        </li>
    </ul>
   </nav>
    )
}
export default NavBar;