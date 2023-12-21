import React from 'react'
import { Container } from 'react-bootstrap'
import navlogo1 from '../assets/images/nav-uper-logo-img-1.png'
import navlogo2 from '../assets/images/nav-uper-logo-img-2.png'

const Navupersec = () => {
  return (
    <div className=' d-none d-lg-block '>
      <Container  className='py-3'>
        <div className=' d-flex align-items-center justify-content-between '>
             <img src={navlogo1} alt="#" />
             <img src={navlogo2} alt="#" />
        </div>
      </Container>
    </div>
  )
}

export default Navupersec
