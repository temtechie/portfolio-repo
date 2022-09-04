import React from 'react';
import { BsTwitter, BsLinkedin } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsTwitter />
        </div>
        <div>
            <FaFacebook />
        </div>
        <div>
            <BsLinkedin />
        </div>
    </div>
  )
}

export default SocialMedia;