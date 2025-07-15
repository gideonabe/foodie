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
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Topnav />
        <Navbar />
        <Hero />
        <Restaurants />
        <PopularCategories />
        <div className="max-w-[95%] mx-auto mt-6">
          <h1 className='text-2xl font-semibold'>Popular Restaurants</h1>
        </div>
        <PopularRestaurant />
        <Orderingapp />
        <POR />
        <Aboutus />
        <Totals />
        <Footer />
      </main>
    </>
   
  )
}

export default Home