import express from "express";
import {
  buyProduct,
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct
} from "../controllers/product.controller.js";
import userAuthenticateToken  from "../middlewares/user.mid.js";
import adminAuthenticateToken from "../middlewares/admin.mid.js";

const router = express.Router();

router.post("/create",adminAuthenticateToken, createProduct);
router.put("/update/:productId", adminAuthenticateToken, updateProduct);
router.delete("/delete/:productId", adminAuthenticateToken, deleteProduct);

router.get("/products", getProducts);
router.post("/buy/:productId", userAuthenticateToken, buyProduct);


router.get("/:productId", getProductById);
export default router;