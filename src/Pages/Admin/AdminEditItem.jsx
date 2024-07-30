import React, { useState, useEffect } from "react";
import axios from "axios";
import GoBackButton from "../../Components/GoBackButton";
import { useParams, useNavigate } from "react-router-dom";

function AdminEditItem() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    id: "",
    price: "",
    productImage: "",
    productdescription: "",
    category: "",
  });
  const [isValid, setValid] = useState(true);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => console.error('Error fetching item:', error));
  }, [id]);

  const handleInput = (event) => {
    setPost({ ...post, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let validationErrors = {};
    let valid = true;

    if (post.price === "") {
      valid = false;
      validationErrors.price = "Price required";
    }
    if (post.productImage === "") {
      valid = false;
      validationErrors.productImage = "Image URL required";
    }
    if (post.productdescription === "") {
      valid = false;
      validationErrors.productdescription = "Description required";
    }
    if (post.category === "") {
      valid = false;
      validationErrors.category = "Category required";
    }

    setErrors(validationErrors);
    setValid(valid);

    if (valid) {
      try {
        const response = await axios.patch(`http://localhost:3000/products/${id}`, post);
        alert("Item updated successfully");
        navigate('/admin');
        window.location.reload()
      } catch (error) {
        console.error('Error updating item:', error);
        alert("Failed to update item. Please try again.");
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 px-4">
      <GoBackButton />
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Price</label>
          <input
            type="text"
            id="price"
            placeholder="Enter price"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleInput}
            value={post.price}
          />
          {errors.price && <p className="text-red-500 text-xs italic">{errors.price}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="productImage" className="block text-gray-700 text-sm font-bold mb-2">Product Image URL</label>
          <input
            type="text"
            id="productImage"
            placeholder="Enter product image URL"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleInput}
            value={post.productImage}
          />
          {errors.productImage && <p className="text-red-500 text-xs italic">{errors.productImage}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="productdescription" className="block text-gray-700 text-sm font-bold mb-2">Product Description</label>
          <textarea
            id="productdescription"
            placeholder="Enter product description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
            onChange={handleInput}
            value={post.productdescription}
          />
          {errors.productdescription && <p className="text-red-500 text-xs italic">{errors.productdescription}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Category</label>
          <input
            type="text"
            id="category"
            placeholder="Enter category"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleInput}
            value={post.category}
          />
          {errors.category && <p className="text-red-500 text-xs italic">{errors.category}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminEditItem;
