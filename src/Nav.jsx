import React from 'react'
import "./global.css"

const Nav = () => {
  return (
    <>
        <nav>
            <div className="logo-block">
                <img className='navigation-img1' src="https://thecodedose.com/static/logo-c7848343982b939fcec1c604d5bf5da8.png" alt="" />
            </div>
            <div className='menu'>
                <ol>
                <li className='li-1'> <a className='a-1 home' href="./">HOME</a> </li>
                <li  className='li-1'>
                  <a className='a-1 blog' href="https://thecodedose.com/blog/">BLOG</a>
                </li>
                <li className='li-3'>
                  <a className='a-1 study-plans' href="https://thecodedose.com/study-plans/">STUDY PLANS</a>
                </li>
                <li className='li-1'>
                  <a className='a-1 shop' href="https://www.redbubble.com/people/thecodedose/shop">SHOP</a>
                  </li>
                <li className='li-1 course'><a className='a-1' href="https://www.redbubble.com/people/thecodedose/shop" >COURSE</a></li>
                </ol>
            </div>
        </nav>
      </>
  )
}

export default Nav
