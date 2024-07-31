import { Link } from "react-router-dom";
import login from '../../src/assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email,password)
    .then(result=>{
        console.log(result.user)
    })
    .catch(error=>{
        console.log(error.message)
    })

    
  };

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2 mr-16">
          <img src={login} alt="login" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
          <h1 className="text-3xl font-bold text text-center">Sign UP</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-red-500 text-xl font-bold text-white">
                Sign Up
              </button>
            </div>
            <p className="font-semibold text-center my-2">
              Already Have an account? <Link className="text-red-500 font-bold underline ml-2" to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
