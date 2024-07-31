import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCart";

const Services = () => {
  const [services, setServices] = useState(null);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="text-center mt-14">
      <p className="text-2xl text-red-500 font-bold">Service</p>
      <h2 className="text-4xl font-bold">Our Service Area</h2>
      <p className="text-xl font-semibold">
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br /> words which don't look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-3 gap-6 my-8">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
