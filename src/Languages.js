import React, { useState, useEffect } from 'react'
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Slider } from "./Slider";

export default function Languages(props) {
  const num = 160;
  const box1 = []

  for (let index = 0; index < num; index++) {
    box1.push(props.box)
  }
  const numm = 100;
  const boxx1 = []

  for (let index = 0; index < numm; index++) {
    boxx1.push(props.box)
  }

  // const [showTopB tn, setShowTopBtn] = useState(false);

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY > 1000) {
  //       setShowTopBtn(true)
  //     } else {
  //       setShowTopBtn(false)
  //     }
  //   })
  // }, [])

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="end-section">
      <div className='languages'>
        ADEQUATELY SKILLED IN
        <div className='language-header'>Languages and Frameworks</div>
        <div className="language-description">
          from  learning through practice over the years and acquiring various certifications in the different fields. You can find the specific ones that I have grown very attached to and proficient below here...
        </div>
        <div className="marquee">
          <Slider speed={20000}>
            <div className="item">
              <img className='item-image' src="react.svg" alt="" />
              <span>REACT JS</span>
            </div>
            <div className="item">
              <img className='item-image' src="bootstrap.svg" alt="" />
              <span>BOOTSTRAP</span>

              </div>
            <div className="item">
              <img className='item-image' src="css3.svg" alt="" />
              <span>CSS</span>

              </div>
            <div className="item">
              <img className='item-image' src="html5.svg" alt="" />
              <span>HTML</span>

              </div>
            <div className="item">
              <img className='item-image' src="java.svg" alt="" />
              <span>JAVA</span>

              </div>
            <div className="item">
              <img className='item-image' src="node.svg" alt="" />
              <span>NODE JS</span>

              </div>
            <div className="item">
              <img className='item-image' src="python.svg" alt="" />
              <span>PYTHON</span>

              </div>
            <div className="item">
              <img className='item-image' src="wordpress.svg" alt="" />
              <span>WORDPRESS</span>

              </div>
            <div className="item">
              <img className='item-image' src="vuejs.svg" alt="" />
              <span>VUE JS</span>

              </div>
            <div className="item">
              <img className='item-image' src="square-js.svg" alt="" />
              <span>JAVASCRIPT</span>

              </div>
          </Slider>

        </div>
      </div>
      <div className="work-together">
        <div className='have-a-project'>HAVE A PROJECT ?</div>
        <div className='work-together-header'>Let's Work Together</div>
        <div className='work-together-description'>I have gained meaningful experience in website design and integration over a number of years. This was majorly due to my thirst for knowledge. I ventured into front-end because it seemed to be the most friendly but now, I am a React developer that can build any form of website you might need.
        </div>
        <div className="talk-button">
          <a href="mailto:florishadekogbe@gmail.com" className='footer-envelope'>
            <img src='envelope-solid.svg' alt='' className='mail' id='mailf' />
            LET'S TALK
          </a>
          <div className="boxes show" id='footer-box'> {box1} </div>
        </div>
      </div>
      <div className="footer">
        <div className="copyright">@ 2022 Florish Adekogbe - All right reserved</div>
        <div className="iconss">
          <a href='http://www.github.com/von-moyo'><img className='social-media-icon' src="github.svg" alt="" /></a>
          <a href="http://www.linkedin.com/in/florish-adekogbe-b627451b6"><img className='social-media-icon' src="linkedin.svg" alt="" /></a>
          <a href='https://dev.to/vonn'><img className='social-media-icon' src="dev.svg" alt="" /></a>
          <a href='https://hashnode.com/@Florish'><img className='social-media-icon' src="hashnode.svg" alt="" /></a>
          <a href="https://stackoverflow.com/users/20504192/moyo"><img className='social-media-icon' src='stack-overflow.svg' alt="" id='stack-overflow' /></a>
          <div className="circle" onClick={goToTop}><div className="arrow"></div>

          </div>
        </div>
      </div>

    </div>
  )
}
