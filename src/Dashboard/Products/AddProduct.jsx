import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import UploadFile from "../UploadFile"; 

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    title: "",
    status: "",
    image: "",
  });
  const [categories, setCategories] = useState([]); 

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [uploadConfirmed, setUploadConfirmed] = useState(false); // State to track upload confirmation
  const cloudName = "ds9ccmtdq";
  const unsignedUploadPreset = "ntrpox3d";

  // Fetch categories data when component mounts
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // Function to fetch categories data from the API
  // const fetchData = async () => {
  //   try {
  //     const token = Cookies.get("token");
  //     console.log("Fetching data...");
  //     const response = await axios.get("http://artisan.devtopia.one/api/category", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     console.log("Response:", response.data);
  //     setCategories(response.data.data);
  //   } catch (error) {
  //     console.error("Error fetching category data:", error);
  //     setCategories([]);
  //   }
  // };

  // Function to handle form input changes
  const handleInput = (e) => {
    e.persist();
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Inside the handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get("token");
    if (!token) {
      setErrorMessage("Unauthorized access. Please login.");

      
      return;
    }

    try {
      // Upload the product image to Cloudinary
      // const imageFormData = new FormData();
      // imageFormData.append("file", product.image);
      // imageFormData.append("upload_preset", unsignedUploadPreset);

      // // Declare imageResponse variable
      // const imageResponse = await axios.post(
      //   `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      //   imageFormData,
      //   {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   }
      // );

      // // Upload the product banner to Cloudinary
      // const bannerFormData = new FormData();
      // bannerFormData.append("file", product.product_banner);
      // bannerFormData.append("upload_preset", unsignedUploadPreset);

      // // Declare bannerResponse variable
      // const bannerResponse = await axios.post(
      //   `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      //   bannerFormData,
      //   {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   }
      // );

      if (true) {
        // const imageUrl = imageResponse.data.secure_url;
        // // const bannerUrl = bannerResponse.data.secure_url;

        // // Update product object with uploaded image URLs
        // setProduct({ ...product, image: imageUrl });

        // Send product data to your backend server
        const productResponse = await axios.post(
          "http://artisan.devtopia.one/api/products",
          {
            // Include other product data here
            name: product.name,
            brand: product.brand,
            description: product.description,
            price: product.price,
            title: product.title,
            status: product.status,
            image: null,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Check if the product was successfully added
        if (productResponse.status === 204) {
          setSuccessMessage("Product added successfully.");
          // Clear product data
          setProduct({
            name: "",
            brand: "",
            description: "",
            price: "",
            title: "",
            status: "",
            image: null,
          });
        } else {
          // If there was an issue with the request, display an error message
          setErrorMessage("Failed to add product. Please try again later.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while adding the product.");
    }
  };

  // Function to handle image upload
  const handleImageUpload = (imageUrl, bannerUrl) => {
    setProduct({ ...product, image: imageUrl, product_banner: bannerUrl });
  };

  const handleConfirmUpload = async (imageUrl,bannerUrl) => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        setErrorMessage("Unauthorized access. Please login.");
        return;
      }
      handleSubmit();
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while adding the product.");
    }
  };

  return (
    <div className="w-full h-auto">
       <div className="mt-5">
      <h1 className="text-2xl font-semibold mb-4 text-blue-600">Add Product</h1>
      <div className="w-[600px] bg-white shadow-md rounded px-5 py-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Product Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Product Name"
              name="name"
              value={product.name}
              onChange={handleInput}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
              Product Brand
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="brand"
              type="text"
              placeholder="Product Brand"
              name="brand"
              value={product.brand}
              onChange={handleInput}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Product Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder="Product Description"
              name="description"
              value={product.description}
              onChange={handleInput}
            />
          </div>
          {/* <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category_id">
              Category
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="category_id"
              value={product.category_id}
              onChange={(e) => setProduct({ ...product, category_id: e.target.value })}
            >
              <option>Select category...</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.category_title}
                </option>
              ))}
            </select>
          </div> */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Stock"
              name="title"
              value={product.title}
              onChange={handleInput}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Price
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">$</span>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 pl-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="number"
                placeholder="Price"
                name="price"
                value={product.price}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product_review">
              Status
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="status"
              type="text"
              placeholder="Link video Product"
              name="status"
              value={product.status}
              onChange={handleInput}
            />
          </div>
          <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Product Image
              </label>
              <UploadFile
                section="image"
                cloudName={cloudName}
                unsignedUploadPreset={unsignedUploadPreset}
                handleImageUpload={(imageUrl) => setProduct({ ...product, image: imageUrl })}
                handleIconUpload={(imageUrl) => setProduct({ ...product, product_banner: imageUrl })}
                onConfirmUpload={handleConfirmUpload}
                setUploadConfirmed={setUploadConfirmed}
              />
            </div>
            {/* <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product_banner">
                Product Banner
              </label>

              <UploadFile
                section="product_banner"
                cloudName={cloudName}
                unsignedUploadPreset={unsignedUploadPreset}
                handleBannerUpload={(bannerUrl) => setProduct({ ...product, product_banner: bannerUrl })} // Ensure this line is present
                handleIconUpload={(imageUrl) => setProduct({ ...product, product_banner: imageUrl })}
                onConfirmUpload={handleConfirmUpload}
                setUploadConfirmed={setUploadConfirmed}
              />
            </div> */}
            {/* Error and success messages */}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && (
              <p className="text-green-500">{successMessage}</p>
            )}
            <div className="flex items-center justify-center mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
