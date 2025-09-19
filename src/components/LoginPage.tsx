import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import signup from "../assets/signin.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

const LoginPage = () => {
  let unameRef = useRef<HTMLInputElement>(null);
  let pswRef = useRef<HTMLInputElement>(null);
  let navigate = useNavigate();
  function handleSubmit() {
    if (unameRef.current && pswRef.current) {
      if (
        unameRef.current.value.trim() !== "" &&
        pswRef.current.value.trim() !== ""
      ) {
        navigate("/home");
      } else {
        window.alert("Please Enter userName and password");
      }
    }
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-300  ">
      {/* <form action="" onSubmit={handleSubmit} className="bg-emerald-100 h-50 rounded shadow-lg box-border  ring-3 ring-blue-500 flex items-center justify-center flex-col p-10 ">
                <label htmlFor="" className="font-serif p-1">Enter User Name</label><input type="text" ref={unameRef} className="text-xl p-1 outline-1 rounded  " />
                <label htmlFor="" className="font-serif p-1">Enter Password</label><input type="text" ref={pswRef} className="text-xl p-1 outline-1 rounded " />
                <div className="p-2">
                    <input type="submit" value='login' className=" p-1 outline-2 outline-green-700 px-3 bg-blue-600 font-mono text-xl font-bold rounded hover:bg-blue-400"  />
                </div>
            </form> */}
      <div className="w-[70vw] h-[90vh]  sm:p-2 rounded-3xl shadow-xl bg-white leading-normal sm:leading-relaxed  sm:w-[40vw] sm:h-[95vh] lg:w-[40%] lg:h-[75%]  md:w-[40vw] md:h-[90%] xl:w-[35vw] xl:h-[85%] ">
        <div className="w-full flex flex-col gap-2 px-2">
          <div className=" flex justify-center items-center">
          <img src={signup} className="w-[50%] sm:[30%]" alt="" />
        </div>
        <div className="flex justify-center items-center flex-col">
          <h3 className="font-bold text-xl">Sign in</h3>
          <p className="text-xs">Enter valid user name & password to continue</p>
        </div>
        <div className="w-full sm:w-[90%]  sm:m-auto p-0.5 ">
          <form action="" className="flex justify-center flex-col w-full h-fit gap-1  " onSubmit={handleSubmit}> 
            <div className=" w-full flex flex-col gap-1.5">
              <div className="relative w-full">
                <FontAwesomeIcon icon={faUser} className="absolute top-2.5"></FontAwesomeIcon>
                <input type="text" placeholder="username" ref={unameRef} className="outline-2 outline-gray-500 p-0.5 pl-5 w-full rounded-lg" />
              </div>
              <div className="relative">
                <FontAwesomeIcon icon={faKey} className="absolute top-2.5"></FontAwesomeIcon>
                <input type="text" placeholder="password" ref={pswRef} className="outline-2 outline-gray-500 p-0.5 pl-5 w-full rounded-lg placeholder:font-mono" />
              </div>
            </div>
            <div className="flex justify-end items-end  ">
              <span className="text-xs"><NavLink to='/forget'  className="text-xs text-blue-600 font-bold pr-1">Forget Password</NavLink></span>
            </div>
            <div className="flex items-center justify-center w-full shadow-xl rounded-xl">
              <input type="submit" value="Login" className="bg-blue-500 text-white cursor-pointer font-bold rounded-xl p-1 w-full"  />
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center">
            <hr />
          <span>or continue with</span>
          <hr />
        </div>
        <div className="flex justify-around gap-0.5">
          <button className="bg-gray-200 flex  rounded shadow-2xl p-1 px-2 sm:px-1.5"><FontAwesomeIcon  icon={faGoogle} className="text-blue-600 m-auto"></FontAwesomeIcon> Google</button>
          <button className="bg-gray-200 flex  rounded shadow-2xl p-1 px-2 sm:px-1.5"> <FontAwesomeIcon icon={faFacebook} className="text-blue-600 m-auto" ></FontAwesomeIcon>facebook</button>
        </div>
        <div className="flex justify-center text-xs m-2">
          <span>
            Haven't any account? <NavLink to='/signup' className="text-blue-600 font-bold">Sign up</NavLink>
          </span>
        </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
