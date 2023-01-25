import {AiOutlineDownload} from 'react-icons/ai'


export const Home = () =>{
    return(
        <div  className="w-full h-screen bg-[#011226]">
            {/**Container**/}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#8BC5FA]'>Hi, i'm</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Apolos</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#00A3FA]'>I'm a full Stack developer</h2>
                <p className='py-1 text-[#F3FAFA] max-w-[700px]' >
                    &lt;&gt;
                    Full-stack developer with a passion for building innovative web applications.
                    Seeking opportunities to apply my skills and continue learning.
                    Eager to contribute to any team and make a positive impact.
                    &lt;/&gt;
                </p>
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