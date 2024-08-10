import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="text-4xl text-red-700 flex flex-col items-center justify-center mt-20">
        <div>Error : Page not found...</div>
        <Link to="/">
          <button className="text-lg bg-green-500 text-white font-semibold mt-10 px-5 py-2 rounded-full hover:bg-green-600">
            Go to Home Page
          </button>
        </Link>
      </div>
    </>
  );
};
export default Error;
