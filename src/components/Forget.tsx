import { NavLink } from "react-router-dom";
import forget from "../assets/forget.webp";
const Forget = () => {
  return (
    <div className="w-screen h-screen flex justify-center bg-gray-300">
      <div className=" flex flex-col justify-center items-center p-3 lg:w-full lg:h-full ">
        <div className=" shadow-lg rounded-xl w-[70%] h-[80%]  lg:h-[60%] lg:w-[45%] xl:h-[80%]  bg-white p-2 flex justify-evenly gap-1 flex-col   ">
          <div className="">
            <img src={forget} alt="" className="w-[35%] m-auto" />
          </div>
          <div className="w-full text-center ">
            <h4 className="font-bold text-sm">Forget Password</h4>
            <p className="text-xs ">
              don't worry it happens. Please enter the address associate with
              your account
            </p>
          </div>
          <div className="w-full xl:w-[60%] xl:m-auto">
            <form action="" className="m-auto flex gap-1 flex-col ">
              <div>
                <input type="text" placeholder="Email address" className="p-2 w-full rounded-lg outline-2 outline-gray-100" />
              </div>
              <input type="submit" value="send OTP" className="font-bold w-full rounded-lg p-2 bg-blue-600 text-white" />
            </form>
          </div>
          <div className="w-full text-center leading-1">
            <span className="text-xs">
              You remember your password? <NavLink to="/" className='text-blue-600 font-bold'>Sign in</NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forget;
