import { Link } from "react-router-dom"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Html from '../images/html5.png'
import Css from '../images/css.png'
import Js from '../images/javascript.png'

export default function AboutMe() {
    return (
        <div>
        <div className="grid md:grid-cols-2 max-w-[1240px] mx-auto font-poppins my-28">
            <div className="">
                <img className="md:w-[400px] w-[350px] md:h-[500px] h-[450px] my-20 mx-auto  animate-trans-up rounded-full shadow-2xl shadow-black"src="\src\images\Josh5.jpg" alt="" />
            </div>
            <div className="flex flex-col justify-center">
                <p className="uppercase text-gray-800 font-bold md:text-4xl sm:text-3xl text-2xl">About Me</p>
                <div className="flex gap-4 py-4 text-gray-800 ">
                    <FacebookIcon fontSize="large" className="hover:text-yellow-500"/>        
                    <InstagramIcon fontSize="large" className="hover:text-yellow-500"/>
                    <LinkedInIcon fontSize="large" className="hover:text-yellow-500"/>
                </div>
                <h1 className="md:text-2xl sm:text-xl text-lg text-yellow-500 font-semibold py-4">Joshua Carlo Jalancob Famularcano - Developer</h1>
                <p className="">I earned a degree in information technology, and I have a passion for technology and a strong desire to excel. Even though I may not have any prior experience working directly in the IT industry, I am certain that my technical expertise, creative problem-solving skills, and diligent work ethic make me a worthwhile addition to any team or business.</p>
                
                <div className="flex justify-center gap-40 w-full mx-auto my-5">
                    <Link to={'/contactme'} className="w-35 text-center py-2 bg-gray-800 rounded-lg px-4 border-2 border-yellow-500 uppercase shadow-lg text-yellow-500 hover:bg-white transition duration-300 ease-out hover:ease-in-out">Contact me</Link>
                    <div className="flex group items-center justify-between w-[130px] text-yellow-500 font-semibold hover:text-gray-800 duration-200 drop-shadow-xl">
                    <button className="text-lg pr-1 ">Learn more </button>
                    <MdKeyboardDoubleArrowRight size={20} className="group-hover:rotate-90 duration-200"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="h-[300px] bg-gray-800 font-poppins">
            <h1 className="text-yellow-400 text-6xl w-[500px] mx-auto my-8 pt-7 text-center">Tech Stack </h1>
            <div className="flex justify-between max-w-[1240px] mx-auto my-8 text-4xl text-white">
                <div>HTML5</div>
                <div>CSS</div>
                <div>Javascript</div>
                <div>Git</div>
                <div>Reactjs</div>
            </div>
            <div className="flex justify-between max-w-[1240px] mx-auto text-4xl text-white">
                <div>Nodejs</div>
                <div>Tailwind</div>
                <div>Bootstrap</div>
                <div>MongoDB</div>
            </div>
        </div>
        <div className="grid md:grid-cols-2 max-w-[1240px] mx-auto font-poppins my-28">

        </div>
        </div>
       
    )
}