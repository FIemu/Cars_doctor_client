import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, price, img } = service || {};
  return (
    <Link to={`/checkOut/${_id}`}>
      <div className="card glass  p-4 border">
        <figure>
          <img className="h-full" src={img} alt="Shoes" />
        </figure>
        <div className="card-body text-start p-0">
          <h2 className="card-title">{title}</h2>
          <p className="text-red-500 text-xl font-semibold">Price: {price} $</p>
          <div className="w-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
