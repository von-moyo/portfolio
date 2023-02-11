import React from 'react'

export default function firstPage(props) {

  const description = "Over the last three years I have gained meaningful knowledge and experience by being a part of diverse teams that aim to provide the best web interface for comfortable user experience and web-app effectiveness. These have been accomplished by my successful coding, testing, debugging and troubleshooting."

  const descriptionHeader = "A Web Developer specializing in Front-End Design and Implementation."

  return (
    <div className='section-1' ref={props.about}>

      <div className='home'>
        <div className='description'>
          <div className='head-name'>
            <h1> Hello !</h1>
            <div className='intro-name'><h1 id='i'><i>I'm</i></h1> <h1 id='space'>Florish</h1><h1 id='space'> Adekogbe</h1></div>
          </div>
          <div className='about'>
            <p className='about-header'>
              {descriptionHeader}
            </p>
            <p className='about-body'>
              {description}
            </p>
            <a href="http://www.github.com/von-moyo" className='github'>
              <img src='github.svg' alt='' className='mail' />
              VISIT MY GITHUB
            </a>
          </div>
        </div>
      </div>

      <div className='flex'>
      <div className='boxx'>
        <div className='boxes' id='b1'>
          {props.box1}
        </div>
        <div className='boxes' id='b2'>
          {props.box2}
        </div>
        <div className='boxes' id='b3'>
          {props.box3}
        </div>

        <div className="portfolio-image">
          <img alt="owner pfp" src={"photoroom.png"} className="pfp" />
        </div>
        <a href="mailto:florishadekogbe@gmail.com" className='talk'>
          <img src='envelope-solid.svg' alt='' className='mail' />
          LET'S TALK
        </a>
      </div>
      <div className="icons">
        <a href='http://www.github.com/von-moyo'><img className='social-media-icon' src="github.svg" alt="" /></a>
        <a href="http://www.linkedin.com/in/florish-adekogbe-b627451b6"><img className='social-media-icon' src="linkedin.svg" alt="" /></a>
        <a href='https://dev.to/vonn'><img className='social-media-icon' src="dev.svg" alt="" /></a>
        <a href='https://hashnode.com/@Florish'><img className='social-media-icon' src="hashnode.svg" alt="" /></a>
        <a href="https://stackoverflow.com/users/20504192/moyo"><img className='social-media-icon' src='stack-overflow.svg' alt="" id='stack-overflow' /></a>
        <div className="line"></div>
      </div>
      </div>
    </div>
  )
}
