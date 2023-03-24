import React from 'react'
import './Pagecontainer.scss'
export const Pagecontainer = ({headertext,icon}) => {
  return (
    <div className='wrapper'>
      <h2>{headertext}</h2>
      <span >{icon}</span>
    </div>
  )
}
 