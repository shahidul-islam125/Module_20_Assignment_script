const express = require('express');
const testController = require("../controller/salesController");
const router = express.Router();

router.get("/total-revenue", testController.CalculateTotal);
router.get("/quantity-by-product", testController.QuantityByProduct);
router.get("/top-products", testController.TopProducts);
router.get("/average-price", testController.AvgPrice);
router.get("/revenue-by-month", testController.RevnueByMonth);
router.get("/highest-quantity-sold", testController.HighestQtySold);
router.get("/department-salary-expense", testController.DepartmentSalaryExp);


module.exports = router;  