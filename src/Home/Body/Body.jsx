import React from 'react'
import BodyPic from '../../img/Body.png';
import './Body.css'

const Body = () => {
  return (
    <div className='body'>
      <div className='Right'>
            <h1>Cinderella.</h1>
            <h3>Cinderlla is an online Dating app that helps to meet new people around the world.</h3>
            <span>Meet,Chat,Date,Be togather</span>
            <h5>If You new here? No worries,<span style={{color:'blue',cursor:'pointer'}}> create a new account</span></h5>
            <button className='SignUp'>SignUp</button>
      </div>
      <div className='left'>
            <img src={BodyPic}/>
      </div>
    </div>
  )
}

export default Body