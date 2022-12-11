import React from "react";
import Link from "next/link";

// components

import Navbar from "components/Navbars/AuthNavbar.js";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2021/12/07/f388cea5b7c5fc3d6df884bde188de93.jpg?quality=80&zoom=1&ssl=1')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-2/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h3 className="text-white font-semibold text-4xl">
                    Travel Document Management
                  </h3>
                  <p className="mt-2 text-lg text-blueGray-200">
                    Blockchain solution to ease the Document Verification process using QRCode 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16" style={{ transform: "translateZ(0)" }}>
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              
              <div className="lg:pt-6 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-2 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-qrcode"></i>
                    </div>
                    <h6 className="text-xl font-semibold">QR Code</h6>
                    <p className="mt-2 mb-1 text-sm text-blueGray-500">
                    QR-Codes are 90 times cheaper than RFID solutions and have negligible maintenance cost.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-2 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-th"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Blockchain</h6>
                    <p className="mt-2 mb-1 text-sm text-blueGray-500">
                    Use of blockchain eradicates the security concerns which were there in traditional systems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-2 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-server"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Decentralization</h6>
                    <p className="mt-2 mb-1 text-sm text-blueGray-500">
                      All the document are stored on a decentralized peer to peer network, allowing users to access them at any time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-12">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Our Team</h2>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    src="https://avatars.githubusercontent.com/u/53305380?v=4"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Jasir Khan</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Team Leader
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQHNA5ITzGLIUQ/profile-displayphoto-shrink_800_800/0/1633376065480?e=1674691200&v=beta&t=TeMUEnkpqL6JuytLAISD8ThwFerQFF6gP1KlT6B5mNw"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Rayyan Mulla</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Developer
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    src="https://avatars.githubusercontent.com/u/82796847?v=4"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Asim Siddiqui</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Developer
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    src="https://media-exp1.licdn.com/dms/image/D4D03AQFvG5Ohoagftg/profile-displayphoto-shrink_800_800/0/1667672509334?e=1674691200&v=beta&t=rsxIvdYcPmgR3JKtBYlq2nsFRQ6q36cBbrQ7eOWkiIU"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Ataur Rehman</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 pt-12 pb-16">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Our Motive
                </h2>
                <ul>

                  <li className="text-lg leading-relaxed mt-6 mb-2 text-blueGray-400">
                    Ease the process of Document Verification and checking for Cops!
                  </li>

                  <li className="text-lg leading-relaxed mt-2 mb-2 text-blueGray-400">
                    Create a system that actually increase the overall throughput of the vehicle document checking process.
                  </li>

                  <li className="text-lg leading-relaxed mt-2 mb-2 text-blueGray-400">
                    Help vehicle owners to manage their documents and produce it on spot with the help of QR-Code with little or no ambiguity.
                  </li>

                  <li className="text-lg leading-relaxed mt-2 mb-2 text-blueGray-400">
                    Create a system that allows user to generate a QR-Code of documents uploaded which can be glued on the front mirror of the Vehicle.
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
