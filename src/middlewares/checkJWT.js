
import { Request, Response, NextFunction } from "express"
import { verifyToken } from "../utils/jwt"
import { Usermodel } from "../models/UsersModel"
import { JwtPayload } from "jsonwebtoken"




export const checkJwt = async (req, res, next) => {
  try {

    const jwtByUser = req.headers.authorization || ""
    const jwt = jwtByUser.split(" ").pop()

    const isCorrect = verifyToken(`${jwt}`) 

    if (!isCorrect) {

      res.status(401).json({ msg: "Invalid token" })
    } else {


      const user = await Usermodel.findOne({ email: isCorrect.id })

      req.user = user
      next()
    }

  } catch (error) {
    res.status(400).json({ msg: "Invalid session" })
  }
}