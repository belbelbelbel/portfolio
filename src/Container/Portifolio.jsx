import React from 'react'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { Pagecontainer } from '../Components/Pagecontainer'
export const Portifolio = () => {
  return (
    <section>
      <Pagecontainer headertext=' portfolio' icon={<BsFillInfoCircleFill size={40} />} />
      <hr className='hr' />

    </section>
  )
}
