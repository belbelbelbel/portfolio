import React from 'react'
import { Pagecontainer } from '../Components/Pagecontainer'
import './About.scss'
import { Animate } from 'react-simple-animate'
import { BsFillInfoCircleFill } from 'react-icons/bs'
export const About = () => {

  const pagetata = [
    {
      label: 'name',
      value: 'ronald'
    },
    {
      label: 'age',
      value: '18'
    },
    {
      label: 'address',
      value: 'No 1 adedeji adekola str'
    },
    {
      label: 'email',
      value: 'gronaldchia@gmail.com'
    },
  ];
  const description = ['seasoned and independent front-end developer with years  of experience in blending the art of design with skill programming to deliver efficiently and engaging user experience through efficient website development,proactive future development,and relentless debugging.very passionate about aesthetic and ui designs,it is imperative that you provide a thorough and professional approach to your resume.as a front-end dvleoper you will judged by your ability to use ux and ui concept and follow design guidlines it is about expressing your attention to detail and how you can help implement design ideas for you future developers']
  return (
    <section>
      <Pagecontainer headertext='About Me' icon={<BsFillInfoCircleFill size={40} />} />
      <hr className='hr' />
      <div className='about-content'>
        <Animate play duration={1.5} delay={1} start={{ transform: 'translatex(-1500px)' }} end={{ transform: 'translateX(0px)' }}>
          <h3>A Front-end developer</h3>
          {description}
        </Animate>
      </div>
      <div>
        <Animate play duration={1.5} delay={1} start={{ transform: 'translatey(-500px)' }} end={{ transform: 'translateX(0px)' }}>
          <ul>
            {
              pagetata.map((item, i) => (
                <div key={i} className='item'>
                  {item.label} :
                  {item.value}
                </div>
              ))
            }
          </ul>
        </Animate>
      </div>

    </section>
  )
}
