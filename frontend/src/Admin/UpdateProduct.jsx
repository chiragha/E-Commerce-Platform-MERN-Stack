import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import {BACKEND_URL} from "../utils/utils";

function UpdateProduct() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ FETCH DATA (FIXED)
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const { data } = await axios.get(
          `${BACKEND_URL}/product/${productId}`
        );

        setTitle(data.product.title);
        setDescription(data.product.description);
        setPrice(data.product.price);
        setImagePreview(data.product.image.url);

      } catch (error) {
        toast.error("Failed to fetch product data");
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [productId]);

  // ✅ IMAGE PREVIEW
  const changePhotoHandler = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  // ✅ UPDATE PRODUCT
  const handleUpdateProduct = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login first");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);

      if (image) {
        formData.append("image", image);
      }

      const response = await axios.put(
        `${BACKEND_URL}/product/update/${productId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(response.data.message || "Product updated successfully");
      navigate("/admin/our-products");

    } catch (error) {
      toast.error(error.response?.data?.error || "Update failed");
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading product...</p>;
  }

  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1 bg-gray-100 min-h-screen p-6">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">

          {/* 🔙 BACK BUTTON */}
          <button
            onClick={() => navigate(-1)}
            className="mb-4 text-sm text-blue-600 hover:underline"
          >
            ← Back
          </button>

          <h2 className="text-2xl font-bold mb-6 text-center">
            Update Product
          </h2>

          <form onSubmit={handleUpdateProduct} className="space-y-5">

            {/* TITLE */}
            <div>
              <label className="block mb-1 font-medium">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="block mb-1 font-medium">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* PRICE */}
            <div>
              <label className="block mb-1 font-medium">Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* IMAGE */}
            <div>
              <label className="block mb-2 font-medium">Product Image</label>

              <img
                src={imagePreview || "/imgPL.webp"}
                alt="Preview"
                className="w-full max-w-xs rounded-lg mb-3"
              />

              <input type="file" onChange={changePhotoHandler} />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Update Product
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct;