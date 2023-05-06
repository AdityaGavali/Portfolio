import { Card  , Button} from 'antd'
import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
function Projects() {
  return (
    <div >
    <div className='text-center m-5  p-2 b ' id='projects'>
    <h1 className=' text-2xl  text-blue-300 font-bold font-Alkatra  ' id='projects'>PROJECTS</h1>
    <p className='text-white mt-2 text-xl font-Alkatra'>These are some of my best projects.Check them out.</p>
    </div>
    <div className='  p-4  flex flex-wrap justify-center mb-1 '>
   

   
    <Card  className=' card w-96 text-white bg-zinc-800 rounded-2xl sm:w-80 h-64 m-2  mt-5 '>
    <h1 className='text-2xl text-blue-300 text-center font-Alkatra'>TextUtils</h1>
    <p className=' font-Alkatra text-center'>Designed and developed a Front-End web application that provides users with text-processing utilities.
 The Frontend comprises Modern React with Hooks , Tailwind CSS
</p>
    <div className='flex flex-col  justify-between'>
    <div className='m-auto text-3xl'><a href="https://github.com/AdityaGavali/Text-Utlity" target='_blank'><AiOutlineGithub/></a></div>
    <Button className='mt-3 m-auto w-48 rounded-xl bg-red-300 text-white  font-bold'><a href="https://textutility0.netlify.app/" target='_blank'>Live Demo</a> </Button>
    
     </div>
    </Card>
    <Card  className=' card w-96 text-white bg-zinc-800 sm:w-80 rounded-2xl h-64 m-2  mt-5 '>
    <h1 className='text-2xl text-blue-300 text-center font-Alkatra'>NewsApp</h1>
    <p className=' font-Alkatra text-center'>Designed and developed a Front-End web application in which users can search and read the news.
 The Frontend comprises Modern React with Hooks and  API fetching 
</p>
    <div className='flex flex-col  justify-between'>
    <a href='https://github.com/AdityaGavali/Text-Utlity' target={'_blank'} className='m-auto text-3xl'><a href="https://github.com/AdityaGavali/News-App" target='_blank'><AiOutlineGithub/></a></a>
    <Button className='mt-3 w-48 m-auto rounded-xl bg-red-300 text-white  font-bold'><a href="https://github.com/AdityaGavali/News-App" target='_blank'>Live Demo</a> </Button>
    
     </div>
    </Card>
    <Card  className='card w-96 text-white bg-zinc-800 sm:w-80 rounded-2xl h-64 m-2 mt-5 '>
    <h1 className='text-2xl text-blue-300 text-center font-Alkatra'>CryptoConverter</h1>
    <p className=' font-Alkatra text-center'>Frontend Web Application which have calculator for converting one currency to another.The Frontend comprises Modern React with Hooks and  API fetching  </p>
    <div className='flex flex-col  justify-between'>
    <div className='m-auto text-3xl'><a href="https://github.com/AdityaGavali/Crptyo-Currency-Converter" target='_blank'><AiOutlineGithub/></a></div>
    <Button className='mt-3 w-48 m-auto rounded-xl bg-red-300 text-white  font-bold'><a href="https://convertercrypto.netlify.app/" target='_blank'>Live Demo</a> </Button>
    
     </div>
    </Card>
    <Card  className='card w-96 text-white bg-zinc-800 sm:w-80 rounded-2xl h-64 m-2 mt-5 '>
    <h1 className='text-2xl text-blue-300 text-center font-Alkatra'>WeatherApp</h1>
    <p className=' font-Alkatra text-center'> Front-End web application in which weather forecasting of cities is done. Made with HTML , CSS , Javascript. The Frontend comprises API Integration
</p>
    <div className='flex flex-col  justify-between'>
    <div className='m-auto text-3xl'><a href="https://github.com/AdityaGavali/Weather-Checker" target='_blank'><AiOutlineGithub/></a></div>
    <Button className='mt-3 w-48 m-auto rounded-xl bg-red-300 text-white  font-bold'><a href="https://checkthecityweather.netlify.app/" target='_blank'>Live Demo</a> </Button>
    
     </div>
    </Card>
   
    
    </div>
     
    </div>
  )
}

export default Projects