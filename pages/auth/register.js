import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "data-store/authSlice";
import { useRouter } from "next/router";
// layout for page

import Auth from "layouts/Auth.js";
import Link from "next/link";

export default function Register() {

  const [fullName,setFullName] = useState("");
  const [email,setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [aadharno,setAadharnno] = useState("");
  const [password,setPassword] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const registerHandler = () => {
    console.log(fullName,email,phoneno,aadharno,password);
    dispatch(signUpUser({fullName,email,phoneno,aadharno,password}));
    router.push('/auth/login');
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">

              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-xl text-center mb-4 mt-3 font-bold">
                  <h2>Complete the KYC Process</h2>
                </div>
                <form>

                  <div className="relative w-full mb-3 mt-4">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Full Name as per Aadhaar
                    </label>
                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter your Name" />
                  </div>

                  <div className="relative w-full mb-3 mt-4">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Email Address
                    </label>
                    <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email Address" />
                  </div>

                  <div className="relative w-full mb-3 mt-4">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Phone Number
                    </label>
                    <input type="text" maxLength="10" className="border-0 px-3 py-3 placeholder-blueGray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={phoneno} onChange={(e) => setPhoneno(e.target.value)} placeholder="Enter your Phone Number" />
                  </div>

                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Aadhaar Number
                    </label>
                    <input type="text" maxLength="12" className="border-0 px-3 py-3 placeholder-blueGray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={aadharno} onChange={(e) => setAadharnno(e.target.value)} placeholder="Enter Aadhaar Number" />
                  </div>

                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Password
                    </label>
                    <input type="password" maxLength="8" className="border-0 px-3 py-3 placeholder-blueGray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
                  </div>

                  <div className="text-center mt-6">
                    <button  onClick={registerHandler} className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="button">
                      Create Account
                    </button>
                  </div>

                  <div className="text-center mt-4">
                    <Link href="/auth/register">
                      <label className="block text-blueGray-600 text-sm" htmlFor="grid-password">
                        Already have an account? Login
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

Register.layout = Auth;
