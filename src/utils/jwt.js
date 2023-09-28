import jwt from "jsonwebtoken";



export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "password", {
    expiresIn: "3h",
  })
  // return jwt
}



export const verifyToken = (jwt) => {
 return jwt.verify(jwt, process.env.JWT_SECRET || "password")
}