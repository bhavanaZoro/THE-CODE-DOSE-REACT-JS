import React from 'react'

const Youtube = () => {
  return (
    <>
    <div className='youtube'>
      <div className='youtube1'>
        <div className='youtube-part1'>
            <h2 className='youtube-head'>Check us out on YouTube</h2>
            <p>Understand computer science concepts with hand-drawn animations.e3</p>
            <a className='uppercase tube-button' href="">open youtube</a>
        </div>
        <div className='youtube-part1'>
          <video autoPlay loop src="https://thecodedose.com/static/youtube-7cd3579b11dd6814a0743d1955609fbe.mp4"></video>
        </div>
      </div>
    </div>
    </>
  )
}

export default Youtube
