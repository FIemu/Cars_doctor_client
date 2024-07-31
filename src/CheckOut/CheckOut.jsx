import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { img,title,price,service_id } = service || {};

  const handleCheckOut = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const date = e.target.date.value;
    const number = e.target.number.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const checkOutInfo = {
      name,
      img,
      title,
      service_id,
      price,
      date,
      number,
      email,
      message,
    };
    console.log(checkOutInfo);

    fetch("http://localhost:1101/checkOuts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(checkOutInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
            <span className="alert alert-success">Check out has been successful</span>
        }
      });
  };

  return (
    <div>
      <div className="w-full h-96 relative">
        <img
          className="w-full h-full border rounded-lg"
          src={img}
          alt="banner"
        />
        <h1
          className="absolute text-white text-4xl font-bold h-full w-full top-0 left-0 flex items-center pl-12
        bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]
         border rounded-lg"
        >
          Check Out
        </h1>
      </div>
      <div>
        <form onSubmit={handleCheckOut} className="card-body">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="form-control">
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="date"
                placeholder="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="tel"
                name="number"
                placeholder="Your number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <textarea
              placeholder="Your message"
              name="message"
              className="textarea textarea-bordered textarea-lg w-full "
              rows="4"
              cols="80"
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-block bg-red-500 text-xl text-white font-bold"
            >
              Order Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
