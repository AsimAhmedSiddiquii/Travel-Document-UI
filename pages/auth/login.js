import React, { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { signInUser } from "data-store/authSlice";
import { useRouter } from "next/router";
// layout for page

import Auth from "layouts/Auth.js";
import Link from "next/link";

export default function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const[isAuthenticated,setIsAuthenticated] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    //console.log(isAuthenticated);
    const authStatus = localStorage.getItem("userData");
    console.log(authStatus);
    if(authStatus !== null) {
      router.push('/admin/dashboard');
    }
  },[]);

  const loginHandler = () => {
    console.log(email,password);
    dispatch(signInUser({email,password}));
    console.log(isAuthenticated);
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-xl text-center mb-4 mt-3 font-bold">
                  <h2>Login into the system</h2>
                </div>
                <form>

                  <div className="relative w-full mb-4 mt-4">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Email Address
                    </label>
                    <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email Address"/>
                  </div>

                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Password
                    </label>
                    <input type="password" maxLength="8" className="border-0 px-3 py-3 placeholder-blueGray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"/>
                  </div>

                  <div className="text-center mt-6">
                    <button onClick={loginHandler} className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="button">
                      Login
                    </button>
                  </div>

                  <div className="text-center mt-4">
                    <Link href="/auth/register">
                      <label className="block text-blueGray-600 text-sm" htmlFor="grid-password">
                        Don't have an account? Register
                      </label>
                    </Link>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Login.layout = Auth;
