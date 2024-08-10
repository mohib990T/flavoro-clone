import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { PropagateLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen  ${
        loading ? "bg-amber-100" : "bg-green-500"
      }`}
    >
      {loading ? (
        <PropagateLoader color="#24c88d" />
      ) : (
        <div>
          <Confetti className="w-full h-[100vh]"/>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Order Successful !
          </h2>
          <p className="text-xl">Your order has been successfully placed.</p>
        </div>
      )}
    </div>
  );
};
export default Success;
