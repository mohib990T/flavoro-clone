import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCatagory } from "../redux/slices/CatagorySlice";

const CatagoryMenu = () => {
  const [catagories, setCatagories] = useState([]);

  const listUniqueCatagories = () => {
    const uniqueCatagories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCatagories(uniqueCatagories);
  };

  useEffect(() => {
    listUniqueCatagories();
  }, []);

  const dispatch = useDispatch();
  const selectedCatagory = useSelector((state) => state.catagory.catagory);

  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3  overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
      <button
            onClick={() => dispatch(setCatagory("All"))}
            
            className={`px-3 py-2 mb-1 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCatagory === "All" && "bg-green-500 text-white"}`}
          >
            All
          </button>
        {catagories.map((category) => (
          <button
            onClick={() => dispatch(setCatagory(category))}
            key={nanoid()}
            className={`px-3 py-2 mb-1 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCatagory === category && "bg-green-500 text-white"}`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
export default CatagoryMenu;
