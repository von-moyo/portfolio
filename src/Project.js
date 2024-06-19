import React from 'react'

export default function Project(props) {

  const id = parseInt(props.proj.id)

  const box = <span className='small-box'></span>
  const number = 306;
  const box1 = [];
  const box2 = [];
  const box3 = [];
    box1.push(box);
    box2.push(box);
    box3.push(box);
  }
  const boxxx = <span className='small-box'></span>
  const numberrr = 100;
  const boxxx1 = [];
  const boxxx2 = [];
  const boxxx3 = [];
  for (let i = 0; i < numberrr; i++) {
    boxxx1.push(boxxx);
    boxxx2.push(boxxx);
    boxxx3.push(boxxx);
  }

  return (
    <div>
      <div className="project1"
        style={
          id % 2 === 0 ? {
            flexDirection: 'row-reverse',
            justifyContent: 'flex-end'
          } : {}
          
        }
      >
        <div className="project1-image"
          style={
            id % 2 === 0 ? {
              marginLeft: '10.6%',

            } : {}
          }
        >
          <div className='boxes zindex box1-projects' id='none'> {id % 2 === 0 ? box2 : ""} </div>
          <div className='boxes zindex box2-projects' id='none'> {id % 2 === 0 ? box1 : ""} </div>
          <div className='boxes zindex box3-projects' id='none'> {id % 2 === 0 ? box3 : ""} </div>


          <section></section>

          <img alt='for project01' className='image-for-project' src={props.proj.image} />
          <img alt='for project01' className='image-for-proj' id='image2' src={props.proj.image2} />
        </div>
        <div className='boxes zindex box1-projects' id='none'> {id % 2 === 1 ? box1 : ""} </div>
        <div className='boxes zindex box2-projects' id='none'> {id % 2 === 1 ? box2 : ""} </div>
        <div className='boxes zindex box3-projects' id='none'> {id % 2 === 1 ? box3 : ""} </div>
        <div className="project1-description">
          <div className='project-id'>{props.proj.id}</div>
          <div className="project-name">{props.proj.name}</div>
          <div className="project-name">{props.proj.name2}</div>
          <div className="project-details">{props.proj.details}</div>
          <a href={props.proj.link}><button className="project-button">{props.proj.button}</button></a>
        </div>
      </div>
    </div>
  )
}
