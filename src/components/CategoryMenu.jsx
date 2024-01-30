import React, { useEffect, useState } from "react";
import FoodData from "../FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategorys } from "../redux/slice/CategorySlice";

const CategoryMenu = () => {
  const [category, setCategory] = useState([]);

  const listuniquecategory = () => {
    const uniquecategory = [...new Set(FoodData.map((food) => food.category))];
    setCategory(uniquecategory);
  };

  useEffect(() => {
    listuniquecategory();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
      <button
              onClick={() => dispatch(setCategorys("All"))}
            
              className={`px-3 py-2 bg-gray-200 font-bold hover rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory === "All" && "bg-green-500 text-white"}`}
            >
              All
            </button>
        {category.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategorys(category))}
              key={index}
              className={`px-3 py-2 bg-gray-200 font-bold hover rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory === category && "bg-green-500 text-white"}`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
