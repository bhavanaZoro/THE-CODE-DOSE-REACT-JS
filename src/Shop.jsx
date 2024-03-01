import React from 'react'

const Shop = () => {
  return (
    <>
    <div className='shop1'>
        <div className='dis shop2'>
            <div className='shop2-1 grid-cols-2'>
                <img  className='image' src="https://thecodedose.com/static/coding-in-progress-sticker-23b28315e0a88d8b3de060946318b3bb.svg" alt="" />
                <img  className='image' src="https://thecodedose.com/static/witch-coffee-coaster-cde69530cfb02cfb15ae07fa8bdbe356.svg" alt="" />
                <img  className='image' src="https://thecodedose.com/static/coding-baby-sticker-930cfe1d2cd5acd36ef43b94dff84a04.png" alt="" />
                <img  className='image' src="https://thecodedose.com/static/coding-baby-tshirt-6064b94cffc10b76808e8ae988becbe5.png" alt="" />
            </div>
            <div className='shop2-2'>
            <h2 className='shop2-head'>Check out our RedBubble store</h2>
            <p>Make the nerd in you happy! View our collection of t-shirts, stickers, magnets and more.</p>
            <a className='uppercase shop-anchor' href="\">visit store</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Shop
