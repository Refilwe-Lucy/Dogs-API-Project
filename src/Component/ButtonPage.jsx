//import {arrowRight} from '/icons'
const ButtonPage = ({label, iconURL}) =>{
    return(
        <button className="">
            <div className="flex">
            {label}
            {iconURL}
            </div>
          
        </button>

    )
}
export default ButtonPage