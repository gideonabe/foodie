import Topnav from "@/components/Topnav";
import Navbar from "@/components/Navbar";
import Restaurantdetailshero from "@/components/Restaurantdetailshero";
import Offers from "@/components/Offers";
import { FaCirclePlus } from "react-icons/fa6";
import DiscountCard from "@/components/DiscountCard";
import BurgerCard from "@/components/BurgersCard";
import InfoSection from "@/components/InfoSection";
import MapCard from "@/components/MapCard";
import CustomerReviews from "@/components/CustomerReviews";

export default function App() {

  const discountData = [
    {
      imageUrl: '/assets/ladywithphone.png',
      discount: '-20%',
      title: 'First Order Discount',
      subtitle: "McDonald's East London",
      icon: <FaCirclePlus size={30} color="#03081F"/>
    },
    {
      imageUrl: '/assets/manandlady.png',
      discount: '-20%',
      title: 'Vegan Discount',
      subtitle: "McDonald's East London",
      icon: <FaCirclePlus size={30} color="#03081F"/>
    },
    {
      imageUrl: '/assets/icecream.png',
      discount: '-100%',
      title: 'First Ice Cream Offer',
      subtitle: "McDonald's East London",
      icon: <FaCirclePlus size={30} color="#03081F"/>
    },
  ];

  const burgers = [
    {
      title: "Royal Cheese Burger with extra Fries",
      items: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
      price: "23.10",
      imageUrl: "/assets/burger1.png",
    },
    {
      title: "The classics for 3",
      items: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
      price: "23.10",
      imageUrl: "/assets/burger2.png",
    },
    {
      title: "Royal Cheese Burger with extra Fries",
      items: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
      price: "23.10",
      imageUrl: "/assets/burger3.png",
    },
    {
      title: "The classics for 3",
      items: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
      price: "23.10",
      imageUrl: "/assets/burger4.png",
    },
    {
      title: "Royal Cheese Burger with extra Fries",
      items: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
      price: "23.10",
      imageUrl: "/assets/burger5.png",
    },
    {
      title: "The classics for 3",
      items: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
      price: "23.10",
      imageUrl: "/assets/burger6.png",
    },
  ];

  const fries = [
    {
      title: "Royal Cheese Burger with extra Fries",
      items: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
      price: "23.10",
      imageUrl: "/assets/fry1.png",
    },
    {
      title: "The classics for 3",
      items: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
      price: "23.10",
      imageUrl: "/assets/fry2.png",
    },
    {
      title: "Royal Cheese Burger with extra Fries",
      items: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
      price: "23.10",
      imageUrl: "/assets/fry3.png",
    },
    {
      title: "The classics for 3",
      items: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
      price: "23.10",
      imageUrl: "/assets/fry4.png",
    },
    {
      title: "Royal Cheese Burger with extra Fries",
      items: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
      price: "23.10",
      imageUrl: "/assets/fry5.png",
    },
    {
      title: "The classics for 3",
      items: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
      price: "23.10",
      imageUrl: "/assets/fry6.png",
    },
  ];

  const coldDrinks = [
    {
      title: "Royal Cheese Burger with extra Fries",
      items: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
      price: "23.10",
      imageUrl: "/assets/drink1.png",
    },
    {
      title: "The classics for 3",
      items: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
      price: "23.10",
      imageUrl: "/assets/drink2.png",
    },
    {
      title: "Royal Cheese Burger with extra Fries",
      items: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
      price: "23.10",
      imageUrl: "/assets/drink3.png",
    },
    {
      title: "The classics for 3",
      items: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
      price: "23.10",
      imageUrl: "/assets/drink4.png",
    },
    {
      title: "Royal Cheese Burger with extra Fries",
      items: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
      price: "23.10",
      imageUrl: "/assets/drink5.png",
    },
    {
      title: "The classics for 3",
      items: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
      price: "23.10",
      imageUrl: "/assets/drink6.png",
    },
  ];


  return (
    <>
      <main className="relative min-h-screen w-full overflow-x-hidden">
        {/* <Topnav /> */}
        {/* <Navbar /> */}
        {/* <Restaurantdetailshero /> */}
        {/* <Offers /> */}


        <div className="max-w-[95%] mx-auto w-full flex flex-col gap-6">
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full my-6">
            {discountData.map((discount, idx) => (
              <DiscountCard key={idx} {...discount}/>
            ))}
            
          </div>

          <div className="flex flex-col">
            <h1 className="font-bold text-xl md:text-3xl ml-4">Burgers</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full h-full overflow-hidden p-4">
              {burgers.map((burger, idx) => (
                <BurgerCard key={idx} {...burger} />
              ))}

            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="font-bold text-xl md:text-3xl text-[#FC8A06] ml-4">Fries</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full h-full overflow-hidden p-4">
              {fries.map((fry, idx) => (
                <BurgerCard key={idx} {...fry} />
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="font-bold text-xl md:text-3xl text-[#FC8A06] ml-4">Cold Drinks</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full h-full overflow-hidden p-4">
              {coldDrinks.map((drinks, idx) => (
                <BurgerCard key={idx} {...drinks} />
              ))}
            </div>
          </div> */}

        </div>
        {/* <InfoSection /> */}
        {/* <MapCard /> */}
        <CustomerReviews />


      </main>

    </>
  );
}
