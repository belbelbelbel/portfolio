import React, { useState } from 'react'
import {FaBars, FaReact} from 'react-icons/fa';
import {HiX} from 'react-icons/hi'
import { Link } from 'react-router-dom';
import './Navbar.scss'
export const Navbar = () => {
    const data =[
        {
            label:'Home',
            to:'/'
        },
        {
            label:'About Me',
            to:'/about'
        },{
            label:'Skills',
            to:'/skill'
        },{
            label:'Resume',
            to:'/resume'
        },{
            label:'Portifolio',
            to:'/portifolio'
        },{
            label:'Contact',
            to:'/contact'
        }
    ]

const [toggle,settoggle] = useState(false)
    const handleclick = ()=>{
        settoggle(!toggle)
    }
  return (
    <div>
        <nav className='navbar'>
            <div className='navbar_container'>
                <Link to={'/'} className='navbar_container_logo '><FaReact size={30}/></Link>
            </div>
            <ul className= {`navbar-container-menu  ${toggle?'active':''}`}>
                {
                    data.map((item,key)=>(
                        <li key={key} className='item'>
                            
                            <Link to={item.to} className='link'>
                                {item.label}
                                
                            </Link>
                            
                        </li>
                    ))
                }
            </ul>
            <div className='nav-icon' onClick={()=>{handleclick()}}>
                {
                    toggle?<HiX size={30}/>:<FaBars size={30}/>
                }
            </div>
        </nav>
    </div>
  )
}
