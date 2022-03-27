import React from 'react'
import "./Profile.css" 

const Profile = () => {
  return (
    <div className='profile'>
      <div className='about-me prop'>
        <h2 className='h20'> About me: </h2>
      <p className='p30'> I am a 15 year old child who started learning to program at the age of 12 and can make you the site you want. </p>
      <p className='p30'> In this web page you can see some of the sites I have made over time. </p>
      <p className='p30'> Country: Romania </p>
      <p className='p30'> Age: 15 years </p>
      <p className='p30'> Experience: 3 years </p>
      <p className='p30'> Email: ionut.csndrea@gmail.com </p>
      <p className='p30'> Phone Number: 0753 807 109 </p>
      </div>
      <div className='what-i-am-good-at prop'>
        <h2 className='h20'>  What can I do: </h2>
      <p className='p30'> I can make sites and apps in react vs vanilla JavaScript. </p>
      <p className='p30'> I do the design in CSS and as components I use HTML and the components from Mui ( <a className='mini-link' href='https://mui.com/'> https://mui.com/ </a> ) . </p>
      </div>
      <div className='my-services prop'>
        <h2 className='h20'> My services: </h2>
      <p className='p30'> I can build the site or application you want at a good price. </p>
      <p className='p30'> I can also make and edit videos but I'm not an expert on that. </p>

      </div>

    </div>
  )
}

export default Profile