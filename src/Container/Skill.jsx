import React from 'react'
import { Pagecontainer } from '../Components/Pagecontainer'
import { BsFillInfoCircleFill } from 'react-icons/bs'
export const Skill = () => {
  return (
    <section>
      <Pagecontainer headertext='skills' icon={<BsFillInfoCircleFill size={40} />} />
      <hr className='hr' />

    </section>
  )
}
