"use client";
import { useState, useEffect } from "react";
import { Edit, Trash, CheckCircle, XCircle, Plus } from "lucide-react";
import axios from "axios";

type Product = {
  _id: string;
  name: string;
  price: string;
  stock: number;
  image: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [newProduct, setNewProduct] = useState<Product>({
    _id: "",
    name: "",
    price: "",
    stock: 0,
    image: "",
  });
  const [image, setImage] = useState<File | null>(null);

  // Fetch products from the backend on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      try {
        // Make the API call to delete the product from the database
        const response = await axios.delete(`http://localhost:8080/api/products/delete/${id}`);
  
        if (response.status === 200) {
          // If deletion is successful, update the local state
          setProducts(products.filter((product) => product._id !== id));
          alert("Product deleted successfully");
        }
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Error deleting product");
      }
    }
  };
  

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setNewProduct(product);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleAddProduct = async () => {
    if (!newProduct.name || !newProduct.price || !newProduct.stock || !image) return;

    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("price", newProduct.price);
    formData.append("stock", String(newProduct.stock));
    formData.append("image", image);

    try {
      const response = await axios.post("http://localhost:8080/api/products/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setProducts([...products, response.data]);
      setNewProduct({ _id: "", name: "", price: "", stock: 0, image: "" });
      setImage(null);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  

  const handleUpdateProduct = async () => {
    if (!editingProduct) return;

    const formData = new FormData();
    formData.append("name", editingProduct.name);
    formData.append("price", editingProduct.price);
    formData.append("stock", String(editingProduct.stock));
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axios.put(`http://localhost:8080/api/products/edit/${editingProduct._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const updatedProducts = products.map((product) =>
        product._id === editingProduct._id ? response.data : product
      );
      setProducts(updatedProducts);
      setEditingProduct(null);
      setNewProduct({ _id: "", name: "", price: "", stock: 0, image: "" });
      setImage(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Stock"
          value={newProduct.stock}
          onChange={(e) => setNewProduct({ ...newProduct, stock: Number(e.target.value) })}
          className="p-2 border rounded"
        />
        <input
          type="file"
          onChange={handleImageChange}
          className="p-2 border rounded"
        />
        <button
          className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600 transition"
          onClick={handleAddProduct}
        >
          <Plus size={18} />
        </button>
      </div>

      {editingProduct && (
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-4">Edit Product</h2>
          <input
            type="text"
            value={editingProduct.name}
            onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
            className="p-2 border rounded mb-2"
          />
          <input
            type="text"
            value={editingProduct.price}
            onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
            className="p-2 border rounded mb-2"
          />
          <input
            type="number"
            value={editingProduct.stock}
            onChange={(e) => setEditingProduct({ ...editingProduct, stock: Number(e.target.value) })}
            className="p-2 border rounded mb-2"
          />
          <input
            type="file"
            onChange={handleImageChange}
            className="p-2 border rounded mb-2"
          />
          <button
            className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition"
            onClick={handleUpdateProduct}
          >
            Update Product
          </button>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Price</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Image</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="border-b">
                <td className="p-3">{product.name}</td>
                <td className="p-3">{product.price}</td>
                <td className="p-3">
                  {product.stock > 0 ? (
                    <span className="text-green-600 flex items-center gap-2">
                      <CheckCircle size={18} /> In Stock ({product.stock})
                    </span>
                  ) : (
                    <span className="text-red-600 flex items-center gap-2">
                      <XCircle size={18} /> Out of Stock
                    </span>
                  )}
                </td>
                <td className="p-3">
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
                  ) : (
                    <span>No image</span>
                  )}
                </td>
                <td className="p-3 flex gap-3">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
                    onClick={() => handleEdit(product)}
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                    onClick={() => handleDelete(product._id)}
                  >
                    <Trash size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}




