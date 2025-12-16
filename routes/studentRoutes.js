const express = require("express");
const {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  getAllStudents
} = require("../controllers/studentController");

const router = express.Router();
router.post("/", createStudent);

router.get("/", getAllStudents);
router.get("/:id", getStudent);

router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);


module.exports = router;
