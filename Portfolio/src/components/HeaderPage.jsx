import { Link } from "react-router-dom"
import Typed from 'react-typed'
export default function HeaderPage(){
    return (
      
       <div className='h-screen bg-gray-800 w-full mx-auto font-poppins'>
          <h1 className="text-center md:text-7xl sm:text-6xl pt-40 max-w-[1240px] mx-auto text-5xl text-white">Hi, I'm </h1>
          <h2 className="text-yellow-500 py-5 max-w-[1240px] mx-auto text-center md:text-7xl sm:text-6xl text-5xl">Joshua Carlo Famularcano</h2>
            <h3 className="max-w-[1200px] mx-auto text-white text-center md:text-7xl sm:text-6xl text-5xl">I <Typed className="underline decoration-solid"
            strings={['design', 'build']} typeSpeed={120} backSpeed={140} loop/> websites.</h3>
            
            
          <div className="flex py-20 max-w-[1240px] mx-auto hx-auto">
            <Link to='/aboutme' className="flex items-center text-white md:text-xl sm:text-lg text-md mx-auto text underline">Learn more about me <Link className="animate-trans-right" to={'/aboutme'}><svg xmlns="http://www.w3.org/2000/svg"   fill="none" viewBox="0 0 24 24" strokeWidth={1.5}stroke="currentColor" className="w-6 h-6 text-yellow-300 ml-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
            </svg></Link></Link>
            

          </div>
       </div>
      
    )
}
// bg-[url("/src/images/code.jpg")]