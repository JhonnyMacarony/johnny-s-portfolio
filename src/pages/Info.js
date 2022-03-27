import React from 'react'
import Skils from '../components/Skils'
import "./Info.css"

const Info = () => {
  return (
    <div className='profile'>
    <div className='about-me prop'>
      <h2 className='h20'> About me: </h2>
    <p className='p30'> I am a 15 year old child who started learning to program at the age of 12 and can make you the site you want. </p>
    <p className='p30'> In this web page you can see some of the sites I have made over time. </p>
    </div>
    <div className='what-i-am-good-at prop'>
      <h2 className='h20'> What can I do: </h2>
    <p className='p30'> I can make sites and apps in react vs vanilla JavaScript. </p>
    <p className='p30'> I do the design in CSS and as components I use HTML and the components from Mui ( <a className='mini-link' href='https://mui.com/'> https://mui.com/ </a> ) . </p>
    </div>
    <div className='my-services prop'>
      <h2 className='h20'> My services: </h2>
    <p className='p30'> I can build the site or application you want at a good price. </p>
    <p className='p30'> I can also make and edit videos but I'm not an expert on that. </p>

    </div>

    <Skils />

  </div>

  )
}

export default Info