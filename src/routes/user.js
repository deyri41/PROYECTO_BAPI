import { registerUser, loginUser, allUser, deleteUser, updateUser } from "../controllers/userControllers.js";
import  Router  from "express";


const router = Router()

// http://localhost:3001/api/register
router.post("/register", registerUser)

router.post("/login", loginUser)

router.get("/allUser", allUser)

router.delete("/deleteUser/:id", deleteUser)


router.put("/updateUser/:id", updateUser)







export default router
