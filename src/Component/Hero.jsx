import bgImage from '/images/Layer-1.png'
import NavBar from './NavBar';



const Hero = ({dogName}) =>{
    return(
      <>
      <NavBar />
      <header className="bg-white flex flex-col items-center ">
          {dogName && (
              <div className="text-pink-500 absolute z-10 mt-40">
                  <h1 className="text-3xl font-bold text-center ">
                      {dogName}
                  </h1>
              </div>
          )}
          <div className="flex justify-center w-full">
              <img src={bgImage} alt="puppy" className="items-center" />
          </div>
      </header>
  </>
    )
}
export default Hero;