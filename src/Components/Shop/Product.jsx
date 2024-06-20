import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "../../Components/api/axios";
import { Link } from "react-router-dom";
// import Filter from "./FilterSearch";
const ProductCard = ({ product }) => {
  // const { image, brand, title, price, oldPrice } = product;

  const [products, setProductData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = Cookies.get("token");
      console.log("Fetching data...");
      const response = await axios.get("/products", {
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

  // const products = [
  //   {
  //     id: 1,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLlQqHvEcDeCTduFjLgTtF6MeHigO_23-pfg&s",
  //     brand: "Glass Light",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
  //     title: "Product Title 1",
  //     status: "SALE",
  //     price: 30,
  //     oldPrice: 45,
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXg76E2FB_2ljkYTTZJtEVUzEcIcNAzj3pNw&s",
  //     brand: "Krama Shoes",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
  //     title: "Product Title 1",
  //     status: "SOLD",
  //     price: 30,
  //     oldPrice: 45,
  //   },
  //   {
  //     id: 3,
  //     image:
  //       "https://camthrive.com/cdn/shop/products/JayaOrganics-Kraoboil-11_2527x.jpg?v=1669315724",
  //     brand: "Kraob Oil Burner",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
  //     title: "Product Title 1",
  //     status: "SOLD",
  //     price: 30,
  //     oldPrice: 45,
  //   },
  //   {
  //     id: 4,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLlQqHvEcDeCTduFjLgTtF6MeHigO_23-pfg&s",
  //     brand: "Glass Light",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
  //     title: "Product Title 1",
  //     status: "SALE",
  //     price: 30,
  //     oldPrice: 45,
  //   },
  //   {
  //     id: 5,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXg76E2FB_2ljkYTTZJtEVUzEcIcNAzj3pNw&s",
  //     brand: "Krama Shoes",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
  //     title: "Product Title 1",
  //     status: "SALE",

  //     price: 30,
  //     oldPrice: 45,
  //   },
  //   {
  //     id: 6,
  //     image:
  //       "https://camthrive.com/cdn/shop/products/JayaOrganics-Kraoboil-11_2527x.jpg?v=1669315724",
  //     brand: "Kraob Oil Burner",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
  //     title: "Product Title 1",
  //     status: "SALE",

  //     price: 30,
  //     oldPrice: 45,
  //   },
  //   {
  //     id: 7,
  //     image:
  //       "https://camthrive.com/cdn/shop/products/JayaOrganics-Kraoboil-11_2527x.jpg?v=1669315724",
  //     brand: "Kraob Oil Burner",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
  //     title: "Product Title 1",
  //     status: "SALE",

  //     price: 30,
  //     oldPrice: 45,
  //   },
  //   {
  //     id: 8,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXg76E2FB_2ljkYTTZJtEVUzEcIcNAzj3pNw&s",
  //     brand: "Krama Shoes",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
  //     title: "Product Title 1",
  //     status: "SALE",

  //     price: 30,
  //     oldPrice: 45,
  //   },
    
  // ];

  return (
    <>
      {/* <div className="pt-10 bg-pink-100 pb-10"> */}
      <div className="w-full">
        <h1 className="font-bold text-4xl mb-4 flex items-center justify-center pt-10 w-full">
          Listing Product
        </h1>
        
        {/* <Filter /> */}
        {/* Product card */}
        <div className="w-fit mx-auto grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 justify-center gap-y-20 gap-x-14 pt-10 pb-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="max-sm:w-36 max-sm:h-50 lg:w-72  duration-500"
            >
              <div className="relative">
                <img
                  src={'https://camthrive.com/cdn/shop/products/JayaOrganics-Kraoboil-11_2527x.jpg?v=1669315724'}
                  alt="Product"
                  className="max-sm:w-30 max-sm:h-50 lg:h-80 lg:w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 pt-3 w-72">
                  {/* Conditional rendering of status */}
                  {product.status === "SALE" && (
                    <div className="absolute top-0 left-0 bg-green-600 text-white px-2 py-1 m-3 rounded-md text-sm font-medium">
                      {product.status}
                    </div>
                  )}
                  {product.status === "SOLD" && (
                    <div className="absolute top-0 left-0 bg-red-600 text-white px-2 py-1 m-3 rounded-md text-sm font-medium">
                      {product.status}
                    </div>
                  )}
                </div>
              </div>
              <div className="px-4">
                <h3 className="md:text-lg text-xs max-sm:text-sm font-medium mb-2">
                  {product.brand}
                </h3>
                <p className="text-gray-600 line-clamp-3 text-xs md:text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold md:text-lg text-xs max-sm:text-sm ">
                    {" "}
                    ${product.price}
                  </span>
                  <Link to={`/details/${product.id}`}>
                    <button className="bg-pink-400 hover:bg-pink-600 text-white font-bold py-2 px-4 max-sm:p-2 max-sm:text-xs rounded">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}

      {/* Pagination */}

      {/* <ul className="flex justify-center text-xs font-medium space-x-1 py-10">
        <li>
          <a
            href="/?page=1"
            className="inline-flex items-center justify-center w-5 h-5 md:w-10 md:h-10 border border-gray-100 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="/?page=1"
            className=" w-5 h-5 md:w-10 md:h-10 flex items-center justify-center md:text-lg text-xs border border-gray-100 rounded leading-8"
          >
            1
          </a>
        </li>

        <li className=" w-5 h-5 md:w-10 md:h-10 flex items-center justify-center md:text-lg text-xs text-white bg-pink-400 border-pink-600 rounded leading-8">
          2
        </li>

        <li>
          <a
            href="/?page=3"
            className=" w-5 h-5 md:w-10 md:h-10 flex items-center justify-center md:text-lg text-xs border border-gray-100 rounded leading-8"
          >
            3
          </a>
        </li>

        <li>
          <a
            href="/?page=4"
            className=" w-5 h-5 md:w-10 md:h-10 flex items-center justify-center  md:text-lg text-xs border border-gray-100 rounded leading-8"
          >
            4
          </a>
        </li>

        <li>
          <a
            href="/?page=3"
            className="inline-flex items-center md:text-lg text-xs justify-center w-5 h-5 md:w-10 md:h-10 border border-gray-100 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ul> */}
    </>
  );
};

export default ProductCard;
