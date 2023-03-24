import React from 'react'
import { Pagecontainer } from '../Components/Pagecontainer'
import { BsFillInfoCircleFill } from 'react-icons/bs'
export const Contact = () => {
  return (
    <section>
      <Pagecontainer headertext='contact me' icon={<BsFillInfoCircleFill size={40} />} />
      <hr className='hr' />

    </section>
  )
}
