import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16 text-center'>
            <p>Copyright © {new Date().getFullYear()}
                - @<span className="link-container"><a href="https://github.com/ionuser13" target="_blank" className="link">ionuser13</a></span>
            </p>
        </div>
    </div>
  )
}

export default Footer