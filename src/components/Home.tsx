import {AiOutlineDownload} from 'react-icons/ai'


export const Home = () =>{
    return(
        <div  className="w-full h-screen bg-[#011226]">
            {/**Container**/}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#8BC5FA]'>Hi, i'm</p>
                <h1 className='text-2xl sm:text-7xl font-bold text-[#ccd6f6]'>Miner Lozano</h1>
                    <h2 className='pipe-effect text-3xl sm:text-7xl font-bold text-[#00A3FA] w-[226px] sm:w-[540px]'>I'm a developer</h2>
                <span className='text-[#B1FA96] pt-5'>&lt;div&gt;</span>
                <p className=' text-[#F3FAFA] max-w-[1000px] text-xs sm:text-xl py-3' >
                    Full-stack developer with a passion for building innovative web applications.
                    Seeking opportunities to apply my skills and continue learning.
                    Eager to contribute to any team and make a positive impact.
                </p>
                <span className='text-[#B1FA96] pb-5'>&lt;/div&gt;</span>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:border-white hover:text-black'>
                        Download CV
                        <span>
                            <AiOutlineDownload/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}