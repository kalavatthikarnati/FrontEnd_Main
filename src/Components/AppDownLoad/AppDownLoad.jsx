import React from 'react'
import './AppDownLoad.css'
import { assets } from '../../assets/assets'

const AppDownLoad = () => {
  return (
    <div className='app-download' id="app-download">
      <p>For Better Experience Download <br/>Food Order</p>
      <div className='app-download-platform'>
  <a href="https://www.google.co.in/">
    <img src={assets.play_store} alt='' />
  </a>
  <a href="https://play.google.com/store/games?device=windows&pli=1">
    <img src={assets.app_store} alt='' />
  </a>
</div>
    </div>
  )
}

export default AppDownLoad
