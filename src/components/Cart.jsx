import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate();
  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white p-5 transition-all duration-500 z-50 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((food) => (
            <ItemCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
              qty={food.qty}
            />
          ))
        ) : (
          <h2 className="text-gray-800 font-bold text-center text-lg mt-5">
            Your Cart is empty !
          </h2>
        )}
        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items : {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">
            Total amount : {totalPrice}
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button
            onClick={() => navigate("/success")}
            className="bg-green-500 font-bold text-white px-3 py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5"
          >
            Checkout
          </button>
        </div>
      </div>
      <FaCartShopping
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full cursor-pointer bg-green-500 text-5xl shadow-md p-3 fixed bottom-10 right-4 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all "
        }`}
      />
    </>
  );
};
export default Cart;
