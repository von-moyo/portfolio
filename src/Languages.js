import React, { useState, useEffect } from 'react'

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
        <div className="stack-images">
          <div className="stack"><img className='stack-image' src="react.svg" alt=""/>REACT JS</div>
          <div className="stack"><img className='stack-image' src="bootstrap.svg" alt="" />BOOTSTRAP</div>
          <div className="stack"><img className='stack-image' src="css3.svg" alt="" />CSS</div>
          <div className="stack"><img className='stack-image' src="html5.svg" alt="" />HTML</div>
          <div className="stack"><img className='stack-image' src="java.svg" alt="" />JAVA</div>
          <div className="stack"><img className='stack-image' src="node.svg" alt="" />NODE JS</div>
          <div className="stack"><img className='stack-image' src="python.svg" alt="" />PYTHON</div>
          <div className="stack"><img className='stack-image' src="wordpress.svg" alt="" />WORDPRESS</div>
          <div className="stack"><img className='stack-image' src="vuejs.svg" alt="" />VUE JS</div>
          <div className="stack"><img className='stack-image' src="square-js.svg" alt="" />JAVASCRIPT</div>
        </div>
      </div>
      <div className="work-together">
        <div className='have-a-project'>HAVE A PROJECT ?</div>
        <div className='work-together-header'>Let's Work Together</div>
        <div className='work-together-description'>I have gained meaningful experience in website design and integration over a number of years. This was majorly due to my thirst for knowledge. I ventured into front-end because it seemed to be the most friendly but now, I am a React developer that can build any form of website you might need.
        </div>
        <div className="talk-button">
        <a href="mailto:florishadekogbe@gmail.com" className='footer-envelope'>
          <img src='envelope-solid.svg' alt='' className='mail' id='mailf'/>
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
