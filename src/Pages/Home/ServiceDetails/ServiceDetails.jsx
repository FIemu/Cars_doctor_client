import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const selectedCart = useLoaderData();
  const { description, img, price, service_id, title, _id, facility } =
    selectedCart || {};

  return (
    <div>
      <div className="relative rounded-lg">
        <img className="w-full h-80 rounded-lg" src={img} alt="" />
        <div
          className=" rounded-lg absolute w-full h-full top-0 left-0 flex items-center pl-32
        bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]
        "
        >
          <span className="text-white text-3xl font-bold">Service Details</span>
        </div>
        <p className="absolute">Home/service Details</p>
      </div>
    </div>
  );
};

export default ServiceDetails;
