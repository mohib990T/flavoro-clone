import { useSelector } from "react-redux";
import FoodData from "../data/FoodData";
import FoodCard from "./FoodCard";
import toast, { Toaster } from "react-hot-toast";

const FoodItems = () => {
  const catagory = useSelector((state) => state.catagory.catagory);
  const search = useSelector((state) => state.search.search);
  const handleToast = (name) => toast.success(`Added ${name}`);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {FoodData.filter((food) => {
          if (catagory === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              catagory === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            category={food.category}
            img={food.img}
            rating={food.rating}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};
export default FoodItems;
