import { Link, useOutletContext, useNavigate } from "react-router-dom";

import { GrLinkPrevious } from "react-icons/gr";
import { useEffect } from "react";

const EventDescription = () => {
  const [pageNum, setPageNum, eventDetails, setEventDetails] =
    useOutletContext();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
    console.log(eventDetails);
  };

  return (
    <div className="w-full flex flex-col mx-auto items-center  py-8">
      <div className="w-full flex items-center justify-center px-2">
        <Link to="/host" className="w-1/12">
          <GrLinkPrevious
            size={40}
            className="rounded-full p-2 hover:cursor-pointer flex hover:bg-[#163d45] transition-all delay-50s"
            onClick={() => setPageNum((prev) => prev - 1)}
          />
        </Link>
        <div className="w-5/6 flex justify-center text-3xl font-normal">
          Enter event description
        </div>
        <div className="w-1/12"></div>
      </div>
      <div className="flex flex-col gap-12 mt-12">
        <div className="flex flex-col gap-2 border-b-2 border-gray-950">
          <textarea
            type=""
            name="eventDescription"
            id="eventNameField"
            placeholder="Enter event description"
            className="px-2 py-2 w-80 appearance-none bg-transparent outline-none focus:bg-none placeholder-white"
            onChange={(e) => handleChange(e)}
            value={eventDetails.eventDescription}
          />
        </div>
        <Link
          to="/host/venue"
          className="flex self-center justify-center bg-[#005869] hover:bg-[#163d45] text-white w-56 rounded-lg py-4 text-lg  transition-all duration-150 hover:shadow-2xl"
          onClick={() => setPageNum((prev) => prev + 1)}
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default EventDescription;
