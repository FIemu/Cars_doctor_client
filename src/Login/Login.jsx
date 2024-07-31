import { Link } from 'react-router-dom';
import login from '../../src/assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';

const Login = () => {
    const {loginWithGoogle,userLogin} = useContext(AuthContext);

    const googleLogin = () =>{
        loginWithGoogle()
        .then(result=>{
            console.log(result.user)
        })
        .then(error=>{
            console.log(error.message)
        })
    }
   
    const handleSubmit = e =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        userLogin(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2 mr-16">
         <img src={login} alt="login" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
        <h1 className="text-3xl font-bold text-center">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name='email'
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
                name='password'
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
              <button type='submit' className="btn bg-red-500 text-xl font-bold text-white">Sign in</button>
            </div>
            <p className='text-center text-sm font-bold my-2'>Or login with</p>
            <div 
            onClick={googleLogin}
            className=' bg-slate-200 border rounded p-2 w-12 mx-auto hover:cursor-pointer hover:shadow-lg'
            >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="#f9a006" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
            </div>
            <p className="font-semibold text-center my-2">New to cars doctor? 
                <Link className='text-red-500 font-bold underline ml-2' to='/register'>Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div> 
  );
};

export default Login;
