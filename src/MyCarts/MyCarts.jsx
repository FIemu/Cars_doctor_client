import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const MyCarts = () => {
  const { user } = useContext(AuthContext);
  const [carts, setCarts] = useState([]);

  const url = `http://localhost:1101/checkOuts?email=${user?.email}`;
  useEffect(() => {
    axios(url,{withCredentials:true})
    .then(res=>setCarts(res.data))
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to Delete?",
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Delete!", "", "success");
        fetch(`http://localhost:1101/checkOuts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              const remaining = carts.filter((cart) => cart._id !== id);
              setCarts(remaining);
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Cancel", "", "info");
      }
    });
  };

  const handleConfirm = (id) => {
    Swal.fire({
      title: "Do you want to Delete?",
      showDenyButton: true,
      confirmButtonText: "Sure?",
      denyButtonText: `cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Confirmed!!", "", "success");
        fetch(`http://localhost:1101/checkOuts/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "confirmed" }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              const remaining = carts.filter((cart) => cart._id !== id);
              const updatedCart = carts.find((cart) => cart._id === id);
              updatedCart.status = "confirmed";
              setCarts([updatedCart, ...remaining]);
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Cancel", "", "info");
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Service</th>
            <th>Price</th>
            <th>Check Out Date</th>
          </tr>
        </thead>
        <tbody>
          {carts?.map((cart) => (
            <>
              <tr key={cart._id}>
                <th>
                  <button
                    onClick={() => handleDelete(cart._id)}
                    className="btn btn-circle btn-outline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </th>
                <td>
                  <div className="flex flex-row items-center gap-3">
                    <div className="avatar">
                      <div className="mask w-32 rounded-lg">
                        <img
                          src={cart.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{cart.title}</div>
                      <div className="text-sm opacity-50">
                        Ordered by {cart.name}
                      </div>
                      <div className="text-sm opacity-50">{cart.email}</div>
                      <div className="text-sm opacity-50">{cart.number}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-lg">
                    ${cart.price}
                  </span>
                </td>
                <td>{cart.date}</td>
                <th>
                  {cart.status === "confirmed" ? (
                    <p className=" w-1/2 bg-green-500 text-white p-3 rounded shadow-lg">Confirmed</p>
                  ) : (
                    <button
                      onClick={() => handleConfirm(cart._id)}
                      className="btn btn-ghost bg-red-500 text-white px-3 "
                    >
                      Please Confirm
                    </button>
                  )}
                </th>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCarts;
