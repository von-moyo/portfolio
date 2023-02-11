import React from 'react'
import FirstPage from './FirstPage'
import CaseStudies from './CaseStudies'
import Languages from './Languages'

export default function Home(props) {
  let loopNumber = 10;
  const array = []
  for (let index = 0; index < loopNumber; index++) {
    array.push(index);
  }
  console.log(array)

  const box = <span className='small-box'></span>
  const number = 306;
  const box1 = [];
  const box2 = [];
  const box3 = [];
  for (let i = 0; i < number; i++) {
    box1.push(box);
    box2.push(box);
    box3.push(box);
  }

  return (
    <>
      <FirstPage
        key={array[0]}
        box1={box1}
        box2={box2}
        box3={box3}
        about={props.toAbout}
      />
      <CaseStudies
        key={array[1]}
        projectss={props.toProjects}
        box1={box1}
        box2={box2}
        box3={box3}
      />
      <Languages
        key={array[2]}
        box={box}
      />
    </>
  )
}

