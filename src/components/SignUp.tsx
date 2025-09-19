import { NavLink } from "react-router-dom";
import signup from "../assets/signup.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
const SignUp = () => {
  return (
    <div className="bg-gray-200 w-screen h-screen flex items-center justify-center font-mone">
      <div className="w-[70%] h-[90%] sm:w-[40%] md:w-[40%] md:h-[90%] lg:h-[75%] xl:h-[85%] xl:w-[35%]  bg-white rounded-2xl flex flex-col  items-center p-2 ">
        <div className=" w-[65%] md:w-[70%]">
          <img src={signup} alt="" />
        </div>
        <div className="flex items-center justify-center flex-col w-full">
          <h5 className="font-bold text-lg">Sign Up</h5>
          <span className="text-xs">use Proper information to continue</span>
        </div>
        <div className="flex w-full items-center justify-center ">
          <form action="" className=" sm:w-[80%] p-2 flex justify-around gap-2 flex-col ">
            <div className="flex flex-col gap-1">
              <div className="relative">
                <FontAwesomeIcon className="absolute top-3 text-lg" icon={faUserAlt}></FontAwesomeIcon>
                <input type="text" placeholder="Full Name" className="outline-1 w-full rounded-lg text-sm pl-6 py-1.5 " />
              </div>
              <div className="relative">
                  <FontAwesomeIcon icon={faEnvelope} className="absolute top-3 text-lg"></FontAwesomeIcon>
                  <input type="email" placeholder="Email Id" className="outline-1 w-full rounded-lg text-sm pl-6 py-1.5" />

              </div>
              <div className="relative">
                <FontAwesomeIcon icon={faLock} className="absolute top-3 text-lg"></FontAwesomeIcon>
                  <input type="password" placeholder="Password"  className="outline-1 w-full rounded-lg text-sm pl-6 py-1.5"/>

              </div>
              
            </div>
            <div className="text-center leading-0.5">
              <span className="text-xs ">
                by sign up, you are agree to our{" "}
                <a href="" className="text-blue-600 font-bold">Terms & Conditions</a> and{" "}
                <a href="" className="text-blue-600 font-bold">Privacy Police</a>
              </span>
            </div>
            <div className="m-auto flex justify-center items-center w-full">
              <input
                type="submit"
                value="Create account"
                className="bg-blue-600 p-1.5 px-3 rounded-lg cursor-pointer flex-1 text-white font-bold"
              />
            </div>
          </form>
        </div>
        <div >
          <span className="text-xs">
            Already have an account?. <NavLink to="/" className="text-blue-600 font-bold">Sign in</NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
