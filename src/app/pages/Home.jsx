import React from 'react'
import Topnav from '../../components/Topnav'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import Restaurants from '../../components/Restaurants'
import PopularCategories from '@/components/PopularCategories'
import PopularRestaurant from '@/components/PopularRestaurant'
import Orderingapp from '@/components/Orderingapp'
import POR from '@/components/POR'
import Aboutus from '@/components/Aboutus'
import Totals from '@/components/Totals'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <>
      {/* https://www.figma.com/community/file/1311333346304045465 */}
      <Topnav />
      <Navbar />
      <Hero />
      <Restaurants />
      <PopularCategories />
      <PopularRestaurant />
      <Orderingapp />
      <POR />
      <Aboutus />
      <Totals />
      <Footer />
    </>
   
  )
}

export default Home