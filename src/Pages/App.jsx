import { Outlet } from "react-router-dom";

import NavBar from "../components/navigation/NavBar";
import Footer from "../components/navigation/Footer";

import { CiStar } from "react-icons/ci";
import { IoHappyOutline } from "react-icons/io5";

function App() {
  return (
    <div className="flex flex-col bg-[#CAF0F8]">
      <NavBar />
      <div className="w-full min-h-[477px] flex lg:px-24 justify-center">
        {/* <CiStar className="absolute rotate-45 left-0" size={250} />
        <IoHappyOutline
          className="absolute rotate-45 left-[1230px] top-52"
          size={250}
        /> */}
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default App;
