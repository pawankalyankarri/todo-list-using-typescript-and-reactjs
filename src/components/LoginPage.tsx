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
    <div className="flex items-center justify-center h-screen bg-gray-300 ">
      {/* <form action="" onSubmit={handleSubmit} className="bg-emerald-100 h-50 rounded shadow-lg box-border  ring-3 ring-blue-500 flex items-center justify-center flex-col p-10 ">
                <label htmlFor="" className="font-serif p-1">Enter User Name</label><input type="text" ref={unameRef} className="text-xl p-1 outline-1 rounded  " />
                <label htmlFor="" className="font-serif p-1">Enter Password</label><input type="text" ref={pswRef} className="text-xl p-1 outline-1 rounded " />
                <div className="p-2">
                    <input type="submit" value='login' className=" p-1 outline-2 outline-green-700 px-3 bg-blue-600 font-mono text-xl font-bold rounded hover:bg-blue-400"  />
                </div>
            </form> */}
      <div className="w-[35vw] h-[90vh] border-1 p-3 rounded-3xl shadow-xl bg-white leading-relaxed">
        <div className=" flex justify-center items-center">
          <img src={signup} className="w-50" alt="" />
        </div>
        <div className="flex justify-center items-center flex-col">
          <h3>Sign in</h3>
          <p className="text-xs">Enter valid user name & password to continue</p>
        </div>
        <div className="">
          <form action="" className="" onSubmit={handleSubmit}>
            <div className="flex flex-col w-auto">
              <div className="outline-2 outline-gray-500 m-auto p-1 my-2 rounded shadow-lg">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                <input type="text" placeholder="username" className="outline-none" />
              </div>
              <div className="outline-2 outline-gray-500 m-auto p-1 my-2 rounded shadow-lg">
                <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                <input type="text" placeholder="password" className="outline-none placeholder:font-mono" />
              </div>
            </div>
            <div className="flex justify-end">
              <span className="text-xs mr-3">Forget Password</span>
            </div>
            <div className="flex items-center justify-center ">
              <input type="submit" value="Login" className="bg-blue-500 w-full rounded-xl p-2 "  />
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center">
            <hr />
          <span>or continue with</span>
          <hr />
        </div>
        <div className="flex justify-evenly">
          <button className="bg-"><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Google</button>
          <button> <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>facebook</button>
        </div>
        <div className="flex justify-center ">
          <span>
            Haven't any account? <a href="">Sign up</a>
          </span>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
