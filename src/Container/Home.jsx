import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.scss'
import { Animate } from 'react-simple-animate'
export const Home = () => {
  const navigate = useNavigate()
  const handlemanagepage = () => {
    navigate("./contact")
  }
  return (
    <section className='home' id='home'>
      <div className='home_textwrapper'>
        <h1>
          Hi,Am Ronald,
          <br />
          A Front-end-developer
        </h1>
      </div>
      <Animate play duration={1.5} delay={1} start={{ transform: 'translateY(350px)' }} end={{ transform: 'translateX(0px)' }}>
        <div className='button-man'>
          <button onClick={handlemanagepage}>Hire Me</button>
        </div>
      </Animate>
    </section>
  )
}
