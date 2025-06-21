import React from 'react'
import Topnav from '../../components/Topnav'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import Restaurants from '../../components/Restaurants'
import PopularCategories from '@/components/PopularCategories'
import PopularRestaurant from '@/components/PopularRestaurant'
import Orderingapp from '@/components/Orderingapp'

const Home = () => {
  return (
    <>
      <Topnav />
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <Restaurants /> */}
      {/* <PopularCategories /> */}
      {/* <PopularRestaurant /> */}
      <Orderingapp />
    </>
   
  )
}

export default Home