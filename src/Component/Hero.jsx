import bgImage from '/images/Layer-1.png'
import NavBar from './NavBar';



const Hero = ({}) =>{
    return(
    <>
         <NavBar/>
        <header className="bg-white flex justify-center items-center">
        
          <img src={bgImage} alt ="puppy" className="items-center"/>
        
        </header>
        </>
    )
}
export default Hero;