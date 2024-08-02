import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-6 py-3 mb-10">
      <div>
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">Flavoro Foods</h1>
      </div>
      <div>
        <input
        onChange={(e) => dispatch(setSearch(e.target.value))}
          type="search"
          name="search"
          placeholder="Search..."
          autoComplete="off"
          className="p-3 border border-gray-400 text-md rounded-lg outline-none w-64 lg:w-[25vw]"
        />
      </div>
    </nav>
  );
};
export default Navbar;
