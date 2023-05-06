
import React from 'react'
import {profile , codechefid ,leetcode} from '../assests/images'
import {AiOutlineBook, AiOutlineDesktop, AiOutlineGithub, AiOutlineMail,
    AiOutlineLinkedin ,
} from "react-icons/ai";

function Home() {
  return (
     <div>
     <div className='flex justify-center rounded-3xl mt-20 m-5 md:m-10 md:mt-20 p-2 bg-zinc-800 ' id='About' >

      
      <div className="flex flex-col">
        <div className="m-5   h-52 ">
        <img className='h-52 w-52  m-auto rounded-full'  src={profile} alt="" />
        </div>
        <div className="text-center text-white   text-3xl font-Alkatra">Aditya Gavali</div>
        <div className='text-center text-white font-Alkatra '>Web Developer | Competitive Programmer</div>
        <div className='m-auto flex gap-6 p-3 '>
        <a href="https://github.com/AdityaGavali" target={'_blank'} className='text-2xl font-bold  text-white'><AiOutlineGithub/></a>
        <a href="https://www.linkedin.com/in/aditya-gavali-893931206/" target={'_blank'} className='text-2xl font-bold   text-blue-300'><AiOutlineLinkedin/></a>
        <a href="https://www.codechef.com/users/adityagavali" target={'_blank'} className='text-xl rounded-md bg-white font-bold  '><img className='h-5 w-6 ' src={codechefid} alt="" /></a>
        <a href="https://leetcode.com/adityagavali/" target={'_blank'} className='text-2xl rounded-md bg-white  '><img src={leetcode} alt="" /></a>
        </div>
      <div className=' text-gray-50 card m-auto mt-5 p-5 w-full bg-grey-900 hover:border- rounded-2xl border-2  border-white md:w-3/4'>
        <h2 className='text-2xl text-center font-Alkatra'>About Me</h2>
        <p className='font-Alkatra'>I am currently pursuing Bachelors in Information Technology at Pimpri Chinchwad College of Engineering Pune. I am passionate about solving problems and finding out solutions.I have good coding experience in domains such as Web development , C++.
        My current tech stack is MERN stack. I am also honing my skills in competitive programming.
        </p>
      </div>
      
     
      <div className='m-auto mb-5 mt-5  text-center   border-white text-white text-2xl font-Alkatra font-bold w-40 h-7 rounded-2xl'><a className='flex justify-center' href="https://drive.google.com/file/d/1nto35az6sDaoQDox4gdqW8_vGqTC-LKX/view?usp=sharing" target={'_blank'}>Resume <AiOutlineBook/></a></div>
      </div>
     
      
    </div>
    <div className=' text-center m-10 '>
      <h1 className='text-blue-300 font-bold  font-Alkatra text-2xl'>SKILLS</h1>
      
      <div className=' flex justify-center gap-3 m-5 p-3 rounded-2xl flex-wrap bg-zinc-800 min-h-[70px] '>
      
      <div className=' w-20 h-9 p-1  rounded-2xl border-2 border-red-300 text-white font-bold'>C/C++</div>
      <div className=' w-20 h-9 p-1  rounded-2xl border-2 border-red-300 text-white font-bold'>Python</div>
      <div className=' w-20 h-9 p-1  rounded-2xl border-2 border-red-300 text-white font-bold'>HTML</div>
      <div className=' w-20 h-9 p-1  rounded-2xl border-2 border-red-300 text-white font-bold'>CSS</div>
      <div className='  w-24 h-9 p-1  border-2 border-red-300 text-white font-bold rounded-2xl'>Javascript</div>
       <div className='  w-20 h-9 p-1 border-2 border-red-300  text-white font-bold  rounded-2xl '>ReactJS</div>    
       <div className='  w-24 h-9 p-1 border-2 border-red-300 text-white font-bold rounded-2xl'>Testing</div>
       <div className=' h-9 p-1 border-2 border-red-300 text-white font-bold w-20  rounded-2xl'>MySql</div>
       <div className=' h-9 p-1 border-2 border-red-300 text-white font-bold w-24  rounded-2xl'>MongoDB</div>
       <div className=' h-9 p-1 border-2 border-red-300 text-white font-bold w-24  rounded-2xl'>Firebase</div>

      
      </div>
      
      </div>
    </div>
  )
}

export default Home