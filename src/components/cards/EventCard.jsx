import { Link } from "react-router-dom";

const EventCard = (props) => {
  const date = new Date(props.dateTime);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return (
    <div className=" w-full h-48 flex flex-col p-4 bg-[#00B4D8] rounded-[32px] text-white  lg:w-96">
      <div className=" w-full flex text-2xl">{props.name}</div>
      <div className=" flex w-full mt-2">
        <div className=" flex flex-col w-1/2">
          <span>{`${day}/${month}/${year}`}</span>
          <span>{`₹${props.price == "" ? "0" : props.price} onwards`}</span>
        </div>
        <div className=" flex w-1/2 justify-end items-end">
          {`${props.city}, ${props.state}`}
        </div>
      </div>
      <Link
        className="flex self-center justify-center bg-[#005869] hover:bg-[#163d45] text-white w-full rounded-lg py-4 text-lg  transition-all duration-150 hover:shadow-2xl mt-4"
        to={`/events/${props.id}`}
      >
        Book Now
      </Link>
    </div>
  );
};

export default EventCard;
