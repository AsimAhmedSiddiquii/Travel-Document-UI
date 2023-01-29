import React, { useDebugValue, useState } from "react";

export default function HeaderStats() {

  const [ins,setIns] = useState(null);
  const [rc,setrc] = useState(null);
  const [puc,setPuc] = useState(null);


  async function sendFileInsurance() {
    const formData = new FormData()
    formData.append("image",ins)
    console.log(rc)
    let response = await fetch("http://localhost:5000/upload/uploaddl",{
            method : "POST",
            body : formData
        });
    const jsonData = await response.json()
    console.log(jsonData)
  }

  async function sendFileRc() {
    const formData = new FormData()
    formData.append("image",rc)
    console.log(rc)
    let response = await fetch("http://localhost:5000/upload/uploadrc",{
            method : "POST",
            body : formData
        });
    const jsonData = await response.json()
    console.log(jsonData)
  }

  async function sendFilePUC() {
    const formData = new FormData()
    formData.append("image",puc)
    console.log(rc)
    let response = await fetch("http://localhost:5000/upload/uploadrc",{
            method : "POST",
            body : formData
        });
    const jsonData = await response.json()
    console.log(jsonData)
  }



  return (
    <>
      {/* Header */}
      

      <div className="relative mt-32 flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">  
       <div className="px-4 mt-34 md:px-10 mx-auto w-full">
          <div>

          <div className="w-full lg:w-12/12 px-4 text-center mt-2">
            <label className="block text-lg mb-3">Scan QR Code to verify documents</label>
          </div>
          <div className="w-full lg:w-12/12 px-4 text-center mt-2 mb-6">
            <img src="/img/sample.png" className="text-center" width={120} />
          </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-800 border-0">  
       <div className="px-4 mt-34 md:px-10 mx-auto w-full">
          <div>

          <div className="w-full lg:w-12/12 px-4 text-center mt-2">
            <label className="block text-white text-xl mb-3">Travel Documents</label>
          </div>

            <div className="flex flex-wrap">
              
              <div className="w-full lg:w-6/12 mb-2 xl:w-6/12 px-4">
                <div className="bg-white border-radius p-2">
                  <label className="block text-center text-blueGray-600 text-md font-bold mb-2" htmlFor="grid-password">
                        Driving License
                  </label>
                  <input type="file" onChange={(e) => setIns(e.target.files[0])}/>
                  <div className="w-full lg:w-12/12 px-4">
                  <button className="bg-blueGray-700 active:bg-blueGray-600 mb-4 mt-2 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button" onClick={sendFileInsurance}>
                    Upload Insurance
                  </button>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-6/12 mb-2 xl:w-6/12 px-4">
                <div className="bg-white border-radius p-2">
                  <label className="block text-center text-blueGray-600 text-md font-bold mb-2" htmlFor="grid-password">
                        Registration Certificate
                  </label>
                  <input type="file" onChange={(e) => setrc(e.target.files[0])}/>
                  <div className="w-full lg:w-12/12 px-4">
                  <button className="bg-blueGray-700 active:bg-blueGray-600 mb-4 mt-2 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button" onClick={sendFileRc}>
                    Upload Registration Certificate
                  </button>
            </div>
                </div>
              </div>

              <div className="w-full lg:w-6/12 mb-2 xl:w-6/12 px-4">
                <div className="bg-white border-radius p-2">
                  <label className="block text-center text-blueGray-600 text-md font-bold mb-2" htmlFor="grid-password">
                        PUCC
                  </label>
                  <input type="file" onChange={(e) => setPuc(e.target.files[0])}/>
                  <div className="w-full lg:w-12/12 px-4">
                  <button className="bg-blueGray-700 active:bg-blueGray-600 mb-4 mt-2 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button" onClick={sendFilePUC}>
                    Upload PUC
                  </button>
            </div>
                </div>
              </div>

              <div className="w-full lg:w-6/12 mb-2 xl:w-6/12 px-4">
                <div className="bg-white border-radius p-2">
                  <label className="block text-center text-blueGray-600 text-md font-bold mb-2" htmlFor="grid-password">
                        Insurance
                  </label>
                  <input type="file"/>
                </div>
              </div>

            </div>
          </div>

          <div className="w-full lg:w-12/12 px-4">
                <button className="bg-blueGray-700 active:bg-blueGray-600 mb-4 mt-2 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                  Generate QR
                </button>
          </div>
        </div>
      </div>
    </>
  );
}
