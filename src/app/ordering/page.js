import Topnav from '@/components/Topnav'
import Navbar from '@/components/Navbar'
import React from 'react'
import Restaurantdetailshero from '@/components/Restaurantdetailshero'

const ordering = () => {
  return (
    <>
      <main>
        <div className="hidden md:block ">
          <Topnav />
          <Navbar />
        </div>
        <div className="block md:hidden">
          <Navbar />
          <Topnav />
        </div>
        {/* <Restaurantdetailshero /> */}

      </main>
    </>
  )
}

export default ordering