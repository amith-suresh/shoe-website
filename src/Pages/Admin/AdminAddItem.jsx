import React, { useState } from "react";
import axios from "axios";
import GoBackButton from "../../Components/GoBackButton";

function AdminAddItem() {
  const [post, Setpost] = useState({
    id: "",
    price: "",
    productImage: "",
    productdescription: "",
    category: "",
  });
  const [isValid, setValid] = useState(true);
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    Setpost({ ...post, [event.target.id]: event.target.value });
  };

  function handleSubmit(event) {
    event.preventDefault();
    let validationErrors = {};

    if (post.id === "") {
      setValid(false);
      validationErrors.id = "Id required";
    }
    if (post.price === "") {
      setValid(false);

      validationErrors.price = "Price required";
    }
    if (post.productImage === "") {
      setValid(false);

      validationErrors.productImage = "Image required";
    }
    if (post.productdescription === "") {
      setValid(false);

      validationErrors.productdescription = "Description required";
    }
    if (post.category === "") {
      setValid(false);

      validationErrors.category = "Category required";
    }

    setErrors(validationErrors);
    setValid(true);
    console.log(isValid);
    if (isValid) {
      axios
        .post("http://localhost:3000/products", post)
        .then((res) => {
          alert("Item Added successfully");
          console.log(res.data);
          Setpost({
            id: "",
            price: "",
            productImage: "",
            productdescription: "",
            category: "",
          });
          window.location.reload()
        })
        .catch((error) => console.error(error));
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-10 px-4">
      <GoBackButton />
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ID
          </label>
          <input
            type="text"
            id="id"
            placeholder="Enter id"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleInput}
            value={post.id}
          />
          {errors.price && (
            <p className="text-red-500 text-xs italic">{errors.price}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Price
          </label>
          <input
            type="text"
            id="price"
            placeholder="Enter price"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleInput}
            value={post.price}
          />
          {errors.price && (
            <p className="text-red-500 text-xs italic">{errors.price}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="productImage"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Product Image URL
          </label>
          <input
            type="text"
            id="productImage"
            placeholder="Enter product image URL"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleInput}
            value={post.productImage}
          />
          {errors.productImage && (
            <p className="text-red-500 text-xs italic">{errors.productImage}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="productdescription"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Product Description
          </label>
          <textarea
            id="productdescription"
            placeholder="Enter product description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
            onChange={handleInput}
            value={post.productdescription}
          />
          {errors.productdescription && (
            <p className="text-red-500 text-xs italic">
              {errors.productdescription}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            placeholder="Enter category"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleInput}
            value={post.category}
          />
          {errors.category && (
            <p className="text-red-500 text-xs italic">{errors.category}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminAddItem;
