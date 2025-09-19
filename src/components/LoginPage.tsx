import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import signup from "../assets/signup.jpeg";
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
      <div className="w-[80vw] h-[80vh]  flex justify-evenly flex-col  border-1 p-1.5 sm:p-2 rounded-3xl shadow-xl bg-white leading-normal sm:leading-relaxed  sm:w-[50vw] lg:w-[40vw] lg:h-[90vh]  md:w-[60vw] md:h-[60%] xl:w-[30vw] ">
        <div className="w-full px-3">
          <div className=" flex justify-center items-center">
          <img src={signup} className="w-50" alt="" />
        </div>
        <div className="flex justify-center items-center flex-col">
          <h3 className="font-bold text-xl">Sign in</h3>
          <p className="text-xs">Enter valid user name & password to continue</p>
        </div>
        <div className="">
          <form action="" className="flex justify-center items-center flex-col" onSubmit={handleSubmit}>
            <div className=" w-[95%] h-fit sm:w-[80%] md:w-[80%]">
              <div className="outline-2 outline-gray-500  my-2 p-2   rounded shadow-lg">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                <input type="text" placeholder="username" ref={unameRef} className="outline-none" />
              </div>
              <div className="outline-2 outline-gray-500  my-2 p-2  rounded shadow-lg">
                <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                <input type="text" placeholder="password" ref={pswRef} className="outline-none placeholder:font-mono" />
              </div>
            </div>
            <div className="flex justify-end w-full p-2 ">
              <span className="text-xs mr-7"><a href="" className="text-sm text-blue-600">Forget Password</a></span>
            </div>
            <div className="flex items-center justify-center w-[95%] h-fit sm:w-[80%] md:w-[80%]  m-auto shadow-xl rounded-xl">
              <input type="submit" value="Login" className="bg-blue-500 text-white font-bold rounded-xl p-2 w-full"  />
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center">
            <hr />
          <span>or continue with</span>
          <hr />
        </div>
        <div className="flex justify-evenly">
          <button className="bg-gray-200 outline-1 rounded shadow-2xl p-2 px-4"><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Google</button>
          <button className="bg-gray-200 outline-1 rounded shadow-2xl p-2 px-4"> <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>facebook</button>
        </div>
        <div className="flex justify-center text-sm m-2">
          <span>
            Haven't any account? <a href="" className="text-blue-600">Sign up</a>
          </span>
        </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
