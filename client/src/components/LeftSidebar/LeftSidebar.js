import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/Globe.svg'
import { useSelector} from 'react-redux'
const LeftSidebar = () => {

  var User = useSelector((state) => (state.currentUserReducer))
  return (
    <div className="left-sidebar">
        <nav className="side-nav">
          <NavLink to='/' className='side-nav-links' activeclass='active'>
            <p>Home</p>
          </NavLink>
          <div className="side-nav-div">
            <div><p>PUBLIC</p></div>
            <NavLink to='/Questions' className='side-nav-links' activeclass='active'>
              <img src={Globe} alt="Globe" />
              <p style={{paddingLeft: "10px"}}>Questions</p>
            </NavLink>
            <NavLink to='/Tags' className='side-nav-links' activeclass='active'>
              <p style={{paddingLeft: "10px"}}>Tags</p>
            </NavLink>
            <NavLink to='/Users' className='side-nav-links' activeclass='active'>
              <p style={{paddingLeft: "10px"}}>Users</p>
            </NavLink>
            { User === null ? '':
            <NavLink to='/Community' className='side-nav-links' activeclass='active'>
              <p style={{paddingLeft: "10px"}}>Community</p>
            </NavLink>
            }
          </div>
        </nav>
    </div>
  )
}

export default LeftSidebar