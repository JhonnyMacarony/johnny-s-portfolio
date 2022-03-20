import React from 'react'
import "./Profile.css" 

const Profile = () => {
  return (
    <div className='profile'>
      <div className='about-me prop'>
        <h2> About me: </h2>
      <p> I am a 15 year old child who started learning to program at the age of 12 and can make you the site you want. </p>
      <p> In this web page you can see some of the sites I have made over time. </p>
      <p> Country: Romania </p>
      <p> Age: 15 years </p>
      <p> Experience: 3 years </p>
      <p> Email: ionut.csndrea@gmail.com </p>
      <p> Phone Number: 0753 807 109 </p>
      </div>
      <div className='what-i-am-good-at prop'>
        <h2>  What can I do: </h2>
      <p> I can make sites and apps in react vs vanilla JavaScript. </p>
      <p> I do the design in CSS and as components I use HTML and the components from Mui ( <a className='mini-link' href='https://mui.com/'> https://mui.com/ </a> ) . </p>
      </div>
      <div className='my-services prop'>
        <h2> My services: </h2>
      <p> I can build the site or application you want at a good price. </p>
      <p> I can also make and edit videos but I'm not an expert on that. </p>

      </div>

    </div>
  )
}

export default Profile