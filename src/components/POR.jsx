import React from 'react'
import PORCard from './PORCard'

const POR = () => {

  const PORData = [
    {
      id: 1,
      imageUrl: '/assets/chefholdingroller.png',
      subheading: 'Sign up as a business',
      heading: 'Partner with us',
      button: 'Get Started',
      info: 'Earn more with lower fees',
    },
    {
      id: 2,
      imageUrl: '/assets/coffeerider.png',
      subheading: 'Sign up as a rider',
      heading: 'Ride with us',
      button: 'Get Started',
      info: 'Avail exclusive perks',
    }
  ]

  return (
    <>
      <section className='partner_or_ride'>
        <div className='max-w-[95%] mx-auto px-2 py-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-full'>
            {PORData.map((data) => (
              <PORCard 
                key={data.id}
                imageUrl={data.imageUrl}
                subheading={data.subheading}
                heading={data.heading}
                button={data.button}
                info={data.info}

              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default POR