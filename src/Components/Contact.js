import React from 'react'
import {
    AiOutlineTwitter,
    AiOutlineYoutube,
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineGithub,
  
    
  } from "react-icons/ai";
function Contact() {
  return (
    <div className='text-center m-5 mb-3 bg-zinc-800 p-3 ' id='contact'>
        <div className='text-xl font-bold font-Alkatra text-white'>GET IN TOUCH</div>
       
        <div className='flex justify-center gap-10 m-5 text-red-300'>
        <a href="https://github.com/AdityaGavali" target='_blank' className='text-3xl font-bold animate-bounce text-white'><AiOutlineGithub/></a>
        <a href="https://www.linkedin.com/in/adityagavali18/" target='_blank' className='text-3xl font-bold  text-blue-500'><AiOutlineLinkedin/></a>
        <a href="https://instagram.com/_adityagavali_?igshid=ZDdkNTZiNTM=" target='_blank' className='text-3xl font-bold animate-bounce'><AiOutlineInstagram/></a>
        <a href="https://twitter.com/adityagavali03?t=pGTFgmDzsokp2CfUN9Xniw&s=09" target='_blank' className='text-3xl font-bold  text-blue-500'><AiOutlineTwitter/></a>
        </div>
        <p className='text-white text-xl mt-5 mb-7 border-2 border-white  m-auto p-2 w-72 rounded-lg'> adityagavali18@gmail.com</p>
       
        
    </div>
  )
}

export default Contact