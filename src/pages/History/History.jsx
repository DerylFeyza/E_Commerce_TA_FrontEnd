import React from "react";
import "./History.css";

const History = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css"
      />
      <div className="flex flex-wrap -mx-3 mb-5">
        <div className="w-full max-w-full px-3 mb-6 mx-auto">
          <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
            <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
              {/* card header */}
              <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                  <span className="mr-3 font-semibold text-4xl text-black">
                    Histori
                  </span>
                  <span className="mt-8 font-medium text-secondary-black text-lg/normal">
                    <a
                      href="javascript:void(0)"
                      className="inline-block mx-2 text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"
                    >
                      Semua
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="inline-block mx-2 text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"
                    >
                      Berhasil
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="inline-block mx-2 text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"
                    >
                      Gagal
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="inline-block mx-2 text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"
                    >
                      Terbaru
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="inline-block mx-2 text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"
                    >
                      Terlama
                    </a>
                  </span>
                </h3>
              </div>
              {/* end card header */}
              {/* card body */}
              <div className="flex-auto block py-8 pt-6 px-9">
                <div className="overflow-x-auto">
                  <table className="w-full my-0 align-middle text-dark border-neutral-200">
                    <thead className="align-bottom">
                      <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                        <th className="pb-3 pr-10 text-end min-w-[175px] text-black"></th>
                        <th className="pb-3 text-end min-w-[100px] text-black">Harga</th>
                        <th className="pb-3 pr-20 text-end min-w-[175px] text-black">Status</th>
                        <th className="pb-3 pr-12 text-end min-w-[100px] text-black">Tanggal</th>
                        <th className="pb-3 text-end min-w-[50px] text-black"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Table rows */}
                      <tr className="border-b border-dashed last:border-b-0">
                        <td className="p-3 pl-0">
                          <div className="flex items-center">
                            <div className="relative inline-block shrink-0 rounded-2xl me-3">
                              <img src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg" className="w-[155px] h-[155px] inline-block shrink-0 rounded-2xl" alt="" />
                            </div>
                            <div className="flex flex-col justify-start">
                              <a href="javascript:void(0)" className="mb-1 transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary">Social Media API</a>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 pr-0 text-end">
                          <span className="font-semibold text-light-inverse text-md/normal">Rp</span>
                        </td>
                        <td className="p-7 pr-12 text-end">
                          <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">Berhasil</span>
                        </td>
                        <td className="pr-5 text-end">
                          <span className="text-light-inverse text-md/normal">16 Mar 2024</span>
                        </td>
                        <td className="p-3 pr-0 text-end">
                          <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                            <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                              </svg>
                            </span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
