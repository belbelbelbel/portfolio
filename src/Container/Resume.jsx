import React from 'react'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { Pagecontainer } from '../Components/Pagecontainer'
export const Resume = () => {
  return (
    <section>
      <Pagecontainer headertext=' resume' icon={<BsFillInfoCircleFill size={40} />} />
      <hr className='hr' />

    </section>
  )
}
