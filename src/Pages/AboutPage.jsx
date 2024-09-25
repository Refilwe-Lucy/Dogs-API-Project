import Hero from "../Component/Hero"
//import { arrowRight } from "../assets/icons/"
import ButtonPage from "../Component/ButtonPage"
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Footer from "../Component/footer"

 
const AboutPage = () =>{
    return (
       
        <div>
        <Hero/>
          <section id="about" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container p-8 text-pink-500 font-pooping">
            <div className="mt-20 md:flex flex-col items-center text-center">
                <div className="text-2xl">
                    <h1 className="mt-2 md:flex flex-col items-center">Welcome to Our Dog Lovers Community!</h1>
                    </div>
                    <div>
                    <p className="mt-8 max-w-2xl text-black ">Discover dog breeds from around the world and get help finding your perfect pet! Just like on our linked resource, 
              we aim to provide valuable insights into various breeds, helping you understand their unique characteristics and care needs. 
              Whether you're considering bringing a new furry friend into your home or simply love learning about dogs,
              you’ll find a wealth of information and a supportive community here. Let’s celebrate the incredible bond between humans and
              dogs together!</p>
                    </div>
                    <ButtonPage label={"Learn More"}
                     iconURL={<FaRegArrowAltCircleRight />
}/>

                
             
           
             
            </div>
          
         
          </section>
          <Footer/>






       
        </div>
    
    )
}
export default AboutPage