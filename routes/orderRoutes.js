const express = require("express");
const orderController = require("../controller/orderController");

// middleware required
const { auth } = require("../middleware/auth");

const router = express.Router();

router.post("/", orderController.addOrder);
router.put("/:id", orderController.updateOrder);
router.delete("/:id", orderController.deleteOrder);
router.get("/:id", orderController.getSingleOrder);
router.get("/", auth, orderController.getAllOrders);

module.exports = router;
