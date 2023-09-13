"use client"

import { useRoute, useLocation } from 'wouter'

export const NavBar = () => {
  const [, params] = useRoute('/theme/:id')
  const [, setLocation] = useLocation()

  return (
    <div className='tags'>
      {params ?
        <a href="#" onClick={(e) => (e.preventDefault() ,setLocation('/portal'))}>뒤로가기</a>
        :
        <a href="/" >Home</a>
      }
    </div>
  )
}

