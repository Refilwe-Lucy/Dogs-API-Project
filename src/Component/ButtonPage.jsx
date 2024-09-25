//import {arrowRight} from '/icons'
const ButtonPage = ({label, iconURL, link}) =>{
    return(

        <a href="https://www.purina.co.uk/find-a-pet/dog-breeds" target="_blank" rel="noopener noreferrer">
        <button className="flex justify-center items-center gap-2 px-3 py-2 border font-montserrat bg-pink-500 rounded-full text-white mt-20">
          
            {label}
            {iconURL}
          
          
        </button>
        </a>
    )
}
export default ButtonPage