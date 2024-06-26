import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "../../Components/api/axios";
import deliphoto1 from "../../asset/J&T.jpg";
import deliphoto2 from "../../asset/VET.jpg";
import photo from "../../asset/Candle.jpg";
import deliphoto3 from "../../asset/kerry.jpg";
export const Cart = () => {
  const [products, setProductData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = Cookies.get("token");
      console.log("Fetching data...");
      const response = await axios.get(`/carts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Response:", response.data);
      setProductData(response.data.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
      setProductData([]);
    }
  };

  return (
    <>
      <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div className="flex justify-start item-start space-y-2 flex-col">
          <h1 className="text-3xl lg:text-3xl font-semibold leading-7 lg:leading-9 text-gray-800">
            Your Shopping Bag
          </h1>
        </div>
        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex flex-col justify-start items-start  bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                Customer’s Cart
              </p>
              {products.map((cart) => (
                <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                <div className="pb-4 md:pb-8 w-full md:w-40">
                  <img
                    className="w-full hidden md:block"
                    src={'https://camthrive.com/cdn/shop/products/JayaOrganics-Kraoboil-11_2527x.jpg?v=1669315724'}
                    alt="dress"
                  />
                  <img className="w-full md:hidden" src={photo} alt="dress" />
                </div>
                <div className=" md:flex-row flex-col flex justify-between items-start w-full space-y-4 md:space-y-0">
                  <div className="w-full flex flex-col justify-start items-start space-y-10">
                    <h3 className="text-xl lg:flex lg:justify-center xl:text-2xl font-semibold leading-6 text-gray-800">
                      {cart.product.title}
                    </h3>
                  </div>
                  <div className="flex justify-between space-x-8 items-start w-full">
                    {/* <p className="text-base xl:text-lg leading-6">
                      ${cart.product.price}
                    </p> */}
                    <p className="text-base xl:text-lg leading-6 text-gray-800">
                      01
                    </p>
                    <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                    ${cart.product.price}
                    </p>
                  </div>
                </div>
              </div>
              ))}
              {/* <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                <div className="pb-4 md:pb-8 w-full md:w-40">
                  <img
                    className="w-full hidden md:block"
                    src={photo}
                    alt="dress"
                  />
                  <img className="w-full md:hidden" src={photo} alt="dress" />
                </div>
                <div className=" md:flex-row flex-col flex justify-between items-start w-full space-y-4 md:space-y-0">
                  <div className="w-full flex flex-col justify-start items-start space-y-10">
                    <h3 className="text-xl lg:flex lg:justify-center xl:text-2xl font-semibold leading-6 text-gray-800">
                      Kraaob Candle
                    </h3>
                  </div>
                  <div className="flex justify-between space-x-8 items-start w-full">
                    <p className="text-base xl:text-lg leading-6">
                      $36.00{" "}
                      <span className="text-red-300 line-through"> $45.00</span>
                    </p>
                    <p className="text-base xl:text-lg leading-6 text-gray-800">
                      01
                    </p>
                    <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                      $36.00
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-0 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
                <div className="w-full md:w-40">
                  <img
                    className="w-full hidden md:block"
                    src={photo}
                    alt="dress"
                  />
                  <img className="w-full md:hidden" src={photo} alt="dress" />
                </div>
                <div className="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-full flex flex-col justify-start items-start space-y-8">
                    <h3 className="text-xl lg:flex lg:justify-center xl:text-2xl font-semibold leading-6 text-gray-800">
                      Kraaob Candle
                    </h3>
                  </div>
                  <div className="flex justify-between space-x-8 items-start w-full">
                    <p className="text-base xl:text-lg leading-6">
                      $20.00{" "}
                      <span className="text-red-300 line-through"> $30.00</span>
                    </p>
                    <p className="text-base xl:text-lg leading-6 text-gray-800">
                      01
                    </p>
                    <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                      $20.00
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
              <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50  space-y-6">
                <h3 className="text-xl font-semibold leading-5 text-gray-800">
                  Summary
                </h3>
                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                  <div className="flex justify-between w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Subtotal
                    </p>
                    <p className="text-base  leading-4 text-gray-600">$56.00</p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Discount{" "}
                      <span className="bg-gray-200 p-1 text-xs font-medium  leading-3 text-gray-800">
                        STUDENT
                      </span>
                    </p>
                    <p className="text-base  leading-4 text-gray-600">
                      -$00.00 (0%)
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Shipping
                    </p>
                    <p className="text-base  leading-4 text-gray-600">$8.00</p>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base font-semibold leading-4 text-gray-800">
                    Total
                  </p>
                  <p className="text-base  font-semibold leading-4 text-gray-600">
                    $64.00
                  </p>
                </div>
              </div>
              <div className="flex flex-col  px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50  space-y-6">
                <h3 className="text-xl font-semibold leading-5 text-gray-800">
                  Shipping
                </h3>
                <div className="flex justify-between items-start w-full pt-10">
                  <div className="flex justify-center items-center space-x-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="radio1"
                        id="radioButton1"
                        className="h-5 w-5"
                      />
                      <img src={deliphoto1} className="h-10 w-15 pl-2" alt="" />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="radio1"
                        id="radioButton2"
                        className="h-5 w-5"
                      />
                      <img src={deliphoto2} className="h-10 w-15 pl-2" alt="" />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="radio1"
                        id="radioButton2"
                        className="h-5 w-5"
                      />
                      <img src={deliphoto3} className="h-10 w-15 pl-2" alt="" />
                    </div>
                  </div>
                </div>
                {/* <div className="flex flex-col justify-start items-center">
                      <p className="text-lg leading-6 font-semibold text-gray-800">
                        DPD Delivery
                        <br />
                        <span className="font-normal">Delivery with 24 Hours</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold leading-6 text-gray-800">
                    $8.00
                  </p>
                </div>
                <div className="w-full flex justify-center items-center">
                  <button className="hover:bg-black   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">
                    View Carrier Details
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
            <h3 className="text-xl font-semibold leading-5 text-gray-800">
              Customer
            </h3>
            <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
              <div className="flex flex-col justify-start items-start flex-shrink-0">
                <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                  <img
                    className="w-15 h-10"
                    src="https://i.mydramalist.com/4e1Aow_5_c.jpg"
                    alt="avatar"
                  />
                  <div className="flex justify-start items-start flex-col space-y-2">
                    <p className="text-base font-semibold leading-4 text-left text-gray-800">
                      Duan Jia Xu
                    </p>
                    <p className="text-sm  leading-5 text-gray-600">
                      10 Previous Orders
                    </p>
                  </div>
                </div>

                <div className="flex justify-center text-gray-800 md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 hidden"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>

                  <p className="cursor-pointer text-sm leading-5 ">
                    012 345 678
                  </p>
                </div>
              </div>
              <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                  <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                      Shipping Address
                    </p>
                    <p className="w-48 lg:w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                      Street 616, Boeugkok Phnom Penh
                    </p>
                  </div>
                  <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                      Billing Address
                    </p>
                    <p className="w-48 lg:w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                      Street 606, Boeungkengkorng Phnom Penh
                    </p>
                  </div>
                </div>
                <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                  <button className="mt-6 md:mt-0  py-5 hover:bg-pink-200 border border-pink-600 font-medium w-96 2xl:w-full text-base leading-4 text-gray-800">
                    Edit Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
