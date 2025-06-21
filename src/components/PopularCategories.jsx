import React from "react";
import CategoriesCard from "./CategoriesCard";

const categoriesData = [
  {
    id: 1,
    imageUrl: "/assets/whiteburger.png",
    title: "Burger & Fast Food",
    description: "21 restaurants",
  },
  {
    id: 2,
    imageUrl: "/assets/salad.png",
    title: "Salads",
    description: "32 restaurants",
  },
  {
    id: 3,
    imageUrl: "/assets/pasta.png",
    title: "Pasta & Casuals",
    description: "4 restaurants",
  },
  {
    id: 4,
    imageUrl: "/assets/pizza.png",
    title: "Pizza",
    description: "32 restaurants",
  },
  {
    id: 5,
    imageUrl: "/assets/breakfast.png",
    title: "Breakfast",
    description: "21 restaurants",
  },
  {
    id: 6,
    imageUrl: "/assets/soups.png",
    title: "Soups",
    description: "4 restaurants",
  },
];

const PopularCategories = () => {
  return (
    <section className="max-w-[95%] mx-auto py-4">
      <h1 className="text-2xl font-semibold mb-6">Order.uk Popular Categories😍</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categoriesData.map((category) => (
          <CategoriesCard
            key={category.id}
            image={category.imageUrl}
            title={category.title}
            description={category.description}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
